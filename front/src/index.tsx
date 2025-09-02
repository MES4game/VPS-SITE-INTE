import { FC, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const CONTAINER = document.getElementById("root");
if (!CONTAINER) throw new Error("Can't find root container")
const ROOT = createRoot(CONTAINER);

function render (App: FC) {
    ROOT.render(
        process.env.NODE_ENV == 'production'
        ? (
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
        : (
            <StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </StrictMode>
        )
    );
}

render((await import("@/App")).default);

// Just for Type safety
declare global {
    interface ImportMeta {
        webpackHot?: { accept(path: string, callback: () => void): void; };
    }
}

if (import.meta.webpackHot) {
    console.log("webpackHot enabled");
    import.meta.webpackHot.accept("@/App", () => {
        void import("@/App")
            .then(({ default: App }) => { render(App); })
            .catch();
    });
}
