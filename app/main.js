import { BgImgController } from "./Controllers/BgImgController.js";
import { TaskListController } from "./Controllers/TaskListController.js";


class App {
 
  bgImgController = new BgImgController();
  taskListController = new TaskListController();
}

window["app"] = new App();
