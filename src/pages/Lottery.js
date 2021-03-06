import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import TicketModal from "../components/modal/TicketModal";
import { ticketsFetch } from "../store/action/cartAction";
import {
  close_ticket_modal,
  show_ticket_modal,
} from "../store/action/modalAction";

const Lottery = ({ match }) => {
  const user = useSelector((state) => state.userReducer.user);
  const cartTickets = useSelector((state) => state.cartReducer.cartTickets);

  const dispatch = useDispatch();

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [ticket, setTicket] = useState([]);
  const [blockedTickets, setBlockedTickets] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [showTimer, setShowTimer] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [contestMessage, setContestMessage] = useState("");

  const [state, setState] = useState({
    errorMessage: "",
    successMessage: "",
    contest: "",
  });

  useEffect(() => {
    // if (cartTickets.length > 0) {
    //   // setSelectedTickets(cartTickets[0].ticket_no);
    //   setSelectedTickets([...selectedTickets, cartTickets[0].ticket_no]);
    // }
    // dispatch(ticketsFetch(user.userid));
    // fetching contest
    axios
      .get(`https://webcab.in/lottery/get_contests/${match.params.id}`)
      .then((res) => {
        console.log("the actual contest", res.data);
        setState({
          ...state,
          contest: res.data.data[0],
        });
        let resContest = res.data.data[0];
        // let c_seconds = resContest.entry_start_time.split(":");

        // let drCSecond = resContest.draw_time.split(":");

        // setHours(drCSecond[0] - c_seconds[0]);
        // setMinutes(drCSecond[1] - c_seconds[1]);
        // setSeconds(drCSecond[2] - c_seconds[2]);
        // console.log("from contest", resContest);
        axios
          .get(`https://webcab.in/lottery/get_club_tickets/${resContest.slug}`)
          .then((res) => {
            setContestMessage("");
            let the_data = res.data.data[0];
            console.log("from ticket", res.data);
            // setSelectedTickets([]);
            setBlockedTickets(res.data.booked_tickets.tickets);
            if (the_data.enable === 0) {
              setShowTimer(true);
              setShowTickets(false);
              if (the_data.expired === 0) {
                let theTimer = the_data.starts_in.split(":");
                // console.log("the timer", theTimer);

                setHours(theTimer[0]);
                setMinutes(theTimer[1]);
                setSeconds(theTimer[2]);
              } else {
                setShowTimer(false);
                setShowTickets(false);
                setContestMessage("contest is expired, better luck next time");
              }
            } else {
              setShowTimer(false);
              setShowTickets(true);
            }
            setTicket(the_data);
          });
      });
  }, [match.params.id]);

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

  const AddToCart = async (priceData) => {
    var formData = new FormData();
    formData.append("userid", user.userid);
    formData.append("contest_id", state.contest.id);
    formData.append("tickets", selectedTickets.join());
    formData.append("price", priceData.price);
    let res = await axios.post(
      "https://webcab.in/lottery/add_to_cart",
      formData
    );
    if (res.data.dataArr) {
      dispatch(ticketsFetch(user.userid));
    }

    return res.data;

    // setTimeout(() => {
    //   dispatch(close_ticket_modal());
    // }, 1000);
  };

  const handleCallback = (childData) => {
    return AddToCart(childData);
  };

  const unSelectTicket = (ticket) => {
    setSelectedTickets(selectedTickets.filter((tket) => tket !== ticket));
  };
  console.log("hello select tickets", selectedTickets);
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
                  <Link to="index.html">
                    <i className="fas fa-home" />
                    Home
                  </Link>
                </li>
                <li>
                  <span>
                    <i className="fas fa-chevron-right" />{" "}
                  </span>
                </li>
                <li>
                  <Link to="lottery.html">Contest</Link>
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
            <div className="row justify-content-center">
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
                    <h4 className="title">
                      start at: {state.contest.entry_start_time}
                    </h4>
                    <div className="countt">
                      {/* <img src="../../assets/images/icon1.png" alt="random" /> */}
                      <span>draw at: {state.contest.draw_time}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4">
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
              </div> */}
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
            {contestMessage && <h1>{contestMessage}</h1>}
            {showTimer && (
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
            )}
          </div>
        </div>
        {showTickets && (
          <div className="buy-tickets">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="buy-tickets-box">
                    <div className="heading">
                      <h4 className="title">Buy Lottery Tickets</h4>
                    </div>
                    <div className="content">
                      <div className="game-numbers">
                        <h4 className="title">Tickets</h4>
                        <div className="number-box">
                          <div className="manual-number">
                            <div className="main-content">
                              <ul className="number-list">
                                {ticket.tickets &&
                                  ticket.tickets.map((ticket, i) => {
                                    let exist =
                                      selectedTickets.includes(ticket);

                                    let existInCart = cartTickets.find(
                                      (tket) =>
                                        parseInt(tket.ticket_no) === ticket
                                    );

                                    let blockedList =
                                      blockedTickets.includes(ticket);
                                    return (
                                      <li
                                        readOnly={blockedList}
                                        className={`${
                                          (exist || existInCart) &&
                                          "contestListSelected"
                                        }

                                      ${blockedList && "blockedtListSelected"}
                                      
                                      `}
                                        key={i}
                                        onClick={() => {
                                          if (!blockedList) {
                                            if (
                                              !exist &&
                                              !existInCart &&
                                              selectedTickets.length === 0 &&
                                              cartTickets.length === 0
                                            ) {
                                              setSelectedTickets([
                                                ...selectedTickets,
                                                ticket,
                                              ]);
                                              dispatch(show_ticket_modal());
                                            } else {
                                              unSelectTicket(ticket);
                                            }
                                          }
                                        }}
                                      >
                                        {ticket}
                                      </li>
                                    );
                                  })}
                                <TicketModal
                                  selectedTickets={selectedTickets}
                                  unSelectTicket={unSelectTicket}
                                  handleCallback={handleCallback}
                                />
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="col-lg-12 text-center">
                          <button
                            type="button"
                            className="mybtn1"
                            onClick={AddToCart}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
                <Link to="#" className="mybtn1">
                  Check FAQs
                </Link>
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
              <Link className="mybtn2" to="#">
                View All{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Recent Winners Area End */}
    </>
  );
};

export default Lottery;
