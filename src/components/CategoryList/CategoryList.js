import { NavLink } from "react-router-dom";

export default function CategoryList(props) {
    const categories = [
        {id:1, name: "In containers", slug: "in-containers"},
        {id:2, name: "In cones", slug: "in-cones"},
        {id:3, name: "Classic", slug: "classic"},
        {id:4, name: "Fruity", slug: "fruity"},
    ]
    const output = categories.map((category) => (
        <li key={category.id}>
            <NavLink to={"/categories/" + category.slug}>
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