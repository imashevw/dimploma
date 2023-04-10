import { getDocs } from "firebase/firestore/lite";
import { NavLink } from "react-router-dom";
import { categories } from "../../firebase";
import { useEffect, useState } from "react";

export default function CategoryList() {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {  
    getDocs(categories).then((snapshot) => {
        const newCategoryList = [];
        snapshot.forEach(doc => {
            const category = doc.data();
            category.id = doc.id;

            newCategoryList.push(category);
 
        })
        setCategoryList(newCategoryList);
    });
    }, []);


    const output = categoryList.map((category) => (
        <li key={category.id}>
            <NavLink to={`/categories/${category.slug}`}>
                {category.name}
            </NavLink>
        </li>
    ));
    return (
        <div className="CategoryList">
            <h3>Categories</h3>
            <ul>{output}</ul>
        </div>
    )
}