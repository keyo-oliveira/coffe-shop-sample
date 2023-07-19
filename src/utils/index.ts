import axios from "axios"


export async function getProduct() {
    const {data} = await axios.get('http://localhost:3000/products')

    return data
}

export async function getAddressByGeolocation(lat: number, long: number) {

  const APIKEY = import.meta.env.VITE_GEOAPIFY_API_KEY;
  const { data } = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=${APIKEY}`)

  return data
}
