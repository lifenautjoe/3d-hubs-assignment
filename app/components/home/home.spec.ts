/**
 * Created by herna502 on 09/04/16.
 */

import 'angular-mocks/ngMock';

import { IThreeDHubsHomeComponentController } from './home.component';

describe('component: threeDHubsHome', function () {
    let component : IThreeDHubsHomeComponentController ,
        scope : angular.IScope,
        $componentController : angular.IComponentControllerService;

    beforeEach(angular.mock.module('3dHubsAssignment'));

    beforeEach(angular.mock.inject(function ($rootScope : angular.IRootScopeService,_$componentController_ : angular.IComponentControllerService) {
        scope = $rootScope.$new();
        $componentController = _$componentController_;
    }));

    it('should be defined', function () {
        component = $componentController('threeDHubsHome',{ $scope : scope});
        expect(typeof component !== 'undefined').toBe(true);
    });
});