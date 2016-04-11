/**
 * Created by herna502 on 11/04/16.
 */

import angular = require('angular');
import './basket-item.scss';

export interface IThreeDHubsBasketItemComponentController {

}

class ThreeDHubsBasketItemComponentController implements IThreeDHubsBasketItemComponentController {
    protected basketItem;
    constructor() {

    }
}


class ThreeDHubsBasketItemComponent {
    static controller = ThreeDHubsBasketItemComponentController;
    static bindings:{[binding : string] : string} = {
        basketItem: '<',
    };
    static template = `
        <div class="tdh-basket-item">
            <div class="tdh-basket-item__quantity">
                Wololo
            </div>
            <div class="tdh-basket-item__details">
                <span ng-bind="$ctrl.basketItem.name"></span>
            </div>
        </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsBasketItem', ThreeDHubsBasketItemComponent);