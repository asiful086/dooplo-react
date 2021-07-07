import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [state, setState] = useState({
    errorMessage: "",
    successMessage: "",
    contests: [],
  });

  useEffect(() => {
    // fetching contest
    axios.get("https://easylifeyes.com/lottery/get_contests").then((res) => {
      setState({
        ...state,
        contests: res.data.data,
      });
    });
  }, []);
  return (
    <>
      {/* preloader area start */}
      {/* <div className="preloader" id="preloader">
        <div className="loader loader-1">
          <div className="loader-outter" />
          <div className="loader-inner" />
        </div>
      </div> */}
      {/* preloader area end */}
      {/* Header Area Start  */}

      {/* Header Area End  */}
      {/* Hero Area Start */}
      <div className="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 d-flex align-self-center">
              <div className="left-content">
                <div className="content">
                  <h5 className="subtitle">New Crypto Game</h5>
                  <h1 className="title">PLay To WIN</h1>
                  <p className="text">
                    Play, Invest,Exchange and Join the Contest with high rewards
                    at Dooplo!
                  </p>
                  <div className="links">
                    <a href="#" className="mybtn1 link1">
                      Get Started Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img2 d-block d-md-none">
                <img src="assets/images/heroarea.png" alt="random" />
              </div>
              <div className="hero-img d-none d-md-block">
                <img
                  className="img-fluid full-image"
                  src="assets/images/heroarea.png"
                  alt="random"
                />
                <img
                  className="shape phone"
                  src="assets/images/h-shapes/phone.png"
                  alt="random"
                />
                <img
                  className="shape man"
                  src="assets/images/h-shapes/man222.png"
                  alt="random"
                />
                <img
                  className="shape ripple"
                  src="assets/images/h-shapes/ripple.png"
                  alt="random"
                />
                <img
                  className="shape ripple2"
                  src="assets/images/h-shapes/ripple1.png"
                  alt="random"
                />
                <img
                  className="shape bitcoin1"
                  src="assets/images/h-shapes/bitcoin1.png"
                  alt="random"
                />
                <img
                  className="shape bitcoin2"
                  src="assets/images/h-shapes/bitcoin2.png"
                  alt="random"
                />
                <img
                  className="shape shape-icon"
                  src="assets/images/h-shapes/shape.png"
                  alt="random"
                />
                <img
                  className="shape award-bg"
                  src="assets/images/h-shapes/award/bg.png"
                  alt="random"
                />
                <img
                  className="shape award"
                  src="assets/images/h-shapes/award/award.png"
                  alt="random"
                />
                <img
                  className="shape gift-bg"
                  src="assets/images/h-shapes/giftbox/bg.png"
                  alt="random"
                />
                <img
                  className="shape gift"
                  src="assets/images/h-shapes/giftbox/gift.png"
                  alt="random"
                />
                <img
                  className="shape shield-bg"
                  src="assets/images/h-shapes/shield/bg.png"
                  alt="random"
                />
                <img
                  className="shape shield"
                  src="assets/images/h-shapes/shield/shield.png"
                  alt="random"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Area End */}
      {/* Featured Game Area Start */}
      <section className="featured-game">
        {/* Features Area Start */}
        <div className="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="feature-box">
                  <div className="feature-box-inner">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="single-feature">
                          <div className="icon one">
                            <img
                              src="assets/images/feature/icon1.png"
                              alt="random"
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">Exclusive Offer</h4>
                            <a href="#" className="link">
                              read more <i className="fas fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-feature">
                          <div className="icon two">
                            <img
                              src="assets/images/feature/icon2.png"
                              alt="random"
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">Provably Fair</h4>
                            <a href="#" className="link">
                              read more <i className="fas fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-feature">
                          <div className="icon three">
                            <img
                              src="assets/images/feature/icon3.png"
                              alt="random"
                            />
                          </div>
                          <div className="content">
                            <h4 className="title">24/7 Support</h4>
                            <a href="#" className="link">
                              read more <i className="fas fa-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* this is another section for design */}
        <div className="features mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="section-heading">
                  <h5 className="subtitle">Try to check out our</h5>
                  <h2 className="title">featured games</h2>
                  <p className="text">
                    Check out our latest featured game! To meet today's
                    challenges &amp; earn cryptocurrency. Top 10 players receive
                    prizes every hour!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="feature-box">
                  <div className="feature-box-inner">
                    <div className="row">
                      {state.contests &&
                        state.contests.map((contest) => (
                          <div
                            key={contest.id}
                            className="col-lg-4 col-md-6 mb-5"
                          >
                            <div className="single-feature position-relative">
                              <div className="icon one">
                                <img
                                  src="assets/images/feature/icon1.png"
                                  alt="random"
                                />
                              </div>
                              <div className="content">
                                <h4 className="title">{contest.contest}</h4>
                                <Link
                                  to={`/contest/${contest.id}`}
                                  className="contestBtn  position-absolute text-white"
                                >
                                  PLay NoW !
                                </Link>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features Area End */}
        {/* <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-heading">
                <h5 className="subtitle">Try to check out our</h5>
                <h2 className="title">featured games</h2>
                <p className="text">
                  Check out our latest featured game! To meet today's challenges
                  &amp; earn cryptocurrency. Top 10 players receive prizes every
                  hour!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {state.contests &&
              state.contests.map((contest) => (
                <div className="col-lg-4 col-md-6">
                  <div className="single-feature">
                    <div className="icon one">
                      <img src="assets/images/feature/icon1.png" alt="random" />
                    </div>
                    <div className="content">
                      <h4 className="title">Exclusive Offer</h4>
                      <a href="#" className="link">
                        read more <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            <div className="item">
              <div className="single-game">
                <img src="assets/images/game/icon2.png" alt="random" />
                <a href="#" className="mybtn2">
                  PLay NoW !
                </a>
              </div>
            </div>
            <div className="item">
              <div className="single-game">
                <img src="assets/images/game/icon3.png" alt="random" />
                <a href="#" className="mybtn2">
                  PLay NoW !
                </a>
              </div>
            </div>
            <div className="item">
              <div className="single-game">
                <img src="assets/images/game/icon2.png" alt="random" />
                <a href="#" className="mybtn2">
                  PLay NoW !
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* Featured Game Area	End */}
      {/* Latest Activities Area Start */}
      <section className="activities">
        <img
          className="shape shape1"
          src="assets/images/people/shape1.png"
          alt="random"
        />
        <img
          className="shape shape2"
          src="assets/images/people/shape2.png"
          alt="random"
        />
        <img
          className="shape shape3"
          src="assets/images/people/shape3.png"
          alt="random"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-heading">
                <h5 className="subtitle">The Smarter Way</h5>
                <h2 className="title">Lend and Borrow</h2>
                <p className="text">
                  The World's First Crypto Lending Marketplace and Affordable
                  and competitive interest rates
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-menu-area">
                <ul className="nav nav-lend mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="pills-all-bets-tab"
                      data-toggle="pill"
                      href="#pills-all-bets"
                      role="tab"
                      aria-controls="pills-all-bets"
                      aria-selected="true"
                    >
                      All bets
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-my-bets-tab"
                      data-toggle="pill"
                      href="#pills-my-bets"
                      role="tab"
                      aria-controls="pills-my-bets"
                      aria-selected="false"
                    >
                      my bets
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-my-jackpots-tab"
                      data-toggle="pill"
                      href="#pills-my-jackpots"
                      role="tab"
                      aria-controls="pills-my-jackpots"
                      aria-selected="false"
                    >
                      jackpots
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-all-bets"
                  role="tabpanel"
                  aria-labelledby="pills-all-bets-tab"
                >
                  <div className="responsive-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">USER</th>
                          <th scope="col">BET ID</th>
                          <th scope="col">BET AMOUNT</th>
                          <th scope="col">CHANCE</th>
                          <th scope="col">GAME</th>
                          <th scope="col">PROFIT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p1.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon1.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon1.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p2.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon2.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon2.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p3.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon3.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon3.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p4.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon4.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon4.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p5.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon5.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon5.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p6.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon1.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon1.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p1.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon2.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon2.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p2.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon3.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon3.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p3.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon4.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon4.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p4.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon5.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon5.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-my-bets"
                  role="tabpanel"
                  aria-labelledby="pills-my-bets-tab"
                >
                  <div className="responsive-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">USER</th>
                          <th scope="col">BET ID</th>
                          <th scope="col">BET AMOUNT</th>
                          <th scope="col">CHANCE</th>
                          <th scope="col">GAME</th>
                          <th scope="col">PROFIT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p1.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon1.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon1.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p2.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon2.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon2.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p3.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon3.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon3.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p4.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon4.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon4.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p5.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon5.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon5.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p6.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon1.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon1.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p1.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon2.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon2.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p2.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon3.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon3.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p3.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon4.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon4.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p4.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon5.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon5.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-my-jackpots"
                  role="tabpanel"
                  aria-labelledby="pills-my-jackpots-tab"
                >
                  <div className="responsive-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">USER</th>
                          <th scope="col">BET ID</th>
                          <th scope="col">BET AMOUNT</th>
                          <th scope="col">CHANCE</th>
                          <th scope="col">GAME</th>
                          <th scope="col">PROFIT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p1.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon1.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon1.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p2.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon2.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon2.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p3.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon3.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon3.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p4.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon4.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon4.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p5.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon5.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon5.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p6.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon1.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon1.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p1.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon2.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon2.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p2.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon3.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon3.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p3.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon4.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon4.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="assets/images/people/p4.png"
                              alt="random"
                            />
                            Tom Bass
                          </td>
                          <td>b799b8724b</td>
                          <td>
                            <img src="assets/images/icon5.png" alt="random" />
                            0.00000051
                          </td>
                          <td>70%</td>
                          <td>Dice</td>
                          <td>
                            <img src="assets/images/icon5.png" alt="random" />
                            0.00000051
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fun fact Area Start */}
        <div className="funfact">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-fun">
                  <img src="assets/images/funfact/icon1.png" alt="random" />
                  <div className="count-area">
                    <div className="count">93K</div>
                  </div>
                  <p>Players</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-fun">
                  <img src="assets/images/funfact/icon2.png" alt="random" />
                  <div className="count-area">
                    <div className="count">99+</div>
                  </div>
                  <p>Games</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-fun">
                  <img src="assets/images/funfact/icon3.png" alt="random" />
                  <div className="count-area">
                    <div className="count">70+</div>
                  </div>
                  <p>Winners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fun fact Area End */}
      </section>
      {/* Latest Activities Area End */}
      {/* Get Start Area Start */}
      <section className="get-start">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex align-self-center">
              <div className="left-area">
                <div className="section-heading">
                  <h5 className="subtitle">every day lots of wins</h5>
                  <h2 className="title ">be one of them</h2>
                  <p className="text">
                    Get started in less than 5 min - no credit card
                    required.Gain early access to Dooplo and experience crypto
                    like never before.
                  </p>
                  <a href="#" className="mybtn1">
                    Play Now!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="right-image">
                <img src="assets/images/get-start.png" alt="random" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get Start Area End */}
      {/* Recent Winners Area Start */}
      <section className="recent-winners">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-heading">
                <h5 className="subtitle">Try to Check out our</h5>
                <h2 className="title">Recent Winners</h2>
                <p className="text">
                  We update our site regularly; more and more winners are added
                  every day! To locate the most recent winner's information
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-winer">
                <div className="top-area">
                  <div className="left">
                    <h4 className="name">Leroy Roy</h4>
                    <p className="date">01.08.2019</p>
                  </div>
                  <div className="right">
                    <p className="id">#5747e75482</p>
                  </div>
                </div>
                <div className="bottom-area">
                  <div className="left">0.099 ETH</div>
                  <div className="right">
                    <img src="assets/images/icon2.png" alt="random" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-winer">
                <div className="top-area">
                  <div className="left">
                    <h4 className="name">Jeff Mack</h4>
                    <p className="date">01.08.2019</p>
                  </div>
                  <div className="right">
                    <p className="id">#5747e75482</p>
                  </div>
                </div>
                <div className="bottom-area">
                  <div className="left">0.099 ETH</div>
                  <div className="right">
                    <img src="assets/images/icon2.png" alt="random" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-winer">
                <div className="top-area">
                  <div className="left">
                    <h4 className="name">Neal Morris</h4>
                    <p className="date">01.08.2019</p>
                  </div>
                  <div className="right">
                    <p className="id">#5747e75482</p>
                  </div>
                </div>
                <div className="bottom-area">
                  <div className="left">0.099 ETH</div>
                  <div className="right">
                    <img src="assets/images/icon2.png" alt="random" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-xl-center">
              <a className="mybtn2" href="#">
                View All{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Recent Winners Area End */}
      {/* Footer Area Start */}

      {/* Footer Area End */}
      {/* Back to Top Start */}

      {/* Back to Top End */}
      {/* Login Area Start */}
      {/* Login Area End */}
      {/* SignIn Area Start */}
      {/* SignIn Area End */}
    </>
  );
};

export default Home;
