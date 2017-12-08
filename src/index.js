/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "November 28th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Midterm Assignement
 * @Filename: index.js
 * @Last modified by:   JDure
 * @Last modified time: "December 4th 2017"
 */

/*eslint no-unused-vars: off*/


require("./main.scss");

import React, {Component} from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import ContactDetails from "../components/ContactDetails";
import EmptyContact   from "../components/EmptyContact";
import ContactListItem from "../components/ContactListItem";
import {contacts} from "../data/contacts";


let component = <div>Empty</div>;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {location: ""};
        this.component = null;
        this.handleLocationChange = this.handleLocationChange.bind(this);
    }
    componentDidMount() {
        window.addEventListener("hashchange", this.handleLocationChange);
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.handleLocationChange);
    }
    handleLocationChange(){
        this.setState({location: location.hash});
        this.handleContactDetail();
    }
    handleContactDetail(){
        let splittedUrl = this.state.location.replace(/^#\/?|\/$/g, "").split("/");

        switch(splittedUrl[0]) {
        case "contacts":
            if (parseInt(splittedUrl[1]) < 1000 || parseInt(splittedUrl[1]) > contacts.length+1000){
                component = <EmptyContact/>;
            } else {
                let prop = contacts.find((i) => i.id === parseInt(splittedUrl[1]));
                component = <ContactDetails contact={prop} handleEmptyContact={this.handleEmptyContact}/>;
            }
            break;
        default:
            component = <EmptyContact/>;
        }
    }

    handleEmptyContact(){
        history.replaceState(null, null, location.origin);
        this.setState({location: location.orgin});
    }

    render() {
        this.handleContactDetail();
        return (
            <div id="myContactList">
                <Header text="Contact List"/>
                <ContactListItem/>
                {component}
            </div>);
    }
}

ReactDOM.render(<HomePage/>, document.getElementById("react-app"));
