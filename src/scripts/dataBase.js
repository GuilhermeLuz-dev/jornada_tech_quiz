import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { doc, updateDoc, getFirestore, collection, getDocs, addDoc, query, orderBy, limit, where } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js"


const firebaseConfig = {
    apiKey: "AIzaSyCIjHl6fmj-XubEoDnZ3pqhjjA6rwx75BM",
    authDomain: "rakingquiz.firebaseapp.com",
    projectId: "rakingquiz",
    storageBucket: "rakingquiz.appspot.com",
    messagingSenderId: "505770179044",
    appId: "1:505770179044:web:97e6d9719d3fa567e3eff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const refCollection = collection(db, "ranking");

async function updatedRaking() {
    const playersList = [];
    const top10 = await getDocs(query(refCollection, orderBy("pontos", "desc"), limit(10)));
    top10.forEach(doc => {
        playersList.push({
            nome: doc.data().nome,
            pontos: doc.data().pontos
        });
    });

    return playersList;
}

async function getDocsForName(name) {
    console.log(name);
    const nameQuery = query(refCollection, where("nome", "==", name));
    const namesList = await getDocs(nameQuery);

    return namesList.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    });
}

async function checkUserNameExists(name) {

    const namesList = await getDocsForName(name);

    console.log(namesList.length);
    if (!namesList.length) {
        console.log("nome livre");
        return false;
    } else {
        console.log('nome ocupado')
        return true;
    }
}

async function storePlayData(playerName, playerScore) {
    checkUserNameExists(playerName).then(async result => {
        if (result) {
            resetScore(playerName, playerScore);
            console.log("dados atualizados");
        } else {
            await addDoc(refCollection, {
                nome: playerName,
                pontos: parseInt(playerScore)
            })
            console.log("novos dados adicionados ao banco");
        }
    })
    updatedRaking();
    // Lembrar de conferir se o jogador já não existe;
}

async function resetScore(name, newPontos) {
    const namesList = getDocsForName(name);
    namesList.then(docs => {
        const refDoc = doc(refCollection, docs[0].id);
        updateDoc(refDoc, { pontos: parseInt(newPontos) });
    })
    updatedRaking();
}


export { resetScore, updatedRaking, refCollection, storePlayData, checkUserNameExists };







