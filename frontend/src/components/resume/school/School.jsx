// Image imports
// import bu_emblem from "../../../assets/pfp/bu_emblem.png"
import bu_emblem_circle from "../../../assets/pfp/bu_emblem_circle.png"


// CSS
import "./module.School.css"

import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "../../shared/grabbableItems/Item";

const initialItems = [
    "Full Stack Development", 
    "Software Engineering", 
    "Fundamentals of Web Development", 
    "Natural Language Processing",
    "Data Structures & Algorithms",
];

const School = () => {
    const [items, setItems] = useState(initialItems);

    return (
        <div className="school-section">
            <div className="school-container">
                <div className="school-info-container">
                    <div className="school-info-desc">
                        <h1>Boston University</h1>
                        <h1>Computer Science</h1>
                        <p>Bachelor of Arts - May 2024</p>
                    </div>
                    <div className="bu-img-container">

                        <img src={bu_emblem_circle} alt="image of boston university's emblem" className="bu-image" />
                    </div>
                </div>

                <div className="related-coursework">
                    <h2>Related Coursework &#128218;</h2>
                    <Reorder.Group axis="y" onReorder={setItems} values={items}>
                        {items.map((item) => (
                            <Item key={item} item={item} />
                        ))}
                    </Reorder.Group>
                </div>
            </div>
        </div>
    )
}

export default School