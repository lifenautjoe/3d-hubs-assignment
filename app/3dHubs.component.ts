/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import './3dHubs.scss';

export interface IThreeDHubsComponentController {

}

class ThreeDHubsComponentController implements IThreeDHubsComponentController {
    static $inject = [
        '$log'
    ];
    constructor($log : angular.ILogService){
        $log.debug('Hello from home component controller');
    }
}

class ThreeDHubsComponent{
    static controller = ThreeDHubsComponentController;
    static $routeConfig : angular.RouteDefinition = [
        {
            path : '/home',
            name : 'Home',
            component : 'threeDHubsHome',
            useAsDefault : true
        },
        {
            path : '/print',
            name : 'Print',
            component : 'threeDHubsPrint'
        }
    ];
    static template = `
        <three-d-hubs-header></three-d-hubs-header>
        <ng-outlet></ng-outlet>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubs',ThreeDHubsComponent);

