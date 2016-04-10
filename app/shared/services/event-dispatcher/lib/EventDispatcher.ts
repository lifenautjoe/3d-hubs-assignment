/**
 * Created by herna502 on 10/04/16.
 */

import {
    EventCollection,
    EventCollectionEventsListenersStorage,
    IEventCollection,
    IEventCollectionListener,
    IEventCollectionListenerRemover } from './EventCollection';

export { EventCollectionEventsListenersStorage } from './EventCollection';

export interface IEventDispatcher {
    listen(eventName : string, ...listeners : IEventCollectionListener[]) : IEventCollectionListenerRemover;
    broadcast(eventName : string, ...args : any[]) : void;
}

export class EventDispatcher implements IEventDispatcher {
    protected eventsCollection:EventCollection;

    constructor(eventsListenersStorage? : EventCollectionEventsListenersStorage) {
        this.eventsCollection = this.makeEventCollection(eventsListenersStorage);
    }

    listen(eventName:string, ...listeners:IEventCollectionListener[]):IEventCollectionListenerRemover {
        return this.eventsCollection.addEventListeners(eventName, listeners);
    }

    broadcast(eventName:string, ...args:any[]):void {
        return this.eventsCollection.trigger(eventName,...args);
    }

    protected makeEventCollection(eventsListenersStorage? : EventCollectionEventsListenersStorage):EventCollection {
        return new EventCollection(eventsListenersStorage);
    }
}
