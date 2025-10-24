# 💡 SignalRX React

**`signalrx-react`** is a lightweight adapter that connects [SignalRX](https://www.npmjs.com/package/signalrx) with **React** — making reactive state management seamless inside your components.

---

## 🚀 Installation

Install both **SignalRX** and **signalrx-react**:

```bash
npm install signalrx signalrx-react
# or
yarn add signalrx signalrx-react
```

## 🧩 Example Usage

### 🧱 Create a Signal Store

```typescript
// auth.store.ts

import { Signal } from "signalrx";

interface AuthSignalState {
  isAuthenticated: boolean;
  token: string | null;
}

export const authSignalStore: Signal<AuthSignalState> =
  new Signal<AuthSignalState>(
    {
      isAuthenticated: false,
      token: null,
    } /* Initial State */
  );
```

### ⚛️ Using in a React Component

```typescript
// AuthGuard.tsx

import { authSignalStore } from "./auth.store";
import { useSignal } from "signalrx-react";
import { PropsWithChildren } from "react";

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const isAuthenticated = useSignal(
    authSignalStore,
    (state) => state.isAuthenticated
  );

  return isAuthenticated ? children : <div>Please log in to continue</div>;
};
```

---

### ✅ API Summary

| Hook / Function               | Description                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| `useSignal(store, selector?)` | Subscribes your React component to a `Signal` store and re-renders on state updates. |

---

### 🧠 Why use SignalRX React?

- ⚡ **Instant reactivity** — auto-updates your UI when signals change.
- 🧩 **Simple integration** — no boilerplate, just hooks.
- 🪶 **Lightweight** — minimal footprint, perfect for modern React apps.

### 🤝 Contributing

If you want to contribute, please **fork this repository** and create a **pull request**.
Direct pushes to `main` are not allowed.

### 📜 License

MIT © 2025 — Created with ❤️ by [Joaquin Feola](https://github.com/JoaquinFeola)

---
