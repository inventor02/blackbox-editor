import { ChangeEvent } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import { getConfig, postConfig } from "../api";
import { Button, ButtonGroup, Form } from "react-bootstrap";

export function ConfigPlainText() {
    let [config, setConfig] = useState("");
    let [alert, setAlert] = useState("");

    useEffect(() => {
        getConfig()
            .then((data) => setConfig(data));
    }, []);

    const handleConfigChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log((event.target as HTMLTextAreaElement).value);
        setConfig((event.target as HTMLTextAreaElement).value);
    };

    const save = () => {
        postConfig(config)
            .then(() => setAlert("Saved!"));
    };

    return (
        <div>
            <h1>Editor</h1>

            { alert.length > 0 && (<div className="alert alert-success">{alert}</div>) }

            <Form.Control as="textarea" rows={3} value={config} onChange={handleConfigChange} />

            <br />

            <ButtonGroup>
                <Button className="btn-primary" onClick={save}>Save</Button>
            </ButtonGroup>
        </div>
    );
}