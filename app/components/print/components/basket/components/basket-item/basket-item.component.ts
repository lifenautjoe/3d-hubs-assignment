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
                Quantity
            </div>
            <div class="tdh-basket-item__details">
                <div class="tdh-basket-item-details">
                    <img class="tdh-basket-item-details__image" ng-src="{{$ctrl.basketItem.image}}" >
                    <div class="tdh-basket-item-details-texts">
                        <span class="tdh-basket-item-detail-texts__name" ng-bind="$ctrl.basketItem.name">
                        </span>
                        <span class="tdh-basket-item-detail-texts__dimensions"
                            ng-bind="$ctrl.basketItem.x + ' X ' + $ctrl.basketItem.y + ' X ' + $ctrl.basketItem.z + ' cm'">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsBasketItem', ThreeDHubsBasketItemComponent);