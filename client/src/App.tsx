import './App.css';
import {Container} from "./components";
import {BrowserRouter} from "react-router-dom";
import Router from "./routes/router";

function App() {


  return (
        <Container>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Container>
  );
}

export default App;
