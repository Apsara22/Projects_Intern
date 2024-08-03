import "../components/css/explore.css"
import { menu_list } from "../assets/Images/assets"

const Explore = ({category,setCategory }) =>{

    return(
        <div className="explore-item" id="explore-item">
            <h1 className="text-3xl">Our Products Items</h1>
            <p className="max-w-[60%] columns-[#808080]">Organic Foods are those which are prepared on the farm through some organic process. All of the foods prepared in the field are Organic Food. 
                These foods are prepared through a natural process and contain various nutrients in a large amount and are healthy for us.</p>
            <div className="explore-item-list">
                {menu_list.map ((item, index) =>{
                    return(
                        <div onClick={() =>setCategory(prev => prev=== item.menu_name ? "All" : item.menu_name)} key={index} className="explore-item-list-li">
                            <img  className={category === item.menu_name ? "active" : ""} src={item.menu_image}  />
                            <p>{item.menu_name}</p>

                        </div>
                    )
                })}
            </div>
            <hr/>

        </div>
    )
}
export default Explore;