import time
import datetime
from stitcher import Stitcher
import PIL
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
import sys

class PDFifier:
        '''
        Class that helps create a PDF
        from a stitcher.
        '''
        def __init__(self, path=None):
                # Initialize stitcher object and pdf object
                self.path = path
                if(path == None):
                    self.stitcher = None
                else:
                    self.stitcher = Stitcher(self.path)
                self.quilt = None

        def get_quilt(self, stitcher):
            stitcher.stitch()
            self.quilt = stitcher.get_quilt()

        def makePDF(self, quilt, hash):
            # Runs the stitcher
            styles = getSampleStyleSheet()
            styles.add(ParagraphStyle(name='Left', leading=24, alignment=TA_LEFT))
            styles.add(ParagraphStyle(name='Center', leading=24, alignment=TA_CENTER))

            doc = SimpleDocTemplate(hash + ".pdf",pagesize=letter,
                        rightMargin=72,leftMargin=72,
                        topMargin=72,bottomMargin=18)

            page_height, page_width = letter
            pdf = list()

            for patch in quilt:
                    # Adds image
                    path = patch.slide_path

                    im_height, im_width = PIL.Image.open(path).size

                    ratio = max(im_height/page_height, im_width/page_width)

                    im = Image(path, int(im_height/ratio)-1, int(im_width/ratio)-1)
                    pdf.append(im)

                    text = ""
                    first = True

                    for texts in patch.script:
                        for words in texts:
                            if(first):
                                first = False
                                text += words
                            else:
                                text += (" " + words)
                    text = '<font size="18"><br/><br/>%s</font>' %text
                    pdf.append(Paragraph(text, styles["Left"]))

                    time_str = str(datetime.timedelta(seconds=patch.timestamp[0]))
                    time_str = '<font size="18"><br/><br/>%s</font>' %time_str
                    pdf.append(Paragraph(time_str, styles["Center"]))

                    pdf.append(PageBreak())
            doc.build(pdf)

if(__name__ == '__main__'):
        path = sys.argv[1]
        pdf = PDFifier(path=path)

