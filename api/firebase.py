import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

credfile = "../../treehacks-951cf-firebase-adminsdk-id17i-31b060d8cc.json"

def get(collection):
# Use the application default credentials
    cred = credentials.Certificate(credfile)

    firebase_admin.initialize_app(cred, {
      'projectId': "treehacks-951cf",
    })

    db = firestore.client()

    notes_ref = db.collection('notes')
    notes = notes_ref.stream()

    data = list()
    for doc in notes:
        print(f'DocId: {doc.id} => Data: {doc.to_dict()}')
        temp = doc.to_dict()
        temp['id'] = doc.id
        data.append(temp)

    print(data)
    return data

def add(data, collection):
    cred = credentials.Certificate(credfile)

    firebase_admin.initialize_app(cred, {
      'projectId': "treehacks-951cf",
    })

    db = firestore.client()

    db.collection(collection).document().set(data)

if(__name__ == "__main__"):
    get("notes")
    add({"test": "hi"}, "notes")
