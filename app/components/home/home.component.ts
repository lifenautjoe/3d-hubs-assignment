/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import { ITestService } from './../../shared/services/test/test.service.ts';

export interface IThreeDHubsHomeComponentController {
    
}

class ThreeDHubsHomeComponentController implements IThreeDHubsHomeComponentController {
    static $inject = [
        '$log',
        'testService'
    ];
    constructor($log : angular.ILogService,testService : ITestService){
        $log.debug('Hello from home component controller');
        testService.doSomething();
    }
}

class ThreeDHubsHomeComponent {
    static controller = ThreeDHubsHomeComponentController;
    static template = `
        <div>Welcome threeDHubsHomeComponent</div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsHome',ThreeDHubsHomeComponent);