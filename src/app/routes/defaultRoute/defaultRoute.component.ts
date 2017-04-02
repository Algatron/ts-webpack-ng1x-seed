
import * as angular from "angular"
import * as RoutesModules from "../routes.module";

const template = require("./defaultRouteTemplate.html");

const DefaultRouteComponentModuleName = "DefaultRouteComponentModuleName";

const DefaultRouteModule: ng.IModule = angular.module(DefaultRouteComponentModuleName, []);

class DefaultRoute implements ng.IController {
    onInit() {
        console.info("conp initializing!");
    }
};

DefaultRouteModule.component('defaultRoute', {
    
    template,
    controller: DefaultRoute
    
});

export { DefaultRouteComponentModuleName, DefaultRouteModule as default };