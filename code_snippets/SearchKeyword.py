import json
from collections import OrderedDict

# Opening JSON file 
with open("test.json") as json_file: 
    data = json.load(json_file) 

sortedList = []
word = "electron"

for note in data:
    keywords = note["keywords"] #returns an array of keywords
    if word in keywords:
        sortedList.append(note)

sortedList.sort(reverse = True, key= lambda x: x["preference"])
print(sortedList)


