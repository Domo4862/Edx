import cs50
import sys

# Vigenere conversion block
def main():
    # Variables
    check()
    text = plain() # Input plaintext
    key = sys.argv[1] # Input key converter
    text_size = len(text)
    key_size = len(key)
    cipher_key = 0 # Storage for cipher key value
    j = 0 # Key counter
    
    # Loop 0 - (length of text - 1)
    for i in range(text_size):
        # Reset key counter
        if j >= key_size:
            j = 0
        
        # Ensures alphabet behaviour matches
        if key[j] >= "A" and key[j] <= "Z":
            cipher_key = ord(key[j]) - 65
        if key[j] >= "a" and key[j] <= "z":
            cipher_key = ord(key[j]) - 97
        
        # Increase key counter by 1
        j += 1
        
        # cipher_val used for conversion from int to char
        cipher_val = ord(text[i]) + cipher_key
        
        # Loop back to "A/a" if exceeds "Z/z"
        if text[i].isupper() and chr(cipher_val) > "Z":
            cipher_val = cipher_val - 26
        if text[i].islower() and chr(cipher_val) > "z":
            cipher_val = cipher_val - 26
        
        # Print space if space present
        if text[i] == " ":
            print(" ", end="")
            j -= 1
        else:
            print(chr(cipher_val), end="")
    print()

# Checks for 2 argument count
def check():
    if len(sys.argv) != 2:
        print("python Vigenere.py k")
        exit(1)

# Prompt input for plaintext
def plain():
    while True:
        print("plaintext: ", end="")
        p = cs50.get_string()
        if p != None:
            print("ciphertext: ", end="")    
            break
    return p
    
if __name__ == "__main__":
    main()