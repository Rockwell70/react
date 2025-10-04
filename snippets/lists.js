//npm start to run
import { useState} from "react";

const products = [
    {title: 'cabbage', isFrukt: false,  id: 1},
    {title: 'garlic', isFrukt: false, id: 2},
    {title: 'eple',isFrukt: true, id: 3}
];

const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>

);

return (
    <ul>{listItems}</ul>
)

export default function ShoppingList() {
    const listItems = products.map(product =>
        <li
            key={product.id}
            style = {{
                color: product.isFrukt ? 'blue' : 'darkgreen'
            }}

        >
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    )
}