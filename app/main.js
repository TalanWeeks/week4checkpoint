import { BgImgController } from "./Controllers/BgImgController.js";


class App {
 
  bgImgController = new BgImgController();
}

window["app"] = new App();
