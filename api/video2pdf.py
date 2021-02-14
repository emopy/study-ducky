from stitcher import Stitcher
from quilt2PDF import PDFifier
import sys
import os

class Video2PDF:
	'''
	Class to convert an mp4 video to a PDF
	'''
	def __init__(self):
		self.quilt = None

	def startVideo(self, path):
		self.stitcher = Stitcher(path)
		self.stitcher.stitch()
		self.pdfifier = PDFifier()
		self.quilt = self.stitcher.get_quilt()

		name = hash(os.path.basename(path))
		self.pdfifier.makePDF(self.quilt, name)

		return name
