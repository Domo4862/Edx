#include <stdio.h>
#include <stdlib.h>

#include "bmp.h"

int main(int argc, char *argv[])
{
    // ensure proper usage
    if (argc != 4)
    {
        printf("Usage: ./resize resize_factor infile outfile\n");
        return 1;
    }
    
    // Saves resize factor into variable factor
    int factor = atoi(argv[1]);
    
    // Checks for a positive integer between 1 to 100
    if (factor < 1 || factor > 100)
    {
        printf("resize_factor has to be between 1 to 100\n");
        return 2;
    }
    
    // remember filenames
    char *infile = argv[2];
    char *outfile = argv[3];
    
    // open input file 
    FILE *inptr = fopen(infile, "r");
    if (inptr == NULL)
    {
        printf("Could not open %s.\n", infile);
        return 3;
    }

    // open output file
    FILE *outptr = fopen(outfile, "w");
    if (outptr == NULL)
    {
        fclose(inptr);
        printf("Could not create %s.\n", outfile);
        return 4;
    }
    
    // New Variable for resize conversion
    // read infile's BITMAPFILEHEADER
    BITMAPFILEHEADER bf;
    fread(&bf, sizeof(BITMAPFILEHEADER), 1, inptr);
    
    // read infile's BITMAPINFOHEADER
    BITMAPINFOHEADER bi;
    fread(&bi, sizeof(BITMAPINFOHEADER), 1, inptr);
    
    // ensure infile is (likely) a 24-bit uncompressed BMP 4.0
    if (bf.bfType != 0x4d42 || bf.bfOffBits != 54 || bi.biSize != 40 || 
        bi.biBitCount != 24 || bi.biCompression != 0)
    {
        fclose(outptr);
        fclose(inptr);
        printf("Unsupported file format.\n");
        return 5;
    }
    
    // New BitMap Variable
    BITMAPFILEHEADER bf_new;
    BITMAPINFOHEADER bi_new;
    bf_new = bf;
    bi_new = bi;
    
    // Calculate new dimensions
    bi_new.biWidth = bi.biWidth * factor;
    bi_new.biHeight = bi.biHeight * factor;
    
    // Determine padding for scanlines & calculate new padding
    int padding = (4 - (bi.biWidth * sizeof(RGBTRIPLE)) % 4) % 4;
    int new_padding = (4 - (bi_new.biWidth * sizeof(RGBTRIPLE)) % 4) % 4;
    
    // Calculate new image size
    // Note to self: http://stackoverflow.com/questions/25713117/what-is-the-difference-between-bisizeimage-bisize-and-bfsize
    bi_new.biSizeImage = (bi_new.biWidth * sizeof(RGBTRIPLE) + new_padding) * abs(bi_new.biHeight);
    bf_new.bfSize = bf.bfSize - bi.biSizeImage + bi_new.biSizeImage;
    
    // write outfile's BITMAPFILEHEADER
    fwrite(&bf_new, sizeof(BITMAPFILEHEADER), 1, outptr);

    // write outfile's BITMAPINFOHEADER
    fwrite(&bi_new, sizeof(BITMAPINFOHEADER), 1, outptr);

    // iterate over infile's scanlines
    for (int i = 0, biHeight = abs(bi.biHeight); i < biHeight; i++)
    {
        //Loop each scanline factor times
        for (int j = 0; j < factor; j++)
        {
            // iterate over pixels in scanline
            for (int k = 0; k < bi.biWidth; k++)   
            {
                // temporary storage
                RGBTRIPLE triple;
    
                // read RGB triple from infile
                fread(&triple, sizeof(RGBTRIPLE), 1, inptr);
    
                // write RGB triple to outfile after multiplied by specified factor
                for (int l = 0; l < factor; l++)
                {
                    fwrite(&triple, sizeof(RGBTRIPLE), 1, outptr);
                }
            }
            // skip over padding, if any
            fseek(inptr, padding, SEEK_CUR);
        
            //Add new padding
            for (int m = 0; m < new_padding; m++)
            {
                fputc(0x00, outptr);
            }
            
            //Loop back to start of the line
            //Note to self: http://cs50.stackexchange.com/questions/21238/pset4-resize-fseek-non-proper-work
            fseek(inptr, -(bi.biWidth * 3 + padding), SEEK_CUR);
        }
        // Jumps to next row
        fseek(inptr, bi.biWidth * 3 + padding, SEEK_CUR);
    }

    // close infile
    fclose(inptr);

    // close outfile
    fclose(outptr);

    // success
    return 0;
}
