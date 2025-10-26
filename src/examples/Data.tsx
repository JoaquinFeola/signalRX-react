import { Signal } from "signalrx"
import { useSignal } from "../hooks"

const signal = new Signal({ counter: 1, }, {
    storage: {
        name: "aaaa",
        storageType: "sessionstorage",
        
    }
})

export const Data = () => {
    const counter = useSignal(signal, (state) => state.counter);
    return (
        <div>
            {counter}
            <button onClick={() => signal.resetValue()}>reset</button>
            <button onClick={() => signal.setValue(p => ({ ...p, counter: p.counter -1 }))}>- 1</button>
            <button onClick={() => signal.setValue(p => ({ ...p, counter: p.counter + 1 }))}>+ 1</button>
        </div>
    )
}
