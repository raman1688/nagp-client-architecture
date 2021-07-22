import firebase from 'firebase/app';

import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "raman-fashion.firebaseapp.com",
    databaseURL: "https://raman-fashion.firebaseio.com",
    projectId: "raman-fashion",
    storageBucket: "",
    messagingSenderId: "275734803524",
    appId: "1:275734803524:web:6419504ae88a7a16"
  };

  export const addCollectionandDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
    return await batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collectionSnapshot) => {
    const transformedCollection = collectionSnapshot.docs.map(doc => {
      const {title, items} = doc.data();
      return {
        id: doc.id,
        routeName: encodeURI(title.toLowerCase()),
        title,
        items
      }
    });
    return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    } , {});

  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  export default firebase;