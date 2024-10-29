import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
   <Router>
    <Routes>
      {/* <Route path ="/" element={"Hello world"}/> */}
      <Route path="/"element={<Home/>}/>
      <Route path="/About"element={<About/>}/>
    </Routes>
   </Router>
  )
}

export default App
