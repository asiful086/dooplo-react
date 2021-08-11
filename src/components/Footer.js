import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="subscribe-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="subscribe-box">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="heading-area">
                          <h5 className="sub-title">subscribe to winnerpool</h5>
                          <h4 className="title">To Get Exclusive Benefits</h4>
                        </div>
                      </div>
                      <div className="col-lg-3 col-4 d-flex align-self-center">
                        <div className="icon">
                          <img
                            src="../../assets/images/mail-box.png"
                            alt="logo"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-8 d-flex align-self-center">
                        <div className="form-area">
                          <input type="text" placeholder="Your Email Address" />
                        </div>
                      </div>
                      <div className="col-lg-3 d-flex align-self-center">
                        <div className="button-area">
                          <button className="mybtn1" type="submit">
                            Subscribe
                            <span>
                              <i className="fas fa-paper-plane" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget info-link-widget">
                <h4 className="title">About</h4>
                <ul className="link-list">
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" /> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" /> Latest Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" /> Authenticity
                      Guarantee
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" /> Customer
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" /> Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget info-link-widget">
                <h4 className="title">My Account</h4>
                <ul className="link-list">
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" /> Manage Your
                      Account
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" /> How to Deposit
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" /> How to
                      Withdraw
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" /> Account
                      Varification
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" /> Safety &amp;
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" /> Membership
                      Level
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget info-link-widget">
                <h4 className="title">help center</h4>
                <ul className="link-list">
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" />
                      Help centre
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" />
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" />
                      Quick Start Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" />
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" />
                      Borrow
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" />
                      Lend
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget info-link-widget">
                <h4 className="title">Legal Info</h4>
                <ul className="link-list">
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" />
                      Risk Warnings
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" />
                      Privacy Notice
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" />
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" />
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" />
                      Become Affiliate
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fas fa-angle-double-right" />
                      Complaints Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="left-area">
                  <p>
                    Copyright © 2019.All Rights Reserved By{" "}
                    <Link to="#">winnerpool</Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="copright-area-links">
                  <li>
                    <Link to="#">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Gamble</Link>
                  </li>
                  <li>
                    <Link to="#">Aware</Link>
                  </li>
                  <li>
                    <Link to="#">Help Cente</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
