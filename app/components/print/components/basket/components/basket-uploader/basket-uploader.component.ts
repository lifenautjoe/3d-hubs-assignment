/**
 * Created by herna502 on 11/04/16.
 */

// TODO : Perhaps this should be moved into shared components?
import './basket-uploader.scss';
import angular = require('angular');
import {IEventDispatcherService} from "../../../../../../shared/services/event-dispatcher/event-dispatcher.service";

export interface IThreeDHubsBasketUploaderComponentController {

}

class ThreeDHubsBasketUploaderComponentController implements IThreeDHubsBasketUploaderComponentController {
    static $inject = [
    ];
    constructor(){

    }
}

class ThreeDHubsBasketUploaderComponent implements angular.IComponentOptions{
    static controller = ThreeDHubsBasketUploaderComponentController;
    static bindings = {
        'onUploadSuccess' : '&',
        'onUploadFailure' : '&'
    };
    static template = `
        <div class="tdh-basket-uploader">
            <span class="tdh-basket-uploader__text">Drag 3D files here or browser for a file</span>
        </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsBasketUploader',ThreeDHubsBasketUploaderComponent);