import cs50

def main():
    h = check()
    for i in range(h):
        print(" " * (h - i - 1), end="")
        print("#" * (i + 1), end="")
        print(" " * 2, end="")
        print("#" * (i + 1))

def check():
    while True:
        print("Height: ", end="")
        h = cs50.get_int()
        if h > 0 and h < 24:
            break
    return h
    
if __name__ == "__main__":
    main()