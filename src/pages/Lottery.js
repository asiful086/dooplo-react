import axios from "axios";
import { useEffect, useState } from "react";

const Lottery = ({ match }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [ticket, setTicket] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState([]);

  const [state, setState] = useState({
    errorMessage: "",
    successMessage: "",
    contest: "",
  });

  useEffect(() => {
    // fetching contest
    axios
      .get(`https://easylifeyes.com/lottery/get_contests/${match.params.id}`)
      .then((res) => {
        setState({
          ...state,
          contest: res.data.data[0],
        });
        let resContest = res.data.data[0];
        let c_seconds = res.data.data[0].entry_start_time.split(":");

        let drCSecond = res.data.data[0].draw_time.split(":");

        setHours(drCSecond[0] - c_seconds[0]);
        setMinutes(drCSecond[1] - c_seconds[1]);
        setSeconds(drCSecond[2] - c_seconds[2]);
        // console.log("from contest", resContest);
        axios
          .get(
            `https://easylifeyes.com/lottery/get_club_tickets/${resContest.slug}`
          )
          .then((res) => {
            console.log("from ticket", res.data.data);

            setTicket(res.data.data[0]);
          });
      });
  }, []);

  // for timer
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
        if (minutes === 0) {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            clearInterval(myInterval);
          }
        }
        // if (minutes === 0) {
        //   clearInterval(myInterval);
        // } else {
        //   setMinutes(minutes - 1);
        //   setSeconds(59);
        // }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
  // akhar_ticket_price
  console.log("From selected tickets", selectedTickets);
  console.log("From contest", state.contest);
  return (
    <>
      {/* Breadcrumb Area Start */}
      <section className="breadcrumb-area bc-lottery">
        <img
          className="bc-img"
          src="../../assets/images/breadcrumb/lottery.png"
          alt="random"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="title">Contest</h4>
              <ul className="breadcrumb-list">
                <li>
                  <a href="index.html">
                    <i className="fas fa-home" />
                    Home
                  </a>
                </li>
                <li>
                  <span>
                    <i className="fas fa-chevron-right" />{" "}
                  </span>
                </li>
                <li>
                  <a href="lottery.html">Contest</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Area End */}
      {/* Lottery Staticstics Area Start */}
      <section className="lottery-area">
        <div className="lottery-staticstics">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-staticstics">
                  <div className="left">
                    <div className="icon">
                      <img
                        src="../../assets/images/lottery/st1.png"
                        alt="random"
                      />
                    </div>
                  </div>
                  <div className="right">
                    <h4 className="title">Lottery Jackpot</h4>
                    <div className="count">
                      <img src="../../assets/images/icon1.png" alt="random" />
                      <span>0.416250</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-staticstics">
                  <div className="left">
                    <div className="icon">
                      <img
                        src="../../assets/images/lottery/st2.png"
                        alt="random"
                      />
                    </div>
                  </div>
                  <div className="right">
                    <h4 className="title">Purchased Tickets</h4>
                    <div className="count">
                      <img
                        src="../../assets/images/tikit-icon.png"
                        alt="random"
                      />
                      <span>120</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-staticstics">
                  <div className="left">
                    <div className="icon">
                      <img
                        src="../../assets/images/lottery/st2.png"
                        alt="random"
                      />
                    </div>
                  </div>
                  <div className="right">
                    <h4 className="title">My Tickets</h4>
                    <div className="count">
                      <img
                        src="../../assets/images/tikit-icon.png"
                        alt="random"
                      />
                      <span>02</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="daily-lottery">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="section-heading">
                  <h5 className="subtitle">Try to check out our</h5>
                  <h2 className="title">{state.contest.contest}</h2>
                  <p className="text">
                    We update our site regularly; more and more winners are
                    added every day! To locate the most recent winner's
                    information
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="draw-time">
                  <h5 className="subtitle">Lottery Draw Starts In:</h5>
                  <div className="draw-counter">
                    {/* <div data-countdown="2021/12/15" /> */}
                    {/* <div data-countdown={state.contest.entry_start_time} /> */}
                    <div>
                      {hours < 10 ? `0${hours}` : hours}:
                      {minutes < 10 ? `0${minutes}` : minutes}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </div>
                  </div>
                  <p className="text">To meet Today's challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="buy-tickets">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="buy-tickets-box">
                  <div className="heading">
                    <h4 className="title">Buy Lottery Tickets</h4>
                  </div>
                  <div className="content">
                    <div className="top-area">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="info-box">
                            <h4 className="title">1 TICKET COSTS</h4>
                            <div className="number">
                              <img
                                src="../../rupee.png"
                                alt="rupee"
                                width="16"
                                className="mr-1 pb-1"
                              />
                              {/* <i className="fab fa-bitcoin" /> */}
                              AKHAR =
                              {selectedTickets.filter((tket) => tket < 10)
                                .length * state.contest.akhar_ticket_price}
                            </div>
                            <div className="number">
                              <img
                                src="../../rupee.png"
                                alt="rupee"
                                width="16"
                                className="mr-1 pb-1"
                              />
                              {/* <i className="fab fa-bitcoin" /> */}
                              TWO DIGIT NUMBER =
                              {selectedTickets.filter((tket) => tket > 9)
                                .length * state.contest.digit_ticket_price}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-box">
                            <h4 className="title">QUANTITY</h4>
                            <div className="number">
                              <input
                                type="number"
                                value={selectedTickets.length}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-box">
                            <h4 className="title">TOTAL COST</h4>
                            <div className="number">
                              {/* <i className="fab fa-bitcoin" /> */}
                              <img
                                src="../../rupee.png"
                                alt="rupee"
                                width="16"
                                className="mr-1 pb-1"
                              />
                              0.0000
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="game-numbers">
                      <h4 className="title">Tickets</h4>
                      <div className="number-box">
                        <div className="manual-number">
                          <div className="main-content">
                            <ul className="number-list">
                              {ticket.tickets &&
                                ticket.tickets.map((ticket, i) => {
                                  let exist = selectedTickets.includes(ticket);
                                  return (
                                    <li
                                      className={`${
                                        exist && "contestListSelected"
                                      }`}
                                      key={i}
                                      onClick={() => {
                                        if (!exist) {
                                          setSelectedTickets([
                                            ...selectedTickets,
                                            ticket,
                                          ]);
                                        } else {
                                          setSelectedTickets(
                                            selectedTickets.filter(
                                              (tket) => tket !== ticket
                                            )
                                          );
                                        }
                                      }}
                                    >
                                      {ticket}
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <button type="button" className="mybtn1">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Lottery Staticstics  Area End */}
      {/* Latest Activities Area Start */}

      {/* Latest Activities Area End */}
      {/* lottery video Area Start */}
      {/* lottery video Area End */}
      {/* Questions Area Start */}
      <section className="question-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="../../assets/images/question-left.png" alt="random" />
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h5 className="subtitle">If you have any</h5>
                <h2 className="title">questions</h2>
                <p className="text">
                  Our top priorities are to protect your privacy, provide secure
                  transactions, and safeguard your data.
                </p>
                <p className="text">
                  When you're ready to play, registering an account is required
                  so we know you're of legal age and so no one else can use your
                  account.We answer the most commonly asked lotto questions..
                </p>
                <a href="#" className="mybtn1">
                  Check FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Questions Area End */}
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
                    <img src="../../assets/images/icon2.png" alt="random" />
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
                    <img src="../../assets/images/icon2.png" alt="random" />
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
                    <img src="../../assets/images/icon2.png" alt="random" />
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
    </>
  );
};

export default Lottery;
