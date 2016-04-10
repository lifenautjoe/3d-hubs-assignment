/**
 * Created by herna502 on 10/04/16.
 */

export interface IEventCollectionListener {
    (...args : any[]);
}

export interface IEventCollectionListenerRemover {
    () : void;
}

export interface IEventCollectionListenerRemoversExecutor {
    () : void;
}

export interface IEventCollection<EventsListenersStorage,Listener extends IEventCollectionListener> {
    addEventListeners(eventName : string, listeners : Array<Listener>) : IEventCollectionListenerRemoversExecutor;
    addEventListener(eventName : string, listener : Listener) : IEventCollectionListenerRemover;
    removeEventListener(eventName : string, listener : Listener) : void;
    getEventListeners(eventName : string) : Array<Listener>;
    setEventListeners(eventName : string , listeners : Array<Listener>) : void;
    trigger(eventName : string ,...args : any[]) : void;
    add(eventName : string ) : void;
    remove(eventName : string ) : void;
    set(eventListenersStorage : EventsListenersStorage) : void;
    get(eventName : string) : Array<Listener> | void;
    has(eventName : string ) : boolean;

}

// TODO : Make events storage a separated class

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

    /**
     * Adds an event listener
     * @param eventName
     * @param listener
     */
    addEventListener(eventName:string, listener:EventCollectionListener):EventCollectionListenerRemover {
        if (!this.has(eventName)) {
            this.add(eventName);
        }
        let listeners = this.getEventListeners(eventName);
        listeners.push(listener);
        return this.makeListenerRemover(eventName, listener);
    }

    /**
     * Adds an event listeners
     * @param eventName
     * @param listeners
     */
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

    /**
     * Removes an event listener
     * @param eventName
     * @param listener
     */
    removeEventListener(eventName:string, listener:EventCollectionListener):void {
        let listeners = this.getEventListeners(eventName);
        listeners = listeners.filter(function (existingListener) {
            return listener !== existingListener;
        });

        listeners.length > 0 ? this.setEventListeners(eventName, listeners) : this.remove(eventName);
    }

    /**
     * Gets the listeners for an event with the given name
     * @param eventName
     */
    getEventListeners(eventName:string):Array<EventCollectionListener> {
        return this.eventsListenersStorage[eventName] = this.eventsListenersStorage[eventName] || [];
    }

    /**
     * Sets the listeners for an event with the given name
     * @param eventName
     * @param listeners
     */
    setEventListeners(eventName:string, listeners:Array<EventCollectionListener>):void {
        this.eventsListenersStorage[eventName] = listeners;
    }

    /**
     * Triggers event listeners stored with the name passed as the first argument with the rest of the arguments
     * passed as listener parameters
     */
    trigger(eventName, ...args:any[]):void {
        let listeners = this.getEventListeners(eventName);

        if (listeners) {
            listeners.forEach(function (listener) {
                listener(...args);
            });
        }
    }

    /**
     * Adds the given event name to the listeners storage
     * @param eventName
     */
    add(eventName:string):void {
        this.eventsListenersStorage[eventName] = [];
    }

    /**
     * Removes the given event name listeners
     * @param eventName
     */
    remove(eventName:string):void {
        delete this.eventsListenersStorage[eventName];
    }

    /**
     * Sets the given eventListenersStorage
     * @param eventListenersStorage
     */
    set(eventListenersStorage:EventCollectionEventsListenersStorage):void {
        this.eventsListenersStorage = eventListenersStorage;
    }

    /**
     * Gets the given event name listeners
     * @param eventName
     */
    get(eventName:string):Array<EventCollectionListener> {
        return this.eventsListenersStorage[eventName];
    }

    /**
     * Checks if the event collection has an event with the given name
     *
     * @param eventName - Name of the event to check for
     */
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