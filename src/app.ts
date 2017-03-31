import * as angular from "angular";
import "angular-route";
import "./app/routes/routes.module";

appConfig.$inject = ['$routeProvider'];
function appConfig($routeProvider: ng.route.IRouteProvider) {
    $routeProvider
        .when('/', {
            template: "Here's a component: <default-route></default-route>"
        })
        .otherwise({redirectTo:'/'});
}

const APP_NAME = "myApp";
const APP: ng.IModule = angular.module(APP_NAME, [
    'ngRoute',
    'RoutesModule'
]);
export default APP;

APP.config(appConfig);

angular.bootstrap(document, [APP_NAME]);


