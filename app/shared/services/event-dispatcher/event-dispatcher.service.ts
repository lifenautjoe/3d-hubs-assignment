/**
 * Created by herna502 on 10/04/16.
 */

import angular = require('angular');

import {
    EventDispatcher,
    EventCollectionEventsListenersStorage,
    IEventDispatcher } from './lib/EventDispatcher';
export { IEventDispatcher } from './lib/EventDispatcher';

export interface IEventDispatcherService {
    /**
     * Event dispatcher factory method
     * @param eventsListenersStorage
     */
    make(eventsListenersStorage) : IEventDispatcher;
}

class EventDispatcherService implements IEventDispatcherService {
    make(eventsListenersStorage:EventCollectionEventsListenersStorage) {
        return new EventDispatcher(eventsListenersStorage);
    }
}
angular.module('3dHubsAssignment').service('eventDispatcherService', EventDispatcherService);