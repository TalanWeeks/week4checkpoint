import { quoteService } from "../Services/QuoteService.js";


export class QuoteController{
  constructor(){
    quoteService.getQuote()

  }

  showAuthor() {
    quoteService.showAuthor()
  }
}