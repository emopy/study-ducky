import json
from collections import OrderedDict

# Opening JSON file 
with open('data.json') as json_file: 
    data = json.load(json_file) 

sortedList = {};
word = "drake";

for key in data:
    array = data[key] #returns a dictionary of entry 'key'
    array = array["keywords"] #returns an array of keywords
    if(array.count(word)>0):
        sortedList[key] = data[key]

sortedList = OrderedDict(sorted(sortedList.items(), key=lambda x: x[1]['relevance'], reverse=True))
print(sortedList)



