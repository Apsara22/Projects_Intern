import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Pages/Footer"
export default function Rootlayout(){
    return(
        <>
        <Header/>

        <main className="pt-12 bg-slate-100 min-h-[calc(100vh)]">
            <Outlet/>
        </main>
        <Footer/>

        </>
    )
}