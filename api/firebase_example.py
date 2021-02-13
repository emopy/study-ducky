import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials
cred = credentials.ApplicationDefault()

firebase_admin.initialize_app(cred, {
  'projectId': "treehacks-951cf",
})

db = firestore.client()

notes_ref = db.collection('notes')
notes = notes_ref.stream()

for doc in notes:
    print(f'DocId: {doc.id} => Data: {doc.to_dict()}')

