import { ChangeEvent } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import { getConfig } from "./api";
import { YamlEditor } from "./components/editor";

export default function Editor() {
    let [config, setConfig] = useState("");
    let [editRaw, setEditRaw] = useState(false);

    useEffect(() => {
        getConfig()
            .then((data) => setConfig(data))
    }, []);

    const handleYamlChange = (newYaml: string) => {
        setConfig(newYaml);
    };

    const handleConfigChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log((event.target as HTMLTextAreaElement).value);
        setConfig((event.target as HTMLTextAreaElement).value);
    };

    return (
        <div>
            <h1>Editor</h1>

            <YamlEditor initialYaml={config} onChange={handleYamlChange} />

            <textarea value={config} onChange={handleConfigChange}></textarea>
        </div>
    );
}