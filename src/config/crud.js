import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc} from 'firebase/firestore/lite'
import { db } from './firebase.js'


const collectionName = 'Webb-Shop'
const collectionRef = collection(db, collectionName)




async function getProduct(){
    // Skapa en referens till collection  i databasen
    const productCollection = collection(db, collectionName)

    // Hämta alla dokument i collection "employees"
    const productSnapshot = await getDocs(productCollection)

    const productList = productSnapshot.docs.map(doc => withKey(doc))
    return productList
        
}

function withKey(doc) {
let o = doc.data()
o.key = doc.id
return o
}

async function addProduct(product){
    await addDoc(collectionRef, product)
}

async function deleteProduct(key) {
    const docRef = doc(collectionRef, key)
    deleteDoc(docRef)
}

async function editProduct(key, updatedProduct){
    const docRef = doc(collectionRef, key)
    await updateDoc(docRef, updatedProduct)
}



export {getProduct, addProduct, db, deleteProduct, editProduct}