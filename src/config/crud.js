import { collection, getDocs} from 'firebase/firestore/lite'
import { db } from './firebase.js'

const collectionName = 'Webb-Shop'


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


export {getProduct}