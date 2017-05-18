import cs50

def main():
    changeleft = check() * 100
    count = 0
    while changeleft >= 25:
        count += 1
        changeleft -= 25
        
    while changeleft >= 10:
        count += 1
        changeleft -= 10
        
    while changeleft >= 5:
        count += 1
        changeleft -= 5
        
    while changeleft >= 1:
        count += 1
        changeleft -= 1
        
    print("{}".format(count))
    
def check():
    while True:
        print("O hai! How much change is owed?")
        change = cs50.get_float()
        if change > 0:
            break
    return change
    
if __name__ == "__main__":
    main()