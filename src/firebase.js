import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyATpnaa2Ilb7KFsEgoLCefKZCBtZiCUixU",
    authDomain: "mikewalkerportfolio.firebaseapp.com",
    projectId: "mikewalkerportfolio",
    storageBucket: "mikewalkerportfolio.appspot.com",
    messagingSenderId: "641864552665",
    appId: "1:641864552665:web:7118ed677c644630cbeec8",
    measurementId: "G-14H8WHF8BP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore(app);;