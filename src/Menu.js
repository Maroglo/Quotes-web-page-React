import React, { Component } from "react";
import Link from "next/link";

export class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-info navbar-dark">
        <div className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link text-dark large-text">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/places">
                <a className="nav-link text-dark large-text">Places</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
