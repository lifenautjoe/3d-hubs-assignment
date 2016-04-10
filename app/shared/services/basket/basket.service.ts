/**
 * Created by herna502 on 10/04/16.
 */

import angular = require('angular');
import {IBasketEventService} from './basket-event.service';
import {IGenericCollectionService, IGenericCollection} from "../generic-collection/generic-collection.service";


export interface  IBasketItem {
    image : string,
    name : string,
    quantity : number,
    x : number,
    y : number,
    z : number
}

export interface  IBasketItemCollection extends Array<IBasketItem>{}


export interface IBasketService {
    addItem(basketItem:IBasketItem) : void;
    removeItem(basketItem:IBasketItem) : void;
    updateItemQuantity(basketItem:IBasketItem, to:number) : void;
    clearItems() : void;
    countItems() : number;
    getItems() : IBasketItemCollection;
}

class BasketService implements IBasketService {
    static $inject = [
        'basketEventService',
        'genericCollectionService'
    ];
    protected itemsCollection : IGenericCollection<IBasketItem>;
    constructor(protected basketEventService:IBasketEventService, genericCollectionService : IGenericCollectionService<IBasketItem>) {
        this.itemsCollection = genericCollectionService.make();
    }

    addItem(basketItem:IBasketItem):void {
        basketItem = Object.assign({},basketItem);
        this.itemsCollection.add(basketItem);
        this.basketEventService.broadcastItemWasAdded(basketItem);
        this.broadcastWasChanged();
    }

    removeItem(basketItem:IBasketItem):void {
        let itemWasRemoved = this.itemsCollection.remove(basketItem);
        if(itemWasRemoved){
            this.basketEventService.broadcastItemWasRemoved(basketItem);
            this.broadcastWasChanged();
        }
    }

    updateItemQuantity(basketItem:IBasketItem, to:number):void {
        if(this.itemsCollection.has(basketItem)){
            let from = basketItem.quantity;
            basketItem.quantity = to;
            this.basketEventService.broadcastItemQuantityWasChanged(basketItem,from,to);
            this.broadcastWasChanged();
        }
    }

    clearItems():void {
        this.itemsCollection.clear();
        this.broadcastWasChanged();
    }

    countItems() : number {
        return this.itemsCollection.count();
    }

    getItems() : IBasketItemCollection {
        return this.itemsCollection.get();
    }

    /**
     * Shorthand method
     */
    protected broadcastWasChanged(){
        this.basketEventService.broadcastWasChanged(this.itemsCollection.get());
    }
}

angular.module('3dHubsAssignment').service('basketService', BasketService);