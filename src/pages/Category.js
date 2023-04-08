import { useMatch } from "react-router";

export default function Category() {
    const {params} = useMatch("/categories/:slug");

    const categories = [
        {id:1, name: "In containers", slug: "in-containers"},
        {id:2, name: "In cones", slug: "in-cones"},
        {id:3, name: "Classic", slug: "classic"},
        {id:4, name: "Fruity", slug: "fruity"},
    ];

    const category = categories.find((category) => category.slug === params.slug);
    return (
        <div className="Category">
        <h1>{category.name}</h1>
        </div>
    )
}