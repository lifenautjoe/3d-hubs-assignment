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
            <div class="tdh-header__basket-button">
                <three-d-hubs-basket-count></three-d-hubs-basket-count>
            </div>
            <div class="tdh-header__menu">
                <div class="tdh-header-menu">
                    <div class="tdh-header-menu__logo">
                        <img src="https://d2xsqsnb4fq1ex.cloudfront.net/sites/all/themes/hubs3d/logo.png">
                    </div>
                    <div class="tdh-header-menu__items">
                        <ul class="tdh-header-menu-items">
                            <li class="tdh-header-menu-items__item">
                                <a class="tdh-header-menu-items-item" ng-link="['Home']">
                                    <span>home</span>
                                </a>
                            </li>
                            <li class="tdh-header-menu-items__item">
                                <a class="tdh-header-menu-items-item" ng-link="['Print']">
                                    <span>print</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsHeader',ThreeDHubsHeaderComponent);