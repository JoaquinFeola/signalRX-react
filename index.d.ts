import { Signal } from "signalrx";

export function useSignal<T, R>(signal: Signal<T>, getValue?: (prev: Readonly<T>) => R): R