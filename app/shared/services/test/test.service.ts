/**
 * Created by herna502 on 10/04/16.
 */

import angular = require('angular');

export interface ITestService {
    doSomething() : void;
}

class TestService implements ITestService {
    constructor(){

    }
    doSomething(){
        console.log('Doing something')
    }
}

angular.module('3dHubsAssignment').service('testService',TestService);