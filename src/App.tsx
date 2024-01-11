import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from "./layout/Container"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container/>}>
          <Route Component={Home} index/>
          <Route Component={Projects} path="projects/"/>
          <Route Component={About} path="about/"/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
