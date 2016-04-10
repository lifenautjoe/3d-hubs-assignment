/**
 * Created by herna502 on 09/04/16.
 */

import 'angular-mocks/ngMock';

import { IThreeDHubsHeaderComponentController } from './header.component';

describe('component: threeDHubsHeader', function () {
    let component : IThreeDHubsHeaderComponentController ,
        scope : angular.IScope,
        $componentController : angular.IComponentControllerService;

    beforeEach(angular.mock.module('3dHubsAssignment'));

    beforeEach(angular.mock.inject(function ($rootScope : angular.IRootScopeService,_$componentController_ : angular.IComponentControllerService) {
        scope = $rootScope.$new();
        $componentController = _$componentController_;
    }));

    it('should be defined', function () {
        component = $componentController('threeDHubsHeader',{ $scope : scope});
        expect(typeof component !== 'undefined').toBe(true);
    });
});