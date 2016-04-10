/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import './basket-uploader.scss';
import {IBasketService,IBasketItemCollection} from "../../../../shared/services/basket/basket.service";
import {IBasketEventService} from "../../../../shared/services/basket/basket-event.service";

export interface IThreeDHubsBasketUploaderComponentController {

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
                Header
            </div>
            <div class="tdh-basket-uploader__content">
                Content
            </div>
            <div class="tdh-basket-uploader__footer">
                Footer
            </div>
        </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsBasketUploader',ThreeDHubsBasketUploaderComponent);