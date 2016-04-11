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
                render : 'someimage.jpg',
                filename : `${Math.round(Math.random() * (100))}.jpg`,
                dimensions : {
                    x : 10,
                    y : 20,
                    z : 30
                }
            });
        });
    }
}

angular.module('3dHubsAssignment').service('threeDFileUploadService',ThreeDFileUploadService);
