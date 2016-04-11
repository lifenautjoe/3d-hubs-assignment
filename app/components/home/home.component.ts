/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import './home.scss';

export interface IThreeDHubsHomeComponentController {
    
}

class ThreeDHubsHomeComponentController implements IThreeDHubsHomeComponentController {
    static $inject = [
    ];
    constructor(){
    }
}

class ThreeDHubsHomeComponent {
    static controller = ThreeDHubsHomeComponentController;
    static template = `
        <div class="container tdh-home">
            Welcome :)
        </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsHome',ThreeDHubsHomeComponent);