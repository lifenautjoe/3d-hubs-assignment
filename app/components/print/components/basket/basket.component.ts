/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import './basket.scss';
import {IBasketService,IBasketItemCollection,IBasketItem} from "../../../../shared/services/basket/basket.service";
import {IBasketEventService} from "../../../../shared/services/basket/basket-event.service";

export interface IThreeDHubsBasketComponentController {
    /**
     * The basketEventService#wasChanged event handler
     * @param basketItems
     */
    onBasketWasChanged(basketItems:IBasketItemCollection);
    /**
     * The basket-uploader component upload success handler
     * @param basketItem
     */
    onBasketUploaderSuccess(basketItem:IBasketItem);
}

class ThreeDHubsBasketComponentController implements IThreeDHubsBasketComponentController {
    static $inject = [
        'basketService',
        'basketEventService'
    ];
    protected basketItems:IBasketItemCollection;
    constructor(protected basketService:IBasketService, basketEventService:IBasketEventService) {
        this.basketItems = basketService.getItems();
        basketEventService.listenWasChanged(this.onBasketWasChanged);
    }

    onBasketWasChanged(basketItems:IBasketItemCollection) {
        this.basketItems = basketItems;
    }

    onBasketUploaderSuccess(basketItem:IBasketItem) {
        this.basketService.addItem(basketItem);
    }
}

class ThreeDHubsBasketComponent {
    static controller = ThreeDHubsBasketComponentController;
    static template = `
        <div class="tdh-basket">
            <div class="tdh-basket__header">
                <span ng-bind="($ctrl.basketItems.length ? $ctrl.basketItems.length : 'No') + ' files uploaded'"></span>
            </div>
            <div class="tdh-basket__content">
                <div ng-repeat="basketItem in $ctrl.basketItems">
                    <span ng-bind="basketItem.name"></span>
                </div>
            </div>
            <div class="tdh-basket__footer">
                <three-d-hubs-basket-uploader on-upload-success="$ctrl.onBasketUploaderSuccess(data)"></three-d-hubs-basket-uploader>
            </div>
        </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsBasket', ThreeDHubsBasketComponent);