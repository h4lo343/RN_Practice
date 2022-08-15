import axios from "axios"

const instance = axios.create({
  baseURL:""
})

export default {
  get: instance.get,
  post: instance.post
}