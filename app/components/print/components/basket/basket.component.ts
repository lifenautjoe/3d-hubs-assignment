/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import './basket.scss';
import {IBasketService,IBasketItemCollection,IBasketItem} from "../../../../shared/services/basket/basket.service";
import {IBasketEventService} from "../../../../shared/services/basket/basket-event.service";
import {IThreeDFileUploadServiceSuccessData} from "./components/basket-uploader/basket-uploader.component";

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
    onBasketUploaderSuccess(basketItem:IThreeDFileUploadServiceSuccessData);
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

    onBasketUploaderSuccess(data : IThreeDFileUploadServiceSuccessData) {
        let basketItem = this.adaptUploaderSuccessDataToBasketItem(data);
        this.basketService.addItem(basketItem);
    }

    protected adaptUploaderSuccessDataToBasketItem (data : IThreeDFileUploadServiceSuccessData) : IBasketItem{
        return {
            image : data.render,
            name : data.filename,
            quantity : 1,
            x : data.dimensions.x,
            y : data.dimensions.y,
            z : data.dimensions.z
        }
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
                <three-d-hubs-basket-item ng-repeat="basketItem in $ctrl.basketItems" basket-item="basketItem"></three-d-hubs-basket-item>
            </div>
            <div class="tdh-basket__footer">
                <three-d-hubs-basket-uploader on-upload-success="$ctrl.onBasketUploaderSuccess(data)"></three-d-hubs-basket-uploader>
            </div>
        </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsBasket', ThreeDHubsBasketComponent);