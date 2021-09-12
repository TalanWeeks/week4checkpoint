

export class Quote{
  constructor(quoteData){
    this.quote = quoteData.content
    this.author = quoteData.author
  }

  get quoteTemplate(){
    return /*html*/`
      
    `
  }
}