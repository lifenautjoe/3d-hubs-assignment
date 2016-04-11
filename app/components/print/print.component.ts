/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import './print.scss';

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
        <div class="container tdh-print">
            <span class="tdh-print__step-text">
                1. Add files for instant prices
            </span>
            <three-d-hubs-basket></three-d-hubs-basket>
        </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsPrint',ThreeDHubsPrintComponent);