#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h> //Needed for atoi

int main(int argc, string argv[])
{
    //Checks to see if there are exactly 1 key input (./caesar counts as 1, the key counts as 2)
    if (argc != 2)
    {
        printf("Usage: ./caesar k");
        return 1;
    }
    
    //Convert string argv to int (argv[0]=./caesar; argv[1]= string for cipher input)
    int key = atoi(argv[1]);
    
    //Check if key is non-negative integer
    if (key < 0)
    {
        printf("Error: Key  is a negative integer\n");
        return 2;
    }
    else
    {
        //Request text to encrypt once key is validated
        printf("plaintext: ");
        string plaintext = get_string();
        
        //only proceed if plaintext is really a string
        if (plaintext != NULL)
        {
            printf("ciphertext: ");
        //Loop each character in the plaintext for encryption
            for (int i = 0, n = strlen(plaintext); i < n; i++)
            {
                int ciphertext = 0;
                
                //Convert Capital letters
                if (isupper(plaintext[i]))
                {
                    ciphertext = (((plaintext[i] - 65 + key) % 26) + 65);
                    printf("%c", (char) ciphertext); //Refer to lecture 2 (1:03:00) | Convert one data type to another
                }
                //Convert Small letters
                else if (islower(plaintext[i]))
                {
                    ciphertext = (((plaintext[i] - 97 + key) % 26) + 97);
                    printf("%c", (char) ciphertext);
                }
                //Ignore conversion for non alphabetical (e.g space, hyphens)
                else
                {
                    printf("%c", plaintext[i]);
                }
            }
            printf("\n");
            return 0; //Signify the program runs well
        }
    }
}