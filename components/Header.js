/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "November 28th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Insert Project Name Here!
 * @Filename: Header.js
 * @Last modified by:   JDure
 * @Last modified time: "November 30th 2017"
 */

/*eslint no-unused-vars: off*/

import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Header extends Component  {
    render() {
        return (
            <h1 className="title">{this.props.text}</h1>
        );
    }
}

Header.propTypes = {
    text: PropTypes.string.isRequired
};
