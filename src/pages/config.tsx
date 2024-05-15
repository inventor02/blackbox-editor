import { useEffect, useState } from "preact/hooks";
import { getConfig, postConfig } from "../api";
import { YamlEditor } from "../components/editor";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "wouter";

export function Config() {
    let [config, setConfig] = useState("");
    let [alert, setAlert] = useState("");

    useEffect(() => {
        getConfig()
            .then((data) => setConfig(data));
    }, []);

    const handleYamlChange = (newYaml: string) => {
        setConfig(newYaml);
    };

    const save = () => {
        postConfig(config)
            .then(() => setAlert("Saved!"));
    };

    return (
        <div>
            <h1>Editor</h1>
            
            { alert.length > 0 && (<div className="alert alert-success">{alert}</div>) }

            <YamlEditor initialYaml={config} onChange={handleYamlChange}/>

            <ButtonGroup>
                <Button className="btn-primary" onClick={save}>Save</Button>
                <Link href="/config/plaintext" className="btn btn-secondary">Edit Plain Text</Link>
            </ButtonGroup>
        </div>
    );
}