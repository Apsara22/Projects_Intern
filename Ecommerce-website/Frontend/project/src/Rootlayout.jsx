import { Outlet } from "react-router-dom"
import Header from "./components/Header"
export default function Rootlayout(){
    return(
        <>
        <Header/>

        <main className="pt-12 bg-slate-100 min-h-[calc(100vh)]">
            <Outlet/>
        </main>

        </>
    )
}