import "./app.css";
import { Router, Route, Link } from "preact-router";
import { Config } from "./pages/config";
import { Log } from "./pages/log";
import { ButtonGroup, Col, Row } from "react-bootstrap";
import { killAll } from "./api";

function Home() {
  const disableWebctl = () => {
    killAll();
  };

  return (
    <>
      <h5 className="mb-0">Welcome to</h5>
      <h2>&nbsp;&nbsp;&nbsp; webctl</h2>
      <p>Select a page above to navigate to.</p>
      <p>
        You can also stop webctl and disable the onboard WiFi network. You will
        need to restart the device if you want to re-enable it.
      </p>
      <div className="d-flex justify-content-center">
        <a className="btn btn-danger" onClick={disableWebctl}>
          STOP WEBCTL AND WIFI SERVICES
        </a>
      </div>
    </>
  );
}

export function App() {
  return (
    <>
      <div className="container">
        <Row className="mt-4">
          <Col>
            <h1>BlackBox web control</h1>
          </Col>
          <Col xs="auto">
            <nav>
              <ButtonGroup>
                <Link href="/" className="btn btn-primary">
                  Home
                </Link>
                <Link href="/config" className="btn btn-primary">
                  Configuration
                </Link>
                <Link href="/log" className="btn btn-primary">
                  Data Management
                </Link>
              </ButtonGroup>
            </nav>
          </Col>
        </Row>

        <hr />

        <Router>
          <Route path="/" component={Home} />
          <Route path="/config" component={Config} />
          <Route path="/log" component={Log} />
        </Router>
      </div>
    </>
  );
}
