/**
 * Created by herna502 on 10/04/16.
 */

import {
    EventCollection,
    IEventCollection,
    IEventCollectionListener,
    IEventCollectionListenerRemover } from './EventCollection';


export interface IEventDispatcher {
    listen(eventName : string, ...listeners : IEventCollectionListener[]) : IEventCollectionListenerRemover;
    broadcast(eventName : string, ...args : any[]) : void;
}

export class EventDispatcher implements IEventDispatcher {
    protected eventsCollection:EventCollection;

    constructor(events) {
        this.eventsCollection = this.makeEventCollection(events);
    }

    listen(eventName:string, ...listeners:IEventCollectionListener[]):IEventCollectionListenerRemover {
        return this.eventsCollection.addEventListeners(eventName, listeners);
    }

    broadcast(eventName:string, ...args:any[]):void {
        return this.eventsCollection.trigger(eventName,...args);
    }

    protected makeEventCollection(events):EventCollection {
        return new EventCollection(events);
    }
}
