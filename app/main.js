import { BgImgController } from "./Controllers/BgImgController.js";
import { CurrentTimeController } from "./Controllers/CurrentTimeController.js";
import { TaskListController } from "./Controllers/TaskListController.js";


class App {
 
  bgImgController = new BgImgController();
  taskListController = new TaskListController();

  currentTimeController = new CurrentTimeController();
}

window["app"] = new App();
