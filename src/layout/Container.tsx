import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Container() {
  return (
    <div className="max-w-5xl mx-auto dark:bg-darkNeutral">
      <Header/>
      <Outlet/>
    </div>
  )
}
