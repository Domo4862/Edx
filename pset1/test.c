#include <stdio.h>
#include <cs50.h>

/*Variables*/
int height;
int space;
int hash;

int main(void)
{
    /*Height input*/
    do
    {
        printf("Input height of pyramid for Mario\n");
        height = get_int();
    } while (height < 0);
    
    /*Construct pyramid*/
    for (int i = 0; i < height; i++)
    {
        for (hash = 0; hash < (i + 1); hash++)
        {
            printf("#");
        }
        
        for (space = (height - i); space > 1; space--)
        {
            printf("1");
        }
        
        
        
    printf("\n");
    }
}