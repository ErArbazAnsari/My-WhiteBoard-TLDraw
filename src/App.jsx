import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";
import { useSyncDemo } from "@tldraw/sync";
// import "./App.css";

function App() {
    const store = useSyncDemo({ roomId: "myapp-abc123" });

    return (
        <div style={{ position: "fixed", inset: 0 }}>
            <Tldraw persistenceKey="tldraw data" store={store} />
        </div>
    );
}

export default App;
