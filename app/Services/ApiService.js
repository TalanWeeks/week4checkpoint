
//@ts-ignore
const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class ApiService{
  constructor(){
    console.log("hello from apiservice")
  }
}

export const apiService = new ApiService()