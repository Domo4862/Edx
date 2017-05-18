#include <cs50.h>
#include <stdio.h>

int main(void)
{
   /*Variables*/
   int height;
   int space;
   int hash;
   
   /*Prompt for Height*/
   do
   {
      printf("Specify the height between 0 to 23 of the half-pyramid\n");
      height = get_int();
   }
   while (height < 0 || height > 23);
   
   /*Printing pyramid*/
   for (int i = 1; i <= height; i++)
   {
      for (space = (height - i); space > 0; space--)
      {
         printf(" ");
      };
      
      for (hash = 0; hash < (i + 1); hash++)
      {
         printf("#");
      };
      
      printf("\n");
   };
   
   return 0;
};