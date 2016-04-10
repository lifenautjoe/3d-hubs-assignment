/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import { IEventDispatcherService } from './../../shared/services/event-dispatcher/event-dispatcher.service';

export interface IThreeDHubsPrintComponentController {
    
}

class ThreeDHubsPrintComponentController implements IThreeDHubsPrintComponentController {
    static $inject = [
        '$log',
        'eventDispatcherService'
    ];
    constructor($log : angular.ILogService,eventDispatcher : IEventDispatcherService){
        $log.debug('Hello from home component controller');
        console.log(eventDispatcher.make({}));
    }
}

class ThreeDHubsPrintComponent{
    static controller = ThreeDHubsPrintComponentController;
    static template = `
        <div>Welcome threeDHubsPrintComponent</div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsPrint',ThreeDHubsPrintComponent);