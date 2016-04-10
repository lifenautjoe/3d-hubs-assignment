/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import './basket-count.scss';

export interface IThreeDHubsBasketCountComponentController {

}

class ThreeDHubsBasketCountComponentBasketCount implements IThreeDHubsBasketCountComponentController{
    static $inject = [
        '$log'
    ];
    constructor($log : angular.ILogService){
        $log.debug('Hello from basketCount component controller');
    }
}

class ThreeDHubsBasketCountComponent {
    static controller = ThreeDHubsBasketCountComponentBasketCount;
    static template = `
    <div class="tdh-basket-count">
        <a class="tdh-basket-count-button" ng-link="['Print']">
            3D Print <span class="tdh-basket-count-button__count">2</span>
        </a>
    </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsBasketCount',ThreeDHubsBasketCountComponent);