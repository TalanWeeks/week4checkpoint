import { ProxyState } from "../AppState.js"

//@ts-ignore
const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class ApiService{  

  async getImgData(){
    let res = await sandboxApi.get('images')
    console.log('your',res)
    ProxyState.img = res.data.largeImgUrl
    
  }

}

export const apiService = new ApiService()