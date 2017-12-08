/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "November 29th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Midterm
 * @Filename: ContactListItem.js
 * @Last modified by:   JDure
 * @Last modified time: "December 4th 2017"
 */

/*eslint no-unused-vars: off*/

import React, {Component} from "react";
import PropTypes from "prop-types";
import {contacts} from "../data/contacts";

let listItems;

export default class ContactListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        listItems = contacts.map((contact) => {
            return(<li key={contact.key}>
                <a href={"#contacts/" +  contact.id}>
                    <img src={contact.picture.medium}/>
                    <p className="name"><b>{contact.name.first} {contact.name.last}</b></p>
                </a>
            </li>
            );
        });
        return (
            <ul>{listItems}</ul>
        );
    }
}
