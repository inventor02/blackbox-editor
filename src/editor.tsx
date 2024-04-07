import { ChangeEvent } from "preact/compat";
import { useEffect, useState } from "preact/hooks";

export function Editor() {
    let [config, setConfig] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/api/config")
            .then((res) => res.text())
            .then((data) => setConfig(data))
            .catch((err) => console.error(err));
    }, []);

    const handleConfigChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log((event.target as HTMLTextAreaElement).value);
        setConfig((event.target as HTMLTextAreaElement).value);
    };

    return (
        <div>
            <h1>Editor</h1>
            <textarea value={config} onChange={handleConfigChange}></textarea>
        </div>
    );
}