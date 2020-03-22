import React, {Component} from "react";
import {
    Navbar,
    Nav,
} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faList, faPlus} from "@fortawesome/free-solid-svg-icons";
import navbar_icon from '../../../public/assets/icons/navbar_icon.png';

export default class MyNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"><img src={navbar_icon}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/pizzas"><FontAwesomeIcon icon={faList} /> Liste des pizzas</Nav.Link>
                        <Nav.Link href="/new-pizza"><FontAwesomeIcon icon={faPlus} /> Ajouter une pizza</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}