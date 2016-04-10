/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import './header.scss';

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
    <div class="tdh-header">
        <div class="container tdh-header__container">
            <div class="tdh-header__print">
                Print
            </div>
            <div class="tdh-header__menu">
                <div class="tdh-header-menu">
                    <div class="tdh-header-menu__logo">
                        <img src="https://d2xsqsnb4fq1ex.cloudfront.net/sites/all/themes/hubs3d/logo.png">
                    </div>
                    <div class="tdh-header-menu__items">
                        <ul>
                            <li>
                                <a ng-link="['Home']">Home</a>
                            </li>
                            <li>
                                <a ng-link="['Print']">Cart</a>
                            </li>
                        </ul>
                        Items
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsHeader',ThreeDHubsHeaderComponent);