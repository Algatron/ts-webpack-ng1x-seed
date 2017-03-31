
import * as angular from "angular"
import RoutesModules from "../routes.module";


class DefaultRoute implements ng.IController {
    onInit() {
        console.info("conp initializing!");
    }
};




RoutesModules.component('defaultRoute', {
    
    template: "<div>compTemplate!!</div>",
    controller: DefaultRoute
    
});
