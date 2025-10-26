import { StrictMode } from "react";
import {  createRoot} from "react-dom/client"
import { Data } from "./Data";

export const root = createRoot(document.getElementById("root")!);


root.render(
    <StrictMode>
        <Data/>
    </StrictMode>
);

