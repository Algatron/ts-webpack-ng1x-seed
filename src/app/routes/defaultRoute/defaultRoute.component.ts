
import * as angular from "angular"
import RoutesModule from "../routes.module";

const template = require("./defaultRouteTemplate.html");

const DefaultRouteComponentModuleName = "DefaultRouteComponentModuleName";

// const DefaultRouteModule: ng.IModule = angular.module(DefaultRouteComponentModuleName, []);



class DefaultRoute implements ng.IController {
    $onInit() {
        console.info("conp initializing!");
    }
};

RoutesModule.component('defaultRoute', {
    
    template,
    controller: DefaultRoute
    
});

export { DefaultRouteComponentModuleName as default };