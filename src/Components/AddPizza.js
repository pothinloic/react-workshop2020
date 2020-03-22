import React, {Component} from "react";
import PizzaForm from "./Node/Form/PizzaForm";

export default class AddPizza extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div>
               <PizzaForm/>
           </div>
        );
    }
}