/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');

export interface IThreeDHubsHomeComponentController {
    
}

class ThreeDHubsHomeComponentController implements IThreeDHubsHomeComponentController {
    static $inject = [
        '$log'
    ];
    constructor($log : angular.ILogService){
    }
}

class ThreeDHubsHomeComponent {
    static controller = ThreeDHubsHomeComponentController;
    static template = `
        <div class="container">
            Welcome threeDHubsHomeComponent
        </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsHome',ThreeDHubsHomeComponent);