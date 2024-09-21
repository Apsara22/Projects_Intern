import FoodDisplay from "../../ExploreItem/FoodDisplay"
import { useState } from "react"
export default function Shop(){
    const[category, setCategory] = useState("All")

    return(
        <div>
            <FoodDisplay category={category}/>


        </div>
    )
}