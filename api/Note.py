import json

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
        return 0

    def writtenKeywordGenerator(self, documentID):
        return 0

    def toJSON(self):
        return json.dumps(self.data)