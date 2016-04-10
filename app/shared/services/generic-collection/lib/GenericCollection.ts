/**
 * Created by herna502 on 10/04/16.
 */

export interface IGenericCollection<T> {
    /**
     * Removes the given value from the collection
     * @param value
     */
    remove(value : T ) : void;
    /**
     * Adds the given value to the collection
     * @param value
     */
    add(value : T) : void;
    /**
     * Clears the collection
     */
    clear() : void
    /**
     * Gets the collection items
     */
    get() : Array<T>
    /**
     * Sets the collection items
     * @param values
     */
    set(values : Array<T>) : void;
}

export class GenericCollection<T> implements IGenericCollection<T>{
    protected values : Array<T>;
    constructor(items?){
        this.values = items ? items : [];
    }
    remove(value : T){
        let items = this.get();
        this.set(items.filter(function (storedValue) {
            return value !== storedValue;
        }));
    }
    add(value : T){
        this.values.push(value);
    }
    clear(){
        this.set([]);
    }
    get(){
        return this.values;
    }
    set(values : Array<T>){
        this.values = values;
    }
}