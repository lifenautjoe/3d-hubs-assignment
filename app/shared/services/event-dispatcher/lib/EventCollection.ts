/**
 * Created by herna502 on 10/04/16.
 */

// TODO : Make events storage a separated class, currently implemented here (add,remove,set,get,has)


export interface IEventCollectionListener {
    (...args:any[]);
}

export interface IEventCollectionListenerRemover {
    () : void;
}

export interface IEventCollectionListenerRemoversExecutor {
    () : void;
}

export interface IEventCollection<EventsListenersStorage,Listener extends IEventCollectionListener> {
    /**
     * Adds an event listeners
     * @param eventName
     * @param listeners
     */
    addEventListeners(eventName:string, listeners:Array<Listener>) : IEventCollectionListenerRemoversExecutor;
    /**
     * Adds an event listener
     * @param eventName
     * @param listener
     */
    addEventListener(eventName:string, listener:Listener) : IEventCollectionListenerRemover;
    /**
     * Removes an event listener
     * @param eventName
     * @param listener
     */
    removeEventListener(eventName:string, listener:Listener) : void;
    /**
     * Gets the listeners for an event with the given name
     * @param eventName
     */
    getEventListeners(eventName:string) : Array<Listener>;
    /**
     * Sets the listeners for an event with the given name
     * @param eventName
     * @param listeners
     */
    setEventListeners(eventName:string, listeners:Array<Listener>) : void;
    /**
     * Triggers event listeners stored with the name passed as the first argument with the rest of the arguments
     * passed as listener parameters
     */
    trigger(eventName:string, ...args:any[]) : void;
    /**
     * Adds the given event name to the listeners storage
     * @param eventName
     */
    add(eventName:string) : void;
    /**
     * Removes the given event name listeners
     * @param eventName
     */
    remove(eventName:string) : void;
    /**
     * Sets the given eventListenersStorage
     * @param eventListenersStorage
     */
    set(eventListenersStorage:EventsListenersStorage) : void;
    /**
     * Gets the given event name listeners
     * @param eventName
     */
    get(eventName:string) : Array<Listener> | void;
    /**
     * Checks if the event collection has an event with the given name
     *
     * @param eventName - Name of the event to check for
     */
    has(eventName:string) : boolean;

}


interface EventCollectionListener extends IEventCollectionListener {
}
interface EventCollectionListenerRemover extends IEventCollectionListenerRemover {
}
interface EventCollectionListenerRemoversExecutor extends IEventCollectionListenerRemoversExecutor {
}

export interface EventCollectionEventsListenersStorage {
    [ eventName : string]  : Array<EventCollectionListener>
}

export class EventCollection implements IEventCollection<EventCollectionEventsListenersStorage,EventCollectionListener> {
    protected eventsListenersStorage;

    constructor(eventsListenersStorage?:EventCollectionEventsListenersStorage) {
        this.eventsListenersStorage = eventsListenersStorage ? eventsListenersStorage : {};
    }


    addEventListener(eventName:string, listener:EventCollectionListener):EventCollectionListenerRemover {
        if (!this.has(eventName)) {
            this.add(eventName);
        }
        let listeners = this.getEventListeners(eventName);
        listeners.push(listener);
        return this.makeListenerRemover(eventName, listener);
    }


    addEventListeners(eventName:string, listeners:Array<EventCollectionListener>):EventCollectionListenerRemoversExecutor {
        let removers = [];
        listeners.forEach((listener) => {
            let result = this.addEventListener(eventName, listener);
            if (result) {
                removers.push(result);
            }
        });

        return this.makeRemoversExecutor(removers);
    }


    removeEventListener(eventName:string, listener:EventCollectionListener):void {
        let listeners = this.getEventListeners(eventName);
        listeners = listeners.filter(function (existingListener) {
            return listener !== existingListener;
        });

        listeners.length > 0 ? this.setEventListeners(eventName, listeners) : this.remove(eventName);
    }


    getEventListeners(eventName:string):Array<EventCollectionListener> {
        return this.eventsListenersStorage[eventName] = this.eventsListenersStorage[eventName] || [];
    }


    setEventListeners(eventName:string, listeners:Array<EventCollectionListener>):void {
        this.eventsListenersStorage[eventName] = listeners;
    }


    trigger(eventName, ...args:any[]):void {
        let listeners = this.getEventListeners(eventName);

        if (listeners) {
            listeners.forEach(function (listener) {
                listener(...args);
            });
        }
    }


    add(eventName:string):void {
        this.eventsListenersStorage[eventName] = [];
    }


    remove(eventName:string):void {
        delete this.eventsListenersStorage[eventName];
    }


    set(eventListenersStorage:EventCollectionEventsListenersStorage):void {
        this.eventsListenersStorage = eventListenersStorage;
    }


    get(eventName:string):Array<EventCollectionListener> {
        return this.eventsListenersStorage[eventName];
    }


    has(eventName:string):boolean {
        return (typeof this.get(eventName) !== 'undefined');
    }

    /**
     * Makes a listener remover function
     *
     * @param eventName - Name of the event to create the remover function for
     * @param listener - Listener to be removed when remover function is executed
     */
    protected makeListenerRemover(eventName:string, listener:EventCollectionListener):EventCollectionListenerRemover {
        return () => {
            this.removeEventListener(eventName, listener);
        };
    }

    /**
     * Makes a listeners removers executor
     *
     * @param removers - Listeners removers functions
     */
    protected makeRemoversExecutor(removers):EventCollectionListenerRemoversExecutor {
        return function () {
            removers.forEach(function (remover) {
                remover();
            });
        }
    }
}