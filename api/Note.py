import json
from keywordextractor import Keywordextractor
from video2pdf import Video2PDF
from firebase import add, upload_pdf

class Note:
    def __init__(self, title, description, school, courseLevel, isNote, isVideo, isProblem, url, path):
        self.data = {
            "name" : title,
            "description" : description,
            "school" : school,
            "courseLevel" : courseLevel,
            "isNote" : isNote,
            "isVideo" : isVideo,
            "isProblem" : isProblem,
            "relevance" : 0,
            "url": url
        }

        if self.data["isVideo"]:
            self.data["keywords"] = self.videoKeywordGenerator(path)
        elif self.data["isNote"]:
            self.data["keywords"] = self.writtenKeywordGenerator(path)
        else:
            self.data["keywords"] = []

        if(isVideo):
            add(self.data, "videos")
        elif(isNote):
            add(self.data, "notes")
        else:
            add(self.data, "problems")



    def videoKeywordGenerator(self, path):
        pdf = Video2PDF()
        filename = pdf.run(path)

        # code to upload note pdf and run new Note class on the written notes
        pdf_path = filename + ".pdf"
        k = Keywordextractor(pdf_path)
        keywords = k.get_keywords()

        pdf_path = filename + ".pdf"
        pdf_url = upload_pdf(pdf_path, filename, "notes")

        self.data['pdfurl'] = pdf_url
        return keywords

    def writtenKeywordGenerator(self, path):
        k = Keywordextractor(path)
        keywords = k.get_keywords()
        return keywords

    def toJSON(self):
        return json.dumps(self.data)
