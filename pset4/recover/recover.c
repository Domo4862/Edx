#include <stdio.h>
#include <stdint.h>

int main(int argc, char *argv[])
{
    // Checks for valid argument input
    if (argc != 2)
    {
        fprintf(stderr,"Usage: ./recover raw_file");
        return 1;
    }
    
    // Set input file as argument argv[1]
    FILE *infile = fopen(argv[1], "r");
    
    // Checks if input file is valid
    if (infile == NULL)
    {
        fclose(infile);
        fprintf(stderr, "Unable to open file\n");
        return 1;
    }
    
    // Output file 
    FILE *outfile;
    int openstatus = 0; // 0 = closed/no read, 1 = read

    // Counter for number of jpeg recovered
    int jpegcount = 0;
    
    //Settings for block reading
    uint8_t block[512]; // read 512b blocks
    
    // Loops block of memory till end of file
    while(fread(block, 512, 1, infile))
    {
        // Searching for jpeg 4 byte signature
        if (block[0] == 0xff && block[1] == 0xd8 && block[2] == 0xff && (block[3] == 0xe0 || block[3] == 0xe1))
        {
            // Close any previously opened jpeg
            if (openstatus == 1)
            {
                fclose(outfile);
            }
            // Opens a new file to write
            
            // Setting for constant jpegname and prints out
            char jpegname[8];
            sprintf(jpegname, "%03d.jpg", jpegcount);
            
            // Declares output and writes the file
            outfile = fopen(jpegname, "w");
            fwrite(block, 512, 1, outfile);
            
            jpegcount++;
            
            // Change status as read
            openstatus = 1;
		}
		// If comparison was no match AND file is currently open, continue to write data into output file
		else if (openstatus == 1)
		{
		    fwrite(block, 512, 1, outfile);
		}
    }
    // Close all files down
    fclose(infile);
    fclose(outfile);
    
    return 0;
}