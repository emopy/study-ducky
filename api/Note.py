import json
from keywordextractor import Keywordextractor
from video2pdf import Video2PDF

class Note:
    def __init__(self, documentID, name, description, school, courseLevel, isNote, isVideo, isProblem):
        self.data = {
            "documentID" : documentID,
            "name" : name,
            "description" : description,
            "school" : school,
            "courseLevel" : courseLevel,
            "isNote" : isNote,
            "isVideo" : isVideo,
            "isProblem" : isProblem,
            "relevance" : 0
        }

        if self.data["isVideo"]:
            self.data["keywords"] = self.videoKeywordGenerator(documentID)
        elif self.data["isNote"]:
            self.data["keywords"] = self.writtenKeywordGenerator(documentID)
        else:
            self.data["keywords"] = []

    def videoKeywordGenerator(self, documentID):
        # MATHEW HOW TO GO FROM DOCUMENT ID -> PATH
        path = documentID
        pdf = Video2PDF()
        pdf.startVideo(path)

        # code to upload note pdf and run new Note class on the written notes

        keywords = []
        return keywords

    def writtenKeywordGenerator(self, documentID):
        # MATHEW HOW TO GO FROM DOCUMENT ID -> PATH
        path = documentID
        k = Keywordextractor(path)
        return k.get_keywords()

    def toJSON(self):
        return json.dumps(self.data)