/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');

export interface IThreeDHubsPrintComponentController {
    
}

class ThreeDHubsPrintComponentController implements IThreeDHubsPrintComponentController {
    static $inject = [
        '$log'
    ];
    constructor($log : angular.ILogService){
    }
}

class ThreeDHubsPrintComponent{
    static controller = ThreeDHubsPrintComponentController;
    static template = `
        <div>Welcome threeDHubsPrintComponent</div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsPrint',ThreeDHubsPrintComponent);