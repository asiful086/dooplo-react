import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ticketsFetch } from "../store/action/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const cartTickets = useSelector((state) => state.cartReducer.cartTickets);

  useEffect(() => {
    if (user) {
      var formData = new FormData();
      formData.append("userid", user.userid);
      // axios
      //   .post("https://redwinservices.in/lottery/create_order", formData)
      //   .then((res) => {
      //     console.log(res.data);
      //   });
      dispatch(ticketsFetch(user.userid));
    }
  }, []);

  const removeCartTicket = async (userid, cart_id) => {
    var formData = new FormData();
    formData.append("userid", userid);
    formData.append("cart_id", cart_id);
    let res = await axios.post(
      "https://redwinservices.in/lottery/remove_cart_ticket",
      formData
    );
    console.log(res.data);

    if (res.data.response === "SUCCESS") {
      dispatch(ticketsFetch(userid));
    }
  };

  return (
    <>
      <section className="breadcrumb-area cart">
        <img
          className="bc-img"
          src="../../assets/images/breadcrumb/cart-bg.png"
          alt="random"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="title">Checkout</h4>
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
                  <Link to="cart.html">Checkout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Area End */}
      {/* Cart Area Start */}
      <section className="cart-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="message-one">
                <p>
                  Hey! Nice Number Selection.Please review your order below and
                  follow the next quick steps to complete your order.
                </p>
              </div>
              <div className="message-two">
                <div className="left">
                  <p>
                    <i className="far fa-check-circle" />
                    Selected Numbers was successfully added to your cart
                  </p>
                </div>
                {/* <div className="right">
                  <Link to="#">
                    <i className="far fa-edit" /> Update Cart
                  </Link>
                </div> */}
              </div>
              <div className="cart-table-area">
                <div className="responsive-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Ticket numbers</th>
                        <th scope="col">Price</th>
                        <th scope="col">Contest Name</th>
                        {/* <th scope="col">Quantity</th>
                        <th scope="col">Expires</th>
                        <th scope="col">Total</th> */}
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      {cartTickets &&
                        cartTickets.map((ticket) => (
                          <tr key={ticket.id}>
                            <td>
                              <ul className="number-list">
                                <li>{ticket.ticket_no}</li>
                              </ul>
                            </td>
                            <td>
                              <img
                                // src="../../assets/images/icon1.png"
                                src="../../rupee.png"
                                width="36"
                                alt="random"
                                className="mx-1"
                              />
                              {/* {console.log(ticket)} */}
                              {/* {ticket.ticket_no < 10 ? 100 : 1000} */}
                              {/* 0.00000051 */}
                              {ticket.price}
                            </td>
                            <td className="text-white">{ticket.contest}</td>
                            <td>
                              <div
                                onClick={() =>
                                  removeCartTicket(user.userid, ticket.id)
                                }
                                className="remove"
                              >
                                <i className="fas fa-times" />
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="total-pay">
                <div className="content">
                  <span>Total to Pay:</span>
                  <div className="num">
                    <img src="../../rupee.png" width="36" alt="random" />
                    {cartTickets.length > 0 &&
                      cartTickets.reduce((acc, cvalue) => {
                        {
                          /* if (cvalue.ticket_no < 10) {
                          return acc + 100;
                        } */
                        }
                        return acc + parseInt(cvalue.price);
                      }, 0)}
                  </div>
                </div>
                <div className="col-lg-12 text-center pt-5">
                  <div>
                    <img src="../../payment.jpeg" alt="" width="500px" />
                  </div>
                  <div className="my-5">
                    <div>
                      <span>Transaction ID</span>
                      <input
                        type="text"
                        placeholder="Enter your transaction id"
                      />
                    </div>
                  </div>
                  <Link to="#" className="mybtn1">
                    PurChase
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cart Area End */}
    </>
  );
};

export default Cart;
