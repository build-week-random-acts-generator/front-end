import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('token')
        this.props.history.push("/")
    }

    render() {
        const loginRegLink = (
            <ul className ="navbar-nav">
                <li className = "nav-item">
                    <Link to = "/login" className = "nav-link">
                        Login
                    </Link>
                </li>
                <li className = "nav-item">
                    <Link to = "/register" className = "nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )
    }
}