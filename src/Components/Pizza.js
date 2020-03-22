import React, { Component } from "react";
import PizzaCard from "./Node/PizzaCard";

export default class Pizza extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PizzaCard data={{
                name: 'Royale',
                category: 'fish',
                ingredients: 'Sauce tomate, jambon, mozarella, champignons, olives, oignons',
                price: 8,
            }} />
        );
    }
}