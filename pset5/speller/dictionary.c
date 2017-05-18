/**
 * Implements a dictionary's functionality.
 */
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>

#include "dictionary.h"

// Construct node structure
typedef struct node
{
    struct node *next[27]; // Create an array with 27 slots (Index starts 0 - 26)
    bool isWord;
}
node;

// Declare a root node
node *root;

// Assign index for ASCII alphabetical characters and a final index for apostrophe
// Refer to pset2 - Vigenere problem
int assignIndex (char c)
{
    if (c == '\'')
    {
        // Assigns the final node slot as apostrophe
        return 26;
    }
    else
    {
        // Assigns each character according to alphabetical order from 0 - 25
        return tolower(c) % 'a';
    }
}

// Counter for dictionary words
int wordCount = 0;

/**
 * Returns true if word is in dictionary else false.
 */
bool check(const char *word)
{
    // Initialise pointer to root
    node *pointer = root;

    // Loop each character of word
    for (int i = 0, j = strlen(word); i < j; i++)
    {
        int index = assignIndex(word[i]);
        
        // Checks with dictionary. At any point it hits NULL, the word is not in dictionary
        if (pointer->next[index] == NULL)
        {
            return false;
        }
        // Push pointer to next character
        pointer = pointer->next[index];
    }
    return (pointer->isWord) ? true : false;
}

/**
 * Loads dictionary into memory. Returns true if successful else false.
 */
bool load(const char *dictionary)
{
    // Open dictionary
    FILE *dict = fopen(dictionary, "r");
    if (dict == NULL)
    {
        printf("Unable to load %s.\n", dictionary);
        return false;
    }
    
    // Allocate memory for root
    root = malloc(sizeof(node));
    
    // Set pointer to root node
    node *pointer = root;

    // Read each character in dictionary
    for (int c = fgetc(dict); c != EOF; c = fgetc(dict))
    {
        // Each word in dictionary ends with '\n'
        if (c == '\n')
        {
            // Declares as word
            pointer->isWord = true;
            
            // Increment number of word
            wordCount++;
            
            // Reset pointer to root node
            pointer = root;
        }
        else
        {
            int index = assignIndex(c);
            
            // If there are no nodes at next letter, create one
            if (pointer->next[index] == NULL)
            {
                pointer->next[index] = malloc(sizeof(node));
            }
            pointer = pointer->next[index];
        }
    }
    // Closes dictionary
    fclose(dict);
    return true;    
}


/**
 * Returns number of words in dictionary if loaded else 0 if not yet loaded.
 */
unsigned int size(void)
{
    // Returns wordcount
    return wordCount;
}

// Recursive function - loops around itself and clears all nodes from each alphabets
// This bool comes first to clear children node first. If we clear root node first, we lose track of the underlying children.
bool releaseNode(node *node)
{
    for (int i = 0; i < 27; i++)
    {
        if (node->next[i] != NULL)
        {
            releaseNode(node->next[i]);
        }
    }
    free(node);
    return true;
}

/**
 * Unloads dictionary from memory. Returns true if successful else false.
 */
bool unload(void)
{
    // clears the root node
    releaseNode(root);
    return true;
}

