import { database } from "../../../database"
import { collection, query, getDocs, where } from 'firebase/firestore'
export default async function filtrar(req, res) {
    const { popular } = req.query
    // Consulta de información
    const col = collection(database, "productos")
    let snapshot
    if (popular) {
        const consulta = query(col, where('popular', '==', true))
        snapshot = await getDocs(consulta)
    } else {
        const consulta = query(col)
        snapshot = await getDocs(consulta)
    }

    if (snapshot.empty) {
        return res.status(404).json({ message: "No se encontraron documentos" })
    }

    const productos = []
    snapshot.forEach(doc => {
        productos.push({ id: doc.id, ...doc.data() })
    })

    return res.status(200).json(productos)
}