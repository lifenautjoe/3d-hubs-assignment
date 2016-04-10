/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import './basket-uploader.scss';
import {IBasketService,IBasketItemCollection} from "../../../../shared/services/basket/basket.service";
import {IBasketEventService} from "../../../../shared/services/basket/basket-event.service";

export interface IThreeDHubsBasketUploaderComponentController {
    /**
     * The basket was changed event handler
     * @param basketItems
     */
    onBasketWasChanged(basketItems : IBasketItemCollection);
}

class ThreeDHubsBasketUploaderComponentController implements IThreeDHubsBasketUploaderComponentController {
    static $inject = [
        'basketService',
        'basketEventService'
    ];
    protected basketItems : IBasketItemCollection;
    constructor(basketService : IBasketService,basketEventService : IBasketEventService){
        this.basketItems = basketService.getItems();
        basketEventService.listenWasChanged(this.onBasketWasChanged);
    }
    onBasketWasChanged(basketItems : IBasketItemCollection) {
        this.basketItems = basketItems;
    }
}

class ThreeDHubsBasketUploaderComponent{
    static controller = ThreeDHubsBasketUploaderComponentController;
    static template = `
        <div class="tdh-basket-uploader">
            <div class="tdh-basket-uploader__header">
                <span ng-bind="($ctrl.basketItems.length ? $ctrl.basketItems.length : 'No') + ' files uploaded'"></span>
            </div>
            <div class="tdh-basket-uploader__content">
                <div ng-repeat="basketItem in $ctrl.basketItems">
                    <span ng-bind="basketItem.name"></span>
                </div>
            </div>
            <div class="tdh-basket-uploader__footer">
                Footer
            </div>
        </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsBasketUploader',ThreeDHubsBasketUploaderComponent);