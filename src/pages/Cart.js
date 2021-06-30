const Cart = () => {
  return (
    <>
      <section className="breadcrumb-area cart">
        <img
          className="bc-img"
          src="assets/images/breadcrumb/cart-bg.png"
          alt
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="title">Cart</h4>
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
                  <a href="cart.html">Cart</a>
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
                <div className="right">
                  <a href="#">
                    <i className="far fa-edit" /> Update Cart
                  </a>
                </div>
              </div>
              <div className="cart-table-area">
                <div className="responsive-table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Ticket numbers</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Expires</th>
                        <th scope="col">Total</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <ul className="number-list">
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                          </ul>
                        </td>
                        <td>
                          <img src="assets/images/icon1.png" alt />
                          0.00000051
                        </td>
                        <td>
                          <div className="qty">
                            <ul>
                              <li>
                                <span className="qtminus">
                                  <i className="fas fa-angle-left" />
                                </span>
                              </li>
                              <li>
                                <span className="qttotal">1</span>
                              </li>
                              <li>
                                <span className="qtplus">
                                  <i className="fas fa-angle-right" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td>
                          <span className="time">30 mins.left</span>
                        </td>
                        <td>
                          <img src="assets/images/icon1.png" alt />
                          0.00000051
                        </td>
                        <td>
                          <div className="remove">
                            <i className="fas fa-times" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ul className="number-list">
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                          </ul>
                        </td>
                        <td>
                          <img src="assets/images/icon1.png" alt />
                          0.00000051
                        </td>
                        <td>
                          <div className="qty">
                            <ul>
                              <li>
                                <span className="qtminus">
                                  <i className="fas fa-angle-left" />
                                </span>
                              </li>
                              <li>
                                <span className="qttotal">1</span>
                              </li>
                              <li>
                                <span className="qtplus">
                                  <i className="fas fa-angle-right" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td>
                          <span className="time">30 mins.left</span>
                        </td>
                        <td>
                          <img src="assets/images/icon1.png" alt />
                          0.00000051
                        </td>
                        <td>
                          <div className="remove">
                            <i className="fas fa-times" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ul className="number-list">
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                          </ul>
                        </td>
                        <td>
                          <img src="assets/images/icon1.png" alt />
                          0.00000051
                        </td>
                        <td>
                          <div className="qty">
                            <ul>
                              <li>
                                <span className="qtminus">
                                  <i className="fas fa-angle-left" />
                                </span>
                              </li>
                              <li>
                                <span className="qttotal">1</span>
                              </li>
                              <li>
                                <span className="qtplus">
                                  <i className="fas fa-angle-right" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td>
                          <span className="time">30 mins.left</span>
                        </td>
                        <td>
                          <img src="assets/images/icon1.png" alt />
                          0.00000051
                        </td>
                        <td>
                          <div className="remove">
                            <i className="fas fa-times" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ul className="number-list">
                            <li>24</li>
                            <li>25</li>
                            <li>26</li>
                            <li>27</li>
                            <li>28</li>
                          </ul>
                        </td>
                        <td>
                          <img src="assets/images/icon1.png" alt />
                          0.00000051
                        </td>
                        <td>
                          <div className="qty">
                            <ul>
                              <li>
                                <span className="qtminus">
                                  <i className="fas fa-angle-left" />
                                </span>
                              </li>
                              <li>
                                <span className="qttotal">1</span>
                              </li>
                              <li>
                                <span className="qtplus">
                                  <i className="fas fa-angle-right" />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </td>
                        <td>
                          <span className="time">30 mins.left</span>
                        </td>
                        <td>
                          <img src="assets/images/icon1.png" alt />
                          0.00000051
                        </td>
                        <td>
                          <div className="remove">
                            <i className="fas fa-times" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="total-pay">
                <div className="content">
                  <span>Total to Pay:</span>
                  <div className="num">
                    <img src="assets/images/icon1.png" alt />
                    0.00000051
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cart Area End */}
      {/* Payment-method Area Start */}
      <section className="payment-method">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="title">Payment Method</h4>
              <p className="text">Choose a payment method</p>
            </div>
            <div className="col-lg-12">
              <div className="method-slider">
                <div className="item">
                  <a href="#" className="single-method">
                    <div className="icon">
                      <img src="assets/images/payment/dabit-card.png" alt />
                    </div>
                    <span>Credit Card</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="single-method">
                    <div className="icon">
                      <img src="assets/images/payment/dabit-card.png" alt />
                    </div>
                    <span>Dabit Card</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="single-method active">
                    <div className="icon">
                      <img src="assets/images/payment/paypal.png" alt />
                    </div>
                    <span>Paypal</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="single-method">
                    <div className="icon">
                      <img src="assets/images/payment/bitcoin.png" alt />
                    </div>
                    <span>Bitcoin</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="single-method">
                    <div className="icon">
                      <img src="assets/images/payment/litecoin.png" alt />
                    </div>
                    <span>Litecoin</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="single-method">
                    <div className="icon">
                      <img src="assets/images/payment/ether.png" alt />
                    </div>
                    <span>Ethereum</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="single-method">
                    <div className="icon">
                      <img src="assets/images/payment/rippel.png" alt />
                    </div>
                    <span>Ripple </span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="single-method">
                    <div className="icon">
                      <img src="assets/images/payment/bitcoin.png" alt />
                    </div>
                    <span>Bitcoin</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="single-method">
                    <div className="icon">
                      <img src="assets/images/payment/litecoin.png" alt />
                    </div>
                    <span>Litecoin</span>
                  </a>
                </div>
                <div className="item">
                  <a href="#" className="single-method">
                    <div className="icon">
                      <img src="assets/images/payment/ether.png" alt />
                    </div>
                    <span>Ethereum</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <a href="#" className="mybtn1">
                PurChase
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
