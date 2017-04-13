import * as angular from "angular";
import * as ngRouteName from "angular-route";
// import { ROUTES_MODULE_NAME } from "./app/routes/routes.module";
import "./app/routes/defaultRoute/defaultRoute.component";

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

appConfig.$inject = ['$routeProvider'];
function appConfig($routeProvider: ng.route.IRouteProvider) {
    $routeProvider
        .when('/', {
            template: "<default-route></default-route>"
        })
        .otherwise({redirectTo:'/'});
}

const APP_NAME = "myApp";
const APP: ng.IModule = angular.module(APP_NAME, [
    ngRouteName,
    "RoutesModule"
]);
export default APP;

APP.config(appConfig);

angular.bootstrap(document, [APP_NAME]);


