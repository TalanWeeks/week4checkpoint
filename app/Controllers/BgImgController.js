import { ProxyState } from "../AppState.js";
import { apiService } from "../Services/ApiService.js";

export class BgImgController{
  
  _drawBgImg(){    
    document.getElementById("bg-img").style.backgroundImage = `url('${ProxyState.img}')`
  }
  constructor(){
    apiService.getImgData()
    ProxyState.on('img', this._drawBgImg)
  }

}