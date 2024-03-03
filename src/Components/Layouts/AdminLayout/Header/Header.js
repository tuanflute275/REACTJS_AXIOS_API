import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <Link to={"/"} class="navbar-brand" >Navbar</Link>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">User Page <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/admin">Admin Page</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/category">Category</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/admin/product">Product</Link>
                        </li>

                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header