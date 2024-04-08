import { render } from 'preact'
import { App } from './app.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

render(<App />, document.getElementById('app')!)
