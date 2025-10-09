import "./module.PersonalInfo.css"

// import { motion } from "framer-motion"

import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "../../shared/grabbableItems/Item";

const initialItems = [
    "Tokyo, Japan 🗾", 
    "Software Engineer 💻", 
    "Application Developer 💡",
    "24 Years Old 🍰"
];

const PersonalInfo = () => {
    const [items, setItems] = useState(initialItems);

    return (
        <div className="personal-information-section">
            <div className="info-container personal-information-container">
                <h2>Personal Information &#128173;</h2>
                <Reorder.Group axis="y" onReorder={setItems} values={items}>
                    {items.map((item) => (
                       <Item key={item} item={item} />
                    ))}
                </Reorder.Group>
            </div>
        </div>
    )
}

export default PersonalInfo