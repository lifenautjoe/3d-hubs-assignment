/**
 * Created by herna502 on 09/04/16.
 */

import angular = require('angular');

class ThreeDHubsConfig{
    static $inject = [
      '$logProvider'
    ];
    constructor($logProvider : angular.ILogProvider){
        $logProvider.debugEnabled(true);
    }
}

angular.module('3dHubsAssignment').config(ThreeDHubsConfig);
