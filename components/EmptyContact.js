/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "November 29th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Midterm
 * @Filename: EmptyContact.js
 * @Last modified by:   JDure
 * @Last modified time: "December 4th 2017"
 */


/*eslint no-unused-vars: off*/

import React, {Component} from "react";
import PropTypes from "prop-types";
import {contacts} from "../data/contacts";

export default class EmptyContact extends Component {
    render() {
        return (
            <div className="card">
                <h4 className="filler">select a contact to view</h4>
            </div>
        );
    }
}
