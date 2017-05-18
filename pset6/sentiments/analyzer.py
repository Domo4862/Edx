import nltk

class Analyzer():
    """Implements sentiment analysis."""

    def __init__(self, positives, negatives):
        """Initialize Analyzer."""
        # load positive and negative words
        # Set, list or dict?:
        # http://stackoverflow.com/questions/3489071/in-python-when-to-use-a-dictionary-list-or-set
        # In this case, only having a particular value matters and not the order. Hence use set()
        self.positives = set()
        self.negatives = set()
        
        # with open - opens the file and automatically closes once finishes
        with open ("positive-words.txt", "r") as fpos:
            for line in fpos:
                # C (!) is (not) in python
                # http://stackoverflow.com/questions/6117733/negation-in-python
                if not line.startswith((";", " ")):
                    # Standardization that every text files has "\n" for every end of line
                   self.positives.add(line.strip("\n")) 
        
        with open ("negative-words.txt", "r") as fneg:
            for line in fneg:
                if not line.startswith((";", " ")):
                    self.negatives.add(line.strip("\n"))

            
    def analyze(self, text):
        """Analyze text for sentiment, returning its score."""

        # http://www.nltk.org/api/nltk.tokenize.html
        # This breaks the lines into list of words
        # and stores them as tokens
        self.tokenizer = nltk.tokenize.TweetTokenizer()
        tokens = self.tokenizer.tokenize(text)
        
        ind = 0
        
        # Cross check text with positive and negative list and returns appropriate indicator
        for token in tokens:
            # indicator for sentiment score
            if token.lower() in self.positives:
                ind += 1
            elif token.lower() in self.negatives:
                ind -= 1
        return ind
