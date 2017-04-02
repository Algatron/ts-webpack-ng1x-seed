import * as angular from "angular";
import { DefaultRouteComponentModuleName } from "./defaultRoute/defaultRoute.component";

const ROUTES_MODULE_NAME = 'RoutesModule';
const RoutesModule: ng.IModule = 
      angular.module(ROUTES_MODULE_NAME, [ 
         DefaultRouteComponentModuleName
      ]);

export { ROUTES_MODULE_NAME };
export default RoutesModule;

