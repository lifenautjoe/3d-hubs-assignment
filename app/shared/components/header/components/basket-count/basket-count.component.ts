/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import './basket-count.scss';
import {IBasketService, IBasketItemCollection} from "../../../../services/basket/basket.service";
import {IBasketEventService} from "../../../../services/basket/basket-event.service";

export interface IThreeDHubsBasketCountComponentController {
    /**
     * The basketEventService#wasChanged event handler
     * @param basketItems
     */
    onBasketWasChanged(basketItems:IBasketItemCollection);
}

class ThreeDHubsBasketCountComponentBasketCount implements IThreeDHubsBasketCountComponentController{
    static $inject = [
        'basketService',
        'basketEventService'
    ];
    protected basketItems : IBasketItemCollection;
    constructor(basketService : IBasketService,basketEventService : IBasketEventService){
        this.basketItems = basketService.getItems();
        basketEventService.listenWasChanged(this.onBasketWasChanged.bind(this));
    }
    onBasketWasChanged(basketItems:IBasketItemCollection){
        this.basketItems = basketItems;
    }
}

class ThreeDHubsBasketCountComponent {
    static controller = ThreeDHubsBasketCountComponentBasketCount;
    static template = `
    <div class="tdh-basket-count">
        <a class="tdh-basket-count-button" ng-link="['Print']">
            3D Print <span class="tdh-basket-count-button__count" ng-show="$ctrl.basketItems.length > 0" ng-bind="$ctrl.basketItems.length"></span>
        </a>
    </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsBasketCount',ThreeDHubsBasketCountComponent);