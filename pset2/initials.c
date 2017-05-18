#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void)
{
    //Prompt for name
    string name = get_string();
    
    //Prints the first initial letter
    printf("%c", toupper (name[0]));
    
    //for loop checks each character for spaces
    for (int i = 0; i < strlen(name); i++)
    {
        //If loop detects a space, it prints the letter after the space
        if (name[i] == ' ')
        {
            printf("%c", toupper(name[i + 1]));
        }
    }
    
    printf("\n");
}

