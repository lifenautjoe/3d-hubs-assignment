/**
 * Created by herna502 on 11/04/16.
 */

import angular = require('angular');

export interface IThreeDFileUploadServiceSuccessDataDimensions {
    x : number,
    y : number,
    z : number
}

export interface IThreeDFileUploadServiceSuccessData {
    render : string,
    filename : string,
    dimensions : IThreeDFileUploadServiceSuccessDataDimensions
}

export interface IThreeDFileUploadService{
    /**
     * Uploads the 3d file
     * @param threeDFile
     */
    upload(threeDFile) : Promise<IThreeDFileUploadServiceSuccessData>;
}

class ThreeDFileUploadService implements IThreeDFileUploadService{
    static $inject = [
        'Promise'
    ];
    constructor(protected Promise : PromiseConstructor){

    }
    upload(threeDFile) : Promise<IThreeDFileUploadServiceSuccessData> {
        return new this.Promise<IThreeDFileUploadServiceSuccessData>( (resolve) => {
            resolve({
                // Mock purposes
                render : 'https://3dhubs.s3-eu-west-1.amazonaws.com/s3fs-public/styles/order_photo/hubs3dpublic/renders/entity_464485_render.png?itok=XQq8mc0q',
                filename : `${Math.round(Math.random() * (100))}.jpg`,
                dimensions : {
                    x : `${Math.round(Math.random() * (10))}`,
                    y : `${Math.round(Math.random() * (10))}`,
                    z : `${Math.round(Math.random() * (10))}`
                }
            });
        });
    }
}

angular.module('3dHubsAssignment').service('threeDFileUploadService',ThreeDFileUploadService);
