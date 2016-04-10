/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');
import Promise = require('bluebird');

class ThreeDHubsRun {
    static $inject = [
        '$log',
        '$rootScope'
    ];

    constructor($log:angular.ILogService, $rootScope:angular.IRootScopeService) {
        Promise.setScheduler(function (cb) {
            $rootScope.$evalAsync(cb);
        });
        $log.debug('3dHubs run!');
    }
}

angular.module('3dHubsAssignment').run(ThreeDHubsRun);

