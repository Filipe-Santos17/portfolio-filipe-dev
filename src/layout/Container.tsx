import { TypeChangeModalState } from "@/types";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Container({ changeModal }: TypeChangeModalState) {
  return (
    <div className="max-w-80 mx-auto dark:bg-darkNeutral lg:max-w-5xl md:max-w-2xl">
      <Header changeModal={changeModal} />
      <Outlet />
    </div>
  )
}
