#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int main(int argc, string argv[])
{
    //Checks to see if there are exactly 1 key input
    if (argc != 2)
    {
        printf("./vigenere k\n");
        return 1;
    }
    
    //Match variable key with argv
    string key = argv[1];
    
    //Loops each character in key and checks for numbers
    for (int m = 0, n = strlen(key); m < n; m++)
    {
        //Note to self - http://stackoverflow.com/questions/1469711/converting-letters-to-numbers-in-c
        if (key[m] >= '0' && key[m] <= '9')
        {
            printf("./vigenere k\n");
            return 1;
        }
    }

    //Request plaintext for encryption
    printf("plaintext: ");
    string plaintext = get_string();
     
    if (plaintext != NULL)
    {
         printf("ciphertext: ");
         
        //Loops each character in plaintext (j is exclusively for key)
        for (int i = 0, j = 0, m = strlen(plaintext); i < m; i++, j++)
        {
            //Restart the key value looping
            if (j >= strlen(key))
            {
                j = 0;
            }
            
            //if plaintext[i] is not an alphabet, revert j back by one
            if (!isalpha(plaintext[i]))
            {
                j = (j - 1);
            }
            
            int cipherkey = 0;
            int keyvalue = key[j];
            
            //Assigning key to a value as per specification (Aa = 0), (Zz = 26)
            if (keyvalue >= 'A' && keyvalue <= 'Z')
            {
                cipherkey = keyvalue - 65;
            }
            
            if (keyvalue >= 'a' && keyvalue <= 'z')
            {
                cipherkey = keyvalue - 97;
            }
            
            int ciphervalue = (plaintext[i] + cipherkey);
            
            //Loop back from Z to A/ z to a if plaintext + key exceed ASCII value of Z
            if (isupper(plaintext[i]) && ciphervalue > 'Z')
            {
                ciphervalue = ciphervalue - 26;
            }
            
            if (islower(plaintext[i]) && ciphervalue > 'z')
            {
                ciphervalue = ciphervalue - 26;
            }
            
            //Print ciphervalue if the plaintext is an alphabet. Else, it copy and paste from plaintext
            if (isalpha(plaintext[i]))
            {
                printf("%c", ciphervalue);
            }
            else
            {
                printf("%c", plaintext[i]);
            }
        }
        printf("\n");
        return 0;
    }
}