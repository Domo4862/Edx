from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session, url_for
from flask_session import Session
from passlib.apps import custom_app_context as pwd_context
from tempfile import mkdtemp

from helpers import *

# configure application
app = Flask(__name__)

# ensure responses aren't cached
if app.config["DEBUG"]:
    @app.after_request
    def after_request(response):
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Expires"] = 0
        response.headers["Pragma"] = "no-cache"
        return response

# custom filter
app.jinja_env.filters["usd"] = usd

# configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# configure CS50 Library to use SQLite database
db = SQL("sqlite:///finance.db")

@app.route("/")
@login_required
def index():
    # Get transaction history
    transactions = db.execute("SELECT * FROM Transactions WHERE id = :uid", uid = session["user_id"])
    
    # Create a new dict to hold tuples of transaction
    translist = {}
    stock_value = 0
    
    # Loop every transaction
    for transaction in transactions:
        # Checks for such symbol in the translist. If none, go to "else"
        if transaction["symbol"] in translist:
            # Increase the stock value for every stock transaction
            stock_value += transaction["share"] * translist[transaction["symbol"]]["price"]
            # Increment the value of shares owned by user for each symbol
            translist[transaction["symbol"]]["share"] += transaction["share"]
            if translist[transaction["symbol"]]["share"] == 0:
                del translist[transaction["symbol"]]
                
        else:
            # Use symbol as unique key and store in translist
            translist[transaction["symbol"]] = transaction
            # Look up the price of the stock symbol
            translist[transaction["symbol"]]["price"] = lookup(transaction["symbol"])["price"]
            # Calculate the stock price based on current pricing
            stock_value += transaction["share"] * translist[transaction["symbol"]]["price"]
    
    # Get users current cash
    cash = db.execute("SELECT cash FROM users WHERE id = :uid", uid = session["user_id"])[0]["cash"]
    # Users cash + total stock value
    grand_total = cash + stock_value

    return render_template("index.html", transactions = translist, cash = usd(cash), stock = usd(stock_value), total = usd(grand_total))
   
    
@app.route("/buy", methods=["GET", "POST"])
@login_required
def buy():
    """Buy shares of stock."""
    if request.method == "POST":
        # Check valid symbol
        if not request.form.get("symbol"):
            return apology("Must provide stock symbol")
        
        # Lookup the symbol price
        stock = lookup(request.form.get("symbol"))
        
        if not stock:
            return apology("invalid stock symbol")
        
        # Get input of amount of shares to purchase
        amount = int(request.form.get("shares"))
        
        if amount <= 0:
            return apology("Number of shares cannot be negative")
        
        # Get users current cash amount
        cash = db.execute("SELECT cash FROM users WHERE id = :uid", uid = session["user_id"])[0]["cash"]
        
        # Calculate total cost to buy desired stock
        total = stock["price"] * amount
        
        # Rejects if not enough cash
        if total > cash:
            return apology("You do not have enough cash")
        else:
            db.execute("INSERT INTO Transactions (id, symbol, share, price, method, timestamp) VALUES (:uid, :symbol, :shares, :price, 'BUY', CURRENT_TIMESTAMP)",\
                        uid = session["user_id"], symbol = stock["symbol"], shares = amount, price = stock["price"])
            
            db.execute("UPDATE users SET cash = cash - :total where id = :uid", total = total, uid = session["user_id"])
            
        return redirect(url_for("index"))
        
    else:
        return render_template("buy.html")
        
@app.route("/history")
@login_required
def history():
    """Show history of transactions."""
    # Read Transactions database for desired elements
    transactions = db.execute("SELECT symbol, share, price, method, timestamp FROM Transactions WHERE id = :uid", uid = session["user_id"])
    
    # Convert prices to 2 decimal places
    for transaction in transactions:
        transaction["price"] = usd(transaction["price"])
        
    return render_template("history.html", transactions = transactions)
    
@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in."""

    # forget any user_id
    session.clear()

    # if user reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username")

        # ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password")

        # query database for username
        rows = db.execute("SELECT * FROM users WHERE username = :username", username=request.form.get("username"))

        # ensure username exists and password is correct
        if len(rows) != 1 or not pwd_context.verify(request.form.get("password"), rows[0]["hash"]):
            return apology("invalid username and/or password")

        # remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # redirect user to home page
        return redirect(url_for("index"))

    # else if user reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")

@app.route("/logout")
def logout():
    """Log user out."""

    # forget any user_id
    session.clear()

    # redirect user to login form
    return redirect(url_for("login"))

@app.route("/quote", methods=["GET", "POST"])
@login_required
def quote():
    """Get stock quote."""
    if request.method == "POST":
        if not request.form.get("symbol"):
            return apology("Must provide stock symbol")
        
        # Lookup the stock market for "symbol"   
        stock = lookup(request.form.get("symbol"))
        
        if not stock:
            return apology("invalid stock symbol")
            
        return render_template("quoted.html", stock = stock)
        
    else:
        return render_template("quote.html")

@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user."""
    # close any current session
    session.clear()
    
    if request.method == "POST":
        # Check username
        if not request.form.get("username"):
            return apology("must provide username")
            
        # Check password
        elif not request.form.get("password"):
            return apology("must provide password")
        
        # Get confirmation of password
        elif not request.form.get("confirm"):
            return apology("please retype your password")
        
        # Check if passwords match
        if request.form.get("password") != request.form.get("confirm"):
            return apology("password does not match")
        
        else:
            rows = db.execute("SELECT * FROM users WHERE username = :username", username=request.form.get("username"))
            if len(rows) == 0:
                # Encrypt password
                encrypt = pwd_context.encrypt(request.form.get("password"))
                
                # Insert registry into database
                rows = db.execute("INSERT INTO users (username, hash) VALUES (:username, :hash)", username = request.form.get("username"), hash = encrypt)
                
                # return back to index after register
                return redirect(url_for("index"))
            
            else:
                return apology("username already exist")
                
        # remember user after register
        session["user_id"] = rows[0]["id"]
    
    else:
        # if request method is GET go straight to register.html
        return render_template("register.html")
        
@app.route("/sell", methods=["GET", "POST"])
@login_required
def sell():
    """Sell shares of stock."""
    if request.method == "POST":
        # Check valid symbol
        if not request.form.get("symbol"):
            return apology("Must provide stock symbol")
        
        # Lookup the symbol price
        stock = lookup(request.form.get("symbol"))
        
        if not stock:
            return apology("invalid stock symbol")
        
        # Get input of amount of shares to sell
        amount = int(request.form.get("shares"))
        
        if amount <= 0:
            return apology("Number of shares cannot be negative")
        
        # Get users current cash
        cash = db.execute("SELECT cash FROM users WHERE id = :uid", uid = session["user_id"])[0]["cash"]
        
        # Calculate total earning
        sold = stock["price"] * amount
        
        # Get amount of shares owned by user
        stock_owned = db.execute("SELECT SUM(share) FROM Transactions WHERE id = :uid AND symbol = :symbol", uid = session["user_id"], symbol = stock["symbol"])
        
        if amount > stock_owned[0]["SUM(share)"]:
            return apology("You sold more shares than you had")
    
        # Update Transactions
        db.execute("INSERT INTO Transactions (id, symbol, share, price, method, timestamp) VALUES (:uid, :symbol, :shares, :price, 'SELL', CURRENT_TIMESTAMP)",\
                    uid = session["user_id"], symbol = stock["symbol"], shares = -amount, price = stock["price"])
    
        # Update users cash
        db.execute("UPDATE users SET cash = cash + :total where id = :uid", total = sold, uid = session["user_id"])
            
        return redirect(url_for("index"))
    else:
        return render_template("sell.html")
        
@app.route("/password", methods=["GET", "POST"])
@login_required
def password():
    if request.method == "POST":
        
        # Ensure no blank spaces
        if not request.form.get("oldpassword"):
            return apology("must provide old password")
        
        elif not request.form.get("newpassword"):
            return apology("please type your new password")
        
        elif not request.form.get("confirm"):
            return apology("please confirm your new password")
        
        # Check old password if match
        rows = db.execute("SELECT * FROM users WHERE id = :user_id", user_id=session['user_id'])
        
        if len(rows) != 1 or not pwd_context.verify(request.form.get("oldpassword"), rows[0]["hash"]):
            return apology("Old password does not match")
        
        # Check if new passwords match
        if request.form.get("newpassword") != request.form.get("confirm"):
            return apology("password does not match")
            
        # Update database with new password
        hash = pwd_context.encrypt(request.form.get("newpassword"))
        
        success = db.execute("UPDATE users SET hash = :hash", hash = hash)
        if not success:
            return apology("Error occured, please try again")
            
        # Redirect
        return redirect(url_for("index"))
    else:
        return render_template("password.html")