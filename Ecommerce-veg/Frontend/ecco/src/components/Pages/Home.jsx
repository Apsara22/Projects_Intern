import { useState } from "react";
import Explore from "../../ExploreItem/Explore";
import FrontPage from "./FrontPage";
import FoodDisplay from "../../ExploreItem/FoodDisplay";
import AppDownload from "./AppDownload";

export default function Home(){

    const[category, setCategory] = useState("All")
    return(


        <div>
            <FrontPage/>
            <Explore category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <AppDownload/>
           

        </div>
        

    )
}