import { database } from "../../../database"
import { doc, getDoc } from 'firebase/firestore'

export default async function getCart({ body }, res) {
    const snapshot = await getDoc(doc(database, "cart", body.username))

    return res.json(snapshot.data())
}