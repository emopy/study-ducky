from stitcher import Stitcher
from quilt2PDF import PDFifier
import sys
import os
import shutil
import random
import string

class Video2PDF:
        '''
        Class to convert an mp4 video to a PDF
        '''
        def __init__(self):
                self.quilt = None

        def random_string(self, length):
                letters = string.ascii_letters + string.digits
                return ''.join(random.choice(letters) for i in range(length))

        def run(self, path):
                self.stitcher = Stitcher(path)
                self.stitcher.stitch()
                self.pdfifier = PDFifier()
                self.quilt = self.stitcher.get_quilt()

                name = self.random_string(16)
                self.pdfifier.makePDF(self.quilt, name)

                filename = name

                if(os.path.isdir("audio_segments")):
                    shutil.rmtree("audio_segments")
                if(os.path.isdir("slides")):
                    shutil.rmtree("slides")

                return filename


if(__name__ == '__main__'):
    v = Video2PDF()
    filename = v.run('shortlecture.mp4')
    print(filename)
