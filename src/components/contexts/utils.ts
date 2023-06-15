import axios from "axios"

export async function getProduct() {
    const {data} = await axios.get('http://localhost:3000/products')

    return data
}