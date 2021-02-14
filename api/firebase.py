import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore, storage
from uuid import uuid4

credfile = "../../treehacks-951cf-firebase-adminsdk-id17i-31b060d8cc.json"
cred = credentials.Certificate(credfile)

firebase_admin.initialize_app(cred, {
  'projectId': "treehacks-951cf",
  'storageBucket': "treehacks-951cf.appspot.com"
})

def get(collection):
# Use the application default credentials

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
    db = firestore.client()

    db.collection(collection).document().set(data)

def upload_pdf(path, filename, collection):
    bucket = storage.bucket()
    abs_filename = "notes/" + filename + ".pdf"

    new_token = uuid4()
    metadata  = {"firebaseStorageDownloadTokens": new_token}

    blob = bucket.blob(abs_filename)
    blob.metadata = metadata
    blob.upload_from_filename(path)
    blob.make_public()
    return blob.public_url


if(__name__ == "__main__"):
    get("notes")
    url = upload_pdf("lec.pdf", "lec", "notes")
