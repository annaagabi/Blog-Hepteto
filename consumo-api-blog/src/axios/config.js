import axios from 'axios'
//   aquiciçao http atraves do axios onde cria a url base
const blogFetch = axios.create({
    baseURL: 'https://api-blog-hepteto.vercel.app'
})
 // esporta para utilizacao 
export default blogFetch
