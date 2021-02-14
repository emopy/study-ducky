import json
from firebase import get
from collections import OrderedDict

def searchKeyword(word, filt={}):
    sortedList = []
    for note in data:
        if ("courseLevel" in filt) and (note["courseLevel"] not in filt["courseLevel"]):
            continue

        if ("school" in filt) and (note["school"] not in filt["school"]):
            continue

        keywords = note["keywords"] #returns an array of keywords
        if word in keywords:
            sortedList.append(note)

    sortedList.sort(reverse = True, key= lambda x: x["preference"])
    return sortedList

# test

def printDicList(lst):
    temp = []
    for d in lst:
        temp.append(d["documentID"])
    print(temp)

if(__name__ == '__main__'):
    # Opening JSON file
    with open("test.json") as json_file:
        data = json.load(json_file)

    printDicList(searchKeyword("electron",{}))
    printDicList(searchKeyword("matrix"))

