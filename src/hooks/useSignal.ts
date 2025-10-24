import { useSyncExternalStore } from "react";
import { Signal } from "signalrx";


export const useSignal = <T, R>(signal: Signal<T>, getValue?: (prev: Readonly<T>) => R): R => {
    return useSyncExternalStore(
        (cb) => signal.subscribe(cb),
        () => getValue
            ? signal.getValue(getValue)
            : signal.getValue() as R
    )
}
