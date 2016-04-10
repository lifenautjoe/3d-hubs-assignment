/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');

export interface IThreeDHubsCartComponentController {
    
}

class ThreeDHubsCartComponentController implements IThreeDHubsCartComponentController {
    static $inject = [
        '$log'
    ];
    constructor($log : angular.ILogService){
        $log.debug('Hello from home component controller');
    }
}

class ThreeDHubsCartComponent{
    static controller = ThreeDHubsCartComponentController;
    static template = `
        <div>Welcome threeDHubsCartComponent</div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsCart',ThreeDHubsCartComponent);