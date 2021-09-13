import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"

// @ts-ignore
const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes'
})
class QuoteService{
  async getQuote(){
    let res = await sandboxApi.get()
    console.log("this is your quote data ese",res.data.content)
    ProxyState.quote = Object.values(res.data)
    console.log("your quote sir", ProxyState.quote[2]);  
    console.log("your author sir", ProxyState.quote[3]); 
    
    document.getElementById("quote").innerText = ProxyState.quote[2]
    document.getElementById("author").innerText = " " + ProxyState.quote[3]
  }
  showAuthor() {
    document.getElementById("author").classList.remove("visually-hidden")
  }
}
export const quoteService = new QuoteService