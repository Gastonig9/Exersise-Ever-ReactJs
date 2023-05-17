import { initializeApp } from "firebase/app";
import {
    // addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBxv2NwHF_xod8REmzsbMeCD0nzrLRK8wo",
    authDomain: "excersise-app-482a0.firebaseapp.com",
    projectId: "excersise-app-482a0",
    storageBucket: "excersise-app-482a0.appspot.com",
    messagingSenderId: "425364716891",
    appId: "1:425364716891:web:5223982fa32ecb27dcee7e",
    measurementId: "G-P9W1NDW7HY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getExersisesFB() {
    const collectionRef = collection(db, "excersises")
    const docSnap = await getDocs(collectionRef)
    const documents = docSnap.docs

    const documentsData = documents.map(doc => {
        return { id: doc.id, ...doc.data() }
    })
    return documentsData;
}

export async function getExersiseIndividualFB(id) {
    const docsCollection = doc(db, "excersises", id)
    const docSnap = await getDoc(docsCollection)
    return { id: docSnap.id, ...docSnap.data() }
}

// export async function exportData() {
//     const excersises = [
//         {
//             id: 2,
//             name: "Squats",
//             muscleGroup: "Legs",
//             img: "https://i.imgur.com/xWb2l9M.jpg",
//             description: "Stand with your feet shoulder-width apart, keeping your toes pointed slightly outward. Lower your body as if you're sitting back into a chair, keeping your chest up and your knees over your toes. Pause at the bottom, then push back up to the starting position."
//         }

//     ]

//     const collectionRef = collection(db, "excersises")

//     for (let item of excersises) {
//         item.index = item.id
//         delete item.id
//         const response = await addDoc(collectionRef, item)
//         console.log("movie export with ID: " + response.id);
//     }
// }