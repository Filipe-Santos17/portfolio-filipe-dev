import { BrowserRouter, Route, Routes } from "react-router-dom"
import Container from "./layout/Container"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Modal from "./components/Modal"
import { useState } from "react"

export default function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container changeModal={setShowModal}/>}>
          <Route Component={Home} index />
          <Route Component={Projects} path="projects/" />
          <Route Component={About} path="about/" />
        </Route>
      </Routes>
      {showModal && <Modal changeModal={setShowModal} />}
    </BrowserRouter>
  )
}
