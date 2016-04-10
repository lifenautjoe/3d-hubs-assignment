/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');

export interface IThreeDHubsHeaderComponentController {

}

class ThreeDHubsHeaderComponentHeader implements IThreeDHubsHeaderComponentController{
    static $inject = [
        '$log'
    ];
    constructor($log : angular.ILogService){
        $log.debug('Hello from header component controller');
    }
}

class ThreeDHubsHeaderComponent {
    static controller = ThreeDHubsHeaderComponentHeader;
    static template = `
    <div>
        Header links
        <ul>
            <li>
                <a ng-link="['Home']">Home</a>
            </li>
            <li>
                <a ng-link="['Print']">Cart</a>
            </li>
        </ul>
    </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsHeader',ThreeDHubsHeaderComponent);