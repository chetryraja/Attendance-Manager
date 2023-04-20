import pymongo
import base64
import cv2
import face_recognition
from PIL import Image
from io import BytesIO
import numpy as np
import os
import shutil
client = pymongo.MongoClient('mongodb+srv://ayushman:av0HnjtyBeYyAFT7@cluster0.wxxniud.mongodb.net/?retryWrites=true&w=majority')
db = client['test']
collection = db['users']
documents = collection.find()
id = documents[0]['_id']
result = collection.find_one_and_update({'_id':id},{'$set':{'present':1}},return_document=True)
print(documents[0]['present'])
