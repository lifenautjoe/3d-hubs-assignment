/**
 * Created by herna502 on 10/04/16.
 */

import angular = require('angular');
import {IGenericCollection, GenericCollection} from "./lib/GenericCollection";

export interface IGenericCollectionService<T> {
    make(values : Array<T>) : IGenericCollection<T>
}

class GenericCollectionService<T> implements  IGenericCollectionService<T> {
    make(values? : Array<T>) : GenericCollection<T>{
        return new GenericCollection<T>(values);
    }
}

angular.module('3dHubsAssignment').service('genericCollectionService',GenericCollectionService);