/**
 * helpers.c
 *
 * Helper functions for Problem Set 3.
 */
 
#include <cs50.h>

#include "helpers.h"

/**
 * Returns true if value is in array of n values, else false.
 */
bool search(int value, int values[], int n)
{
    //Checks for negative integer number
    if (n < 0)
    {
        return false;
    };
    
    //Variables
    int first = 0;
    int last = n - 1;
    
    //Binary search method for O(log n) running time
    //Create a loop to repeat halving the array length
    while (first <= last)
    {
        int middle = (first + last) / 2;
        
        if (value == values[middle])
        {
            return true;
        }
        else if (value > values[middle])
        {
            first = middle + 1;
        }
        else
        {
            last = middle - 1;
        }
    }

    return false;
}

/**
 * Sorts array of n values.
 */
void sort(int values[], int n)
{
    //Implemented bubble sort for an O(n^2) sorting algorithm
    //Variables
    int temp;
    bool swap = false;
    
    do
    {
        //Initialise swap to false as no swap
        swap = false;
        //loop for bubble sort values comparison
        for (int i = 0; i < (n - 1); i++)
        {
            //Swap if next number is lesser than current number
            if (values[i] > values[i + 1])
            {
                temp = values[i];
                values[i] = values[i + 1];
                values[i + 1] = temp;
                
                swap = true;
            }
        }
    } while (swap);
}
