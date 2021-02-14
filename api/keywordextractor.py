import os
import sys
import pdfminer.high_level as pdf
from rake_nltk import Rake

class Keywordextractor:
	'''
	Class used for extracting keywords from pdfs.
	Takes in the name of a pdf in the current directory
	and prints a ranked list of keywords.
	'''
	def __init__(self, file, directory = "notes"):
		self.file = file
		self.directory = directory

	'''
	Checks whether keyword phrase in wordlist is valid.

	Currently only checks whether phrase is made up of a
	majority of < 3 letter words.
	'''
	def is_valid(self, keyword):
		word_list = keyword.split()

		n = 0
		for i in word_list:
			if len(i) < 3:
				n += 1

		# TODO: add dictionary check

		return n < len(word_list) / 2.0

	'''
	Extracts keywords from pdf and uses rake to get keywords.
	Takes pdf from path variable and returns a ranked list of
	keywords.
	'''
	def get_keywords(self):
		r = Rake(min_length=1, max_length=3)

		# get text from pdf
		s = pdf.extract_text(file)

		# cleaning extracted text
		s = "".join(filter(lambda x: x.isalpha() or x.isspace(), s))

		r.extract_keywords_from_text(s)
		keywords = r.get_ranked_phrases()

		keywords = list(filter(self.is_valid, keywords))

		return keywords

if __name__ == '__main__':
    file = sys.argv[1]
    keywordextractor = Keywordextractor(file)
    print(keywordextractor.get_keywords())