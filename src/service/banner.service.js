import data from '../data/data.json'

export const getBanner = async ()=>{
    // const data = await axios.get('http://localhost:3000/couponList')
    return data.featured
}