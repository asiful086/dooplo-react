// import Footer from "../components/Footer";
// import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [state, setState] = useState({
    errorMessage: "",
    successMessage: "",
    contests: [],
  });

  const [faqs, setFaqs] = useState({
    contest: false,
    winner: false,
  });

  useEffect(() => {
    // fetching contest
    axios.get("https://redwinservices.in/lottery/get_contests").then((res) => {
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
                  {/* <h5 className="subtitle">New Crypto Game</h5> */}
                  <h1 className="title">PLay To WIN</h1>
                  <p className="text">
                    Play, Invest,Exchange and Join the Contest with high rewards
                    at winnerpool!
                  </p>
                  <div className="links">
                    <Link href="#" className="mybtn1 link1">
                      Get Started Now!
                    </Link>
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
                            <Link href="#" className="link">
                              read more <i className="fas fa-arrow-right" />
                            </Link>
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
                            <Link href="#" className="link">
                              read more <i className="fas fa-arrow-right" />
                            </Link>
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
                            <Link href="#" className="link">
                              read more <i className="fas fa-arrow-right" />
                            </Link>
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
                  <h2 className="title">featured contests</h2>
                  <p className="text">
                    Check out our latest contest! To meet today's challenges.
                    Receive prizes every hour!
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
                      <Link href="#" className="link">
                        read more <i className="fas fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            <div className="item">
              <div className="single-game">
                <img src="assets/images/game/icon2.png" alt="random" />
                <Link href="#" className="mybtn2">
                  PLay NoW !
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="single-game">
                <img src="assets/images/game/icon3.png" alt="random" />
                <Link href="#" className="mybtn2">
                  PLay NoW !
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="single-game">
                <img src="assets/images/game/icon2.png" alt="random" />
                <Link href="#" className="mybtn2">
                  PLay NoW !
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* Featured Game Area	End */}
      {/* Latest Activities Area Start */}

      {/* Latest Activities Area End */}
      {/* Get Start Area Start */}
      <section className="get-start">
        <div className="container">
          <div className="section-heading">
            <h2 className="title">FAQ</h2>
            <h5 className="subtitle">FREQUENTLY ASKED QUESTIONS:</h5>
            {/* <p className="text">
              We update our site regularly; more and more winners are added
              every day! To locate the most recent winner's information
            </p> */}
          </div>
          <div className="faq">
            <div className="each-faq login-faq my-1 p-3 w-100 rounded d-flex align-items-center">
              <h5 className="heading">
                {" "}
                Every customer need to signup with winnerpool.online{" "}
              </h5>
              <div className="ml-auto"></div>
            </div>

            <div
              onClick={() =>
                setFaqs({
                  ...faqs,
                  winner: false,
                  contest: !faqs.contest,
                })
              }
              className="each-faq contest-faq my-3 p-3 w-100 rounded d-flex align-items-center"
            >
              <h5 className="heading">Contest Timings </h5>
              <div className="ml-auto">
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width=""
                  height="35"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d={`${
                      faqs.contest
                        ? "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                        : "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    } `}
                  />
                </svg>
              </div>
            </div>
            {faqs.contest && (
              <div>
                <div className="alert " role="alert">
                  <p className="m-0">Mumbai Club - 10:30 am To 12:30 pm</p>
                </div>
                <div className="alert " role="alert">
                  <p className="m-0">Delhi Club - 12:30 am To 02:30 pm</p>
                </div>
                <div className="alert " role="alert">
                  <p className="m-0">Kolkata Club - 02:30 pm To 04:30 pm</p>
                </div>
                <div className="alert " role="alert">
                  <p className="m-0">Hyderabad - 04:30 pm To 06:30 pm</p>
                </div>
                <div className="alert " role="alert">
                  <p className="m-0">Goa Club - 06:30 pm To 08:30 pm</p>
                </div>
                <div className="alert " role="alert">
                  <p className="m-0">Chennai Club - 08:30 pm To 10:30 pm</p>
                </div>
              </div>
            )}

            <div
              onClick={() =>
                setFaqs({
                  ...faqs,
                  contest: false,
                  winner: !faqs.winner,
                })
              }
              className="each-faq winner-faq my-3 p-3 w-100 rounded d-flex align-items-center"
            >
              <h5 className="heading">Winner Category – Two Types </h5>
              <div className="ml-auto">
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width=""
                  height="35"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d={`${
                      faqs.winner
                        ? "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                        : "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    } `}
                  />
                </svg>
              </div>
            </div>
            {faqs.winner && (
              <div>
                <div className="alert " role="alert">
                  <p className="m-0">
                    Single Digit No (Akhar) - Will Get Nine Times the amount
                    invested for the particular single Digit/no
                  </p>
                </div>
                <div className="alert " role="alert">
                  <p className="m-0">
                    Two Digit No - Will Get Ninety Times the amount invested for
                    the Particular Two Digit Digit/no
                  </p>
                </div>
                <div className="alert alert-primary" role="alert">
                  EXAMPLE: In case person select ‘5’ @ Rs.100, then in this
                  winner will get Rs. 900/- i.e. Nine times. In case person
                  select ‘25’ @ Rs.1000, then in this winner will get Rs.
                  90000/- i.e. Ninety Times
                </div>
              </div>
            )}

            <div className="each-faq participate-faq my-3 p-3 w-100 rounded d-flex align-items-center">
              <h5 className="heading">
                User can participate multiple times in any contest.{" "}
              </h5>
              <div className="ml-auto"></div>
            </div>
            <div className="each-faq amount-faq my-3 p-3 w-100 rounded d-flex align-items-center">
              <h5 className="heading">
                Winner will get the winning amount in his or her account
                mentioned in the profile in 30 minutes of the results declared
              </h5>
              <div className="ml-auto"></div>
            </div>
          </div>

          {/* <div className="row"></div> */}
        </div>
      </section>

      {/* <section className="get-start">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex align-self-center">
              <div className="left-area">
                <div className="section-heading">
                  <h5 className="subtitle">every day lots of wins</h5>
                  <h2 className="title ">be one of them</h2>
                  <p className="text">
                    Get started in less than 5 min - no credit card
                    required.Gain early access to winnerpool and experience
                    crypto like never before.
                  </p>
                  <Link href="#" className="mybtn1">
                    Play Now!
                  </Link>
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
      </section> */}
      {/* Get Start Area End  */}
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
              <Link className="mybtn2" href="#">
                View All{" "}
              </Link>
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
