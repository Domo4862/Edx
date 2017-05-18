import cs50
import sys


def main():
    key = sys.argv[1]
    if int(key) < 0:
        print("Key must not be negative integer")
        exit(2)

    print("Plaintext: ", end = "")
    plain = cs50.get_string()

    if plain != None:
        print("Ciphertext: ", end = "")
        for i in plain:
            cipher = 0

            if i.isupper():
                cipher = (((ord(i) - 65 + int(key)) % 26) + 65)
                print(chr(cipher), end = "")
            elif i.islower():
                cipher = (((ord(i) - 97 + int(key)) % 26) + 97)
                print(chr(cipher), end = "")
            else:
                print(i, end = "")


def check():
    if len(sys.argv) != 2:
        print("python caesar.py k")
        exit(1)

if __name__ == "__main__":
    main()