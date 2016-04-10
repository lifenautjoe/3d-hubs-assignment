/**
 * Created by herna502 on 10/04/16.
 */

import angular = require('angular');

import { EventDispatcher, IEventDispatcher } from './lib/EventDispatcher';

export interface IEventDispatcherService {
    make(events) : IEventDispatcher;
}

class EventDispatcherService implements IEventDispatcherService {
    make(events){
        return new EventDispatcher(events);
    }
}

angular.module('3dHubsAssignment').service('eventDispatcherService',EventDispatcherService);