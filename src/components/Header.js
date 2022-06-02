import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
    activeLink = {
      color: 'blue',
      border: 'blue 3px solid',
    }

    nonActiveLink = {
      color: 'black',
      textDecoration: 'none',
    }

    render() {
      return (
        <header>
          <h1 className="header-title">Math magician</h1>
          <nav>
            <Link
              to={this.props.anchor[1].link}
              style={this.props.anchor[1].active ? this.activeLink : this.nonActiveLink}
            >
              Home
            </Link>
            <Link
              to={this.props.anchor[0].link}
              style={this.props.anchor[0].active ? this.activeLink : this.nonActiveLink}
            >
              Calculator
            </Link>
            <Link
              to={this.props.anchor[2].link}
              style={this.props.anchor[2].active ? this.activeLink : this.nonActiveLink}
            >
              Quote
            </Link>
          </nav>
        </header>
      );
    }
}

export default Header;
