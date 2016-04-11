/**
 * Created by herna502 on 10/04/16.
 */

import angular = require('angular');
import {IEventDispatcherService, IEventDispatcher, IEventCollectionListenerRemover} from "../event-dispatcher/event-dispatcher.service";
import { IBasketItem, IBasketItemCollection } from './basket.service';

export interface IBasketEventServiceQuantityWasChangedListener {
    (basketItem:IBasketItem, from:number, to:number)
}

export interface IBasketEventServiceItemWasAddedListener {
    (basketItem:IBasketItem)
}

export interface IBasketEventServiceItemWasRemovedListener {
    (basketItem:IBasketItem)
}

export interface IBasketEventServiceWasClearedListener {
    ()
}

export interface IBasketEventServiceWasChangedListener {
    (basketItems:IBasketItemCollection)
}


export interface IBasketEventService {
    /**
     * Broadcasts that an item quantity was changed
     * @param basketItem
     * @param from
     * @param to
     */
    broadcastItemQuantityWasChanged(basketItem:IBasketItem, from:number, to:number) : void;
    /**
     * Listens to the change of an item quantity
     * @param listener
     */
    listenItemQuantityWasChanged(listener:IBasketEventServiceQuantityWasChangedListener) : IEventCollectionListenerRemover;
    /**
     * Broadcasts that an item was added
     * @param basketItem
     */
    broadcastItemWasAdded(basketItem:IBasketItem) : void;
    /**
     * Listens to the addition of an item
     * @param listener
     */
    listenItemWasAdded(listener:IBasketEventServiceItemWasAddedListener) : IEventCollectionListenerRemover;
    /**
     * Broadcasts that an item was removed
     * @param basketItem
     */
    broadcastItemWasRemoved(basketItem:IBasketItem) : void;
    /**
     * Listens to the removal of an item
     * @param listener
     */
    listenItemWasRemoved(listener:IBasketEventServiceItemWasRemovedListener) : IEventCollectionListenerRemover;
    /**
     * Broadcasts that the basket was cleared
     */
    broadcastWasCleared() : void;
    /**
     * Listens to the clearance of the basket
     * @param listener
     */
    listenWasCleared(listener:IBasketEventServiceWasClearedListener) : IEventCollectionListenerRemover;
    /**
     * Broadcasts that the basket was changed
     */
    broadcastWasChanged(basketItems:IBasketItemCollection) : void;
    /**
     * Listens to the clearance of the basket
     * @param listener
     */
    listenWasChanged(listener:IBasketEventServiceWasChangedListener) : IEventCollectionListenerRemover;
}

class BasketEventService implements IBasketEventService {
    static $inject = [
        'eventDispatcherService'
    ];
    protected eventNames = {
        'itemQuantityWasChanged': 'itemQuantityWasChanged',
        'itemWasAdded': 'itemWasAdded',
        'itemWasRemoved': 'itemWasRemoved',
        'wasCleared': 'wasCleared',
        'wasChanged': 'wasChanged'
    };
    protected eventDispatcher:IEventDispatcher;

    constructor(eventDispatcherService:IEventDispatcherService) {
        this.eventDispatcher = eventDispatcherService.make();
    }

    broadcastItemQuantityWasChanged(basketItem:IBasketItem, from:number, to:number):void {
        this.eventDispatcher.broadcast(this.eventNames.itemQuantityWasChanged, basketItem, from, to);
    }

    listenItemQuantityWasChanged(listener:IBasketEventServiceQuantityWasChangedListener):IEventCollectionListenerRemover {
        return this.eventDispatcher.listen(this.eventNames.itemQuantityWasChanged, listener);
    }

    broadcastItemWasAdded(basketItem:IBasketItem):void {
        this.eventDispatcher.broadcast(this.eventNames.itemWasAdded, basketItem);
    }

    listenItemWasAdded(listener:IBasketEventServiceItemWasAddedListener):IEventCollectionListenerRemover {
        return this.eventDispatcher.listen(this.eventNames.itemWasAdded, listener);
    }

    broadcastItemWasRemoved(basketItem:IBasketItem):void {
        this.eventDispatcher.broadcast(this.eventNames.itemWasRemoved, basketItem);
    }

    listenItemWasRemoved(listener:IBasketEventServiceItemWasRemovedListener):IEventCollectionListenerRemover {
        return this.eventDispatcher.listen(this.eventNames.itemWasRemoved, listener);
    }

    broadcastWasCleared():void {
        this.eventDispatcher.broadcast(this.eventNames.wasCleared);
    }

    listenWasCleared(listener:IBasketEventServiceWasClearedListener):IEventCollectionListenerRemover {
        return this.eventDispatcher.listen(this.eventNames.wasCleared);
    }

    broadcastWasChanged(basketItems:IBasketItemCollection) : void {
        this.eventDispatcher.broadcast(this.eventNames.wasChanged,basketItems);
    }

    listenWasChanged(listener:IBasketEventServiceWasChangedListener):IEventCollectionListenerRemover {
        return this.eventDispatcher.listen(this.eventNames.wasChanged,listener);
    }
}

angular.module('3dHubsAssignment').service('basketEventService', BasketEventService);