/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import { IEventDispatcher } from './../../shared/services/event-dispatcher/event-dispatcher.service';

export interface IThreeDHubsHomeComponentController {
    
}

class ThreeDHubsHomeComponentController implements IThreeDHubsHomeComponentController {
    static $inject = [
        '$log',
        'eventDispatcherService'
    ];
    constructor($log : angular.ILogService,eventDispatcherService : IEventDispatcher){
        console.log(eventDispatcherService);
    }
}

class ThreeDHubsHomeComponent {
    static controller = ThreeDHubsHomeComponentController;
    static template = `
        <div>Welcome threeDHubsHomeComponent</div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsHome',ThreeDHubsHomeComponent);