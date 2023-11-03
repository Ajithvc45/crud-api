import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./containers/Signin";
import Todo from "./containers/Todo/Todo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/signin"} element={<Signin />} />
        <Route exact path={"/todo"} element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
