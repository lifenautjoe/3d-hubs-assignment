/**
 * Created by herna502 on 11/04/16.
 */

// TODO : Perhaps this should be moved into shared components?
// NOTE : We don't have an actual form, however in the real world we would, I'll leave the method named as it is


import './basket-uploader.scss';
import angular = require('angular');
import {IEventDispatcherService} from "../../../../../../shared/services/event-dispatcher/event-dispatcher.service";
import {IThreeDFileUploadService} from "./services/3d-file-upload/3d-file-upload.service";
export {IThreeDFileUploadServiceSuccessData} from "./services/3d-file-upload/3d-file-upload.service";
export interface IThreeDHubsBasketUploaderComponentController {
    /**
     * Submits an imaginary form
     */
    submitForm();
}

class ThreeDHubsBasketUploaderComponentController implements IThreeDHubsBasketUploaderComponentController {
    static $inject = [
        'threeDFileUploadService'
    ];
    protected onUploadSuccess;
    protected onUploadFailure;

    constructor(protected threeDFileUploadService:IThreeDFileUploadService) {

    }

    submitForm() {
        // ... do whatever must be done in order to get the 3d file
        let threeDFile = {};
        this.threeDFileUploadService.upload(threeDFile)
            .then((data)=> this.onUploadSuccess ? this.onUploadSuccess({data: data}) : null)
            .catch((err) => this.onUploadFailure ? this.onUploadFailure({err: err}) : null);
    }
}



class ThreeDHubsBasketUploaderComponent {
    static controller = ThreeDHubsBasketUploaderComponentController;
    static bindings : {[binding : string] : string} = {
        onUploadSuccess: '&',
        onUploadFailure: '&'
    };
    static template = `
        <div class="tdh-basket-uploader" ng-click="$ctrl.submitForm()">
            <span class="tdh-basket-uploader__text">Drag 3D files here or browse for a file</span>
        </div>
    `;
}

angular.module('3dHubsAssignment').component('threeDHubsBasketUploader', ThreeDHubsBasketUploaderComponent);

