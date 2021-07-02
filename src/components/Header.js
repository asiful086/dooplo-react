import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/action/userAction";

import LoginModal from "./modal/LoginModal";
import RegisterModal from "./modal/RegisterModal";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  return (
    <>
      <header className="header">
        {/* Top Header Area Start */}
        <section className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="content">
                  <div className="left-content">
                    <ul className="left-list">
                      <li>
                        <p>
                          <i className="fas fa-headset" /> Support
                        </p>
                      </li>
                      <li>
                        <p>
                          <i className="fas fa-envelope" /> info@Dooplo.com
                        </p>
                      </li>
                      <li>
                        <div className="language-selector">
                          <select name="language" className="language">
                            <option value={1}>English</option>
                            <option value={2}>France</option>
                            <option value={3}>Japan</option>
                          </select>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="right-content">
                    <ul className="right-list">
                      <li>
                        <div className="cart-icon tm-dropdown">
                          <i className="fas fa-cart-arrow-down" />
                          <span className="cart-count">10</span>
                          <div className="tm-dropdown-menu">
                            <ul className="list">
                              <li className="list-item">
                                <div className="close">
                                  <i className="fas fa-times" />
                                </div>
                                <ul className="number-list">
                                  <li>24</li>
                                  <li>25</li>
                                  <li>26</li>
                                  <li>27</li>
                                  <li>28</li>
                                </ul>
                              </li>
                              <li className="list-item">
                                <div className="close">
                                  <i className="fas fa-times" />
                                </div>
                                <ul className="number-list">
                                  <li>24</li>
                                  <li>25</li>
                                  <li>26</li>
                                  <li>27</li>
                                  <li>28</li>
                                </ul>
                              </li>
                              <li className="list-item">
                                <div className="close">
                                  <i className="fas fa-times" />
                                </div>
                                <ul className="number-list">
                                  <li>24</li>
                                  <li>25</li>
                                  <li>26</li>
                                  <li>27</li>
                                  <li>28</li>
                                </ul>
                              </li>
                              <li className="list-item">
                                <div className="close">
                                  <i className="fas fa-times" />
                                </div>
                                <ul className="number-list">
                                  <li>24</li>
                                  <li>25</li>
                                  <li>26</li>
                                  <li>27</li>
                                  <li>28</li>
                                </ul>
                              </li>
                            </ul>
                            <a href="cart.html" className="link-btn">
                              Cart Page
                            </a>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="notofication tm-dropdown">
                          <i className="fas fa-bell" />
                          <span className="count">11</span>
                          <div className="tm-dropdown-menu">
                            <ul className="list">
                              <li>
                                <a href="#">
                                  <i className="fas fa-bell" />
                                  Invest Exchange
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-bell" />
                                  Invest Exchange
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-bell" />
                                  Invest Exchange
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-bell" />
                                  Invest Exchange
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fas fa-bell" />
                                  Invest Exchange
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        {!user ? (
                          <button
                            onClick={() => dispatch(logout())}
                            className="headerButton"
                          >
                            sign out
                          </button>
                        ) : (
                          <a
                            href=""
                            className="sign-in"
                            data-toggle="modal"
                            data-target="#login"
                          >
                            <i className="fas fa-user" /> Sign In
                          </a>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Top Header Area End */}
        {/*Main-Menu Area Start here*/}
        <div className="mainmenu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <Link className="navbar-brand" to="/">
                    <img src="assets/images/logo.png" alt />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#main_menu"
                    aria-controls="main_menu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse fixed-height"
                    id="main_menu"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link active dropdown-toggle"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Home
                          <div className="mr-hover-effect" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="index.html">
                              {" "}
                              <i className="fa fa-angle-double-right" />
                              Home 1
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="index2.html">
                              {" "}
                              <i className="fa fa-angle-double-right" /> Home 2
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/play">
                          Play
                          <div className="mr-hover-effect" />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/lottery">
                          lottery
                          <div className="mr-hover-effect" />
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/tournaments">
                          tournaments
                          <div className="mr-hover-effect" />
                        </Link>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Pages
                          <div className="mr-hover-effect" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to="/about">
                              {" "}
                              <i className="fa fa-angle-double-right" />
                              About
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/affiliate">
                              {" "}
                              <i className="fa fa-angle-double-right" />
                              Affiliate
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/awards">
                              {" "}
                              <i className="fa fa-angle-double-right" />
                              Awards
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="bonus">
                              {" "}
                              <i className="fa fa-angle-double-right" />
                              Bonus
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/cart">
                              {" "}
                              <i className="fa fa-angle-double-right" />
                              Cart
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/faq">
                              {" "}
                              <i className="fa fa-angle-double-right" />
                              Faq
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/how-it-work">
                              {" "}
                              <i className="fa fa-angle-double-right" />
                              How It Work
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/terms-and-condition"
                            >
                              {" "}
                              <i className="fa fa-angle-double-right" />
                              Terms &amp; Condition
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="/condition-details"
                            >
                              {" "}
                              <i className="fa fa-angle-double-right" />
                              Condition Details
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/404">
                              {" "}
                              <i className="fa fa-angle-double-right" />
                              404
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Contact
                          <div className="mr-hover-effect" />
                        </Link>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="mybtn1"
                      data-toggle="modal"
                      data-target="#signin"
                    >
                      {" "}
                      Join us
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*Main-Menu Area Start*/}
      </header>

      {/* Back to Top Start */}
      <div className="bottomtotop">
        <i className="fas fa-chevron-right" />
      </div>
      {/* Back to Top End */}
      {/* Login Area Start */}
      <LoginModal />
      {/* Login Area End */}
      {/* SignIn Area Start */}
      <RegisterModal />
      {/* SignIn Area End */}
    </>
  );
};

export default Header;
