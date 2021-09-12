import { BgImgController } from "./Controllers/BgImgController.js";
import { CurrentTimeController } from "./Controllers/CurrentTimeController.js";
import { TaskListController } from "./Controllers/TaskListController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
 
  bgImgController = new BgImgController();
  taskListController = new TaskListController();

  currentTimeController = new CurrentTimeController();

  weatherController = new WeatherController();
}

window["app"] = new App();
