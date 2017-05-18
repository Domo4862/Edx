#include <cs50.h>
#include <stdio.h>
#include <math.h>

/*Variables*/
    float change;
    int changeleft = 0;
    int coincount = 0;


int main(void)
{
    /*Query on change*/
    do
    {
    printf("How much do you owe? (input in (X.XX))\n");
    change = get_float();
    } while (change < 0);
    
    /*Change from dollar to cents*/
    changeleft = round(change * 100);
    
    /*Calculate coin required*/
    while (changeleft >= 25)
    {
      coincount++;
      changeleft -= 25;
    }
    
    while (changeleft >= 10)
    {
      coincount++;
      changeleft -= 10;
    }
    
    while (changeleft >= 5)
    {
      coincount++;
      changeleft -= 5;
    }
    
    while (changeleft >= 1)
    {
      coincount++;
      changeleft -= 1;
    }
    
    /*Print coin required*/
    printf("%i\n", coincount);
}