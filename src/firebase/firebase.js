import * as firebase from 'firebase'

import { rootModel } from '../model/rootModel'

const config = {
    apiKey: "AIzaSyAxde5W_tDfDoto6UgfRZ5VUm58iuzeFX0",
    authDomain: "rocode-1fedf.firebaseapp.com",
    databaseURL: "https://rocode-1fedf.firebaseio.com",
    projectId: "rocode-1fedf",
    storageBucket: "rocode-1fedf.appspot.com",
    messagingSenderId: "670146996494"
};

firebase.initializeApp(config)

firebase.database().ref().set(rootModel)
