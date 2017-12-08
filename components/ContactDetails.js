/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 1st 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Midterm JSX
 * @Filename: ContactDetails.js
 * @Last modified by:   JDure
 * @Last modified time: "December 4th 2017"
 */

/*eslint no-unused-vars: off*/

import React, {Component} from "react";
import PropTypes from "prop-types";
import ContactListItem from "../components/ContactListItem";
import {contacts} from "../data/contacts";

function getAge(dateString){
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }
    return age;
}


export default class ContactDetails extends Component {
    render() {
        let contact = this.props.contact;
        return (
            <div className="card">
                <div className="container">
                    <img src={contact.picture.large} alt={contact.name.first}></img>
                    <h3 className="name">{contact.name.first} {contact.name.last}</h3>
                    <p className="age">Age: {getAge(contact.dob)}</p>
                    <p className="dob">DOB: {contact.dob}</p>
                    <p className="email">Email: {contact.email}</p>
                    <p className="cell">Cellphone: {contact.cell}</p>
                    <p className="location">Location: {contact.location.city}, {contact.location.state}</p>
                    <p className="postal">Postal Code: {contact.location.postcode}</p>
                </div>
            </div>

        );
    }
}
