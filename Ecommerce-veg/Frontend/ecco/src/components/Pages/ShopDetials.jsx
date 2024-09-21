import Explore from "../../ExploreItem/Explore";
import { useState } from "react";
export default function ShopDetials() {
    const[category, setCategory] = useState("All")

  return (
    <div>
      <Explore category={category} setCategory={setCategory} />
    </div>
  );
}
