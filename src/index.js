import { AlertService } from "./app/alert.service";
import "./main.scss";
import { run } from "./app/app";
import { ComponentService } from "./app/component.service";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);
