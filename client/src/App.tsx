import './App.css';
import {Container} from "./components";
import {BrowserRouter} from "react-router-dom";
import Router from "./routes/router";

function App() {


  return (
            <BrowserRouter>
                <Container>
                <Router />
                </Container>
            </BrowserRouter>
  );
}

export default App;
