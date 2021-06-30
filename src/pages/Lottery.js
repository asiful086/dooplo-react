const Lottery = () => {
  return (
    <>
      {/* Breadcrumb Area Start */}
      <section className="breadcrumb-area bc-lottery">
        <img
          className="bc-img"
          src="assets/images/breadcrumb/lottery.png"
          alt
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="title">Lottery</h4>
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
                  <a href="lottery.html">Lottery</a>
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
                      <img src="assets/images/lottery/st1.png" alt />
                    </div>
                  </div>
                  <div className="right">
                    <h4 className="title">Lottery Jackpot</h4>
                    <div className="count">
                      <img src="assets/images/icon1.png" alt />
                      <span>0.416250</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-staticstics">
                  <div className="left">
                    <div className="icon">
                      <img src="assets/images/lottery/st2.png" alt />
                    </div>
                  </div>
                  <div className="right">
                    <h4 className="title">Purchased Tickets</h4>
                    <div className="count">
                      <img src="assets/images/tikit-icon.png" alt />
                      <span>120</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-staticstics">
                  <div className="left">
                    <div className="icon">
                      <img src="assets/images/lottery/st2.png" alt />
                    </div>
                  </div>
                  <div className="right">
                    <h4 className="title">My Tickets</h4>
                    <div className="count">
                      <img src="assets/images/tikit-icon.png" alt />
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
                  <h2 className="title">Daily Lottery</h2>
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
                    <div data-countdown="2021/12/15" />
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
                    <div className="right-area">
                      <select>
                        <option value={1}>BTC</option>
                        <option value={1}>BTC</option>
                        <option value={1}>BTC</option>
                      </select>
                    </div>
                  </div>
                  <div className="content">
                    <div className="top-area">
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="info-box">
                            <h4 className="title">BALANCE</h4>
                            <div className="number">
                              <i className="fab fa-bitcoin" />
                              0.0000
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="info-box">
                            <h4 className="title">1 TICKET COSTS</h4>
                            <div className="number">
                              <i className="fab fa-bitcoin" />
                              0.0000
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="info-box">
                            <h4 className="title">QUANTITY</h4>
                            <div className="number">
                              <input type="number" defaultValue={1} />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="info-box">
                            <h4 className="title">TOTAL COST</h4>
                            <div className="number">
                              <i className="fab fa-bitcoin" />
                              0.0000
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="game-numbers">
                      <h4 className="title">GAME NUMBERS</h4>
                      <div className="number-box">
                        <div className="auto-number">
                          <div className="top-content">
                            <input type="radio" id="auto-num" name="auto-num" />
                            <label htmlFor="auto-num">
                              Auto Generated
                              <span>
                                Random numbers will be generated automatically
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="manual-number">
                          <div className="top-content">
                            <input
                              type="radio"
                              id="manual-num"
                              name="auto-num"
                            />
                            <label htmlFor="manual-num">
                              Manual Select
                              <span>Pick 5 numbers manually</span>
                            </label>
                          </div>
                          <div className="main-content">
                            <ul className="number-list">
                              <li>1</li>
                              <li>2</li>
                              <li>3</li>
                              <li>4</li>
                              <li>5</li>
                              <li>6</li>
                              <li>7</li>
                              <li>8</li>
                              <li className="active">9</li>
                              <li>10</li>
                              <li>11</li>
                              <li>12</li>
                              <li className="active">13</li>
                              <li>14</li>
                              <li>15</li>
                              <li>16</li>
                              <li>17</li>
                              <li>18</li>
                              <li>19</li>
                              <li className="active">20</li>
                              <li>21</li>
                              <li className="active">22</li>
                              <li>23</li>
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                              <li className="active">29</li>
                              <li>30</li>
                              <li>31</li>
                              <li>32</li>
                              <li>33</li>
                              <li>34</li>
                              <li>35</li>
                              <li>36</li>
                              <li>37</li>
                              <li>38</li>
                              <li>39</li>
                              <li>40</li>
                              <li>41</li>
                              <li>42</li>
                              <li>43</li>
                              <li>44</li>
                              <li>45</li>
                              <li>46</li>
                              <li>47</li>
                              <li>48</li>
                              <li>49</li>
                              <li>50</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <a href="#" className="mybtn1">
                          Buy ticket
                        </a>
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
      <section className="activities">
        <img
          className="shape shape1"
          src="assets/images/people/shape1.png"
          alt
        />
        <img
          className="shape shape2"
          src="assets/images/people/shape2.png"
          alt
        />
        <img
          className="shape shape3"
          src="assets/images/people/shape3.png"
          alt
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-heading">
                <h5 className="subtitle">Daily Lottery</h5>
                <h2 className="title">Latest Activites</h2>
                <p className="text">
                  The world’s first truly fair and global lottery. Each player
                  has the highest chances to win the JACKPOT
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
                      Purchased Tickets
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
                      My tickets
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="pills-history-tab"
                      data-toggle="pill"
                      href="#pills-history"
                      role="tab"
                      aria-controls="pills-history"
                      aria-selected="false"
                    >
                      History
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
                          <th scope="col">Ticket numbers</th>
                          <th scope="col">Tickets</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src="assets/images/people/p1.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p2.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p3.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p4.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p5.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p1.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p2.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p3.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p4.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p5.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
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
                          <th scope="col">Ticket numbers</th>
                          <th scope="col">Tickets</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src="assets/images/people/p1.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p2.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p3.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p4.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p5.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p1.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p2.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p3.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p4.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p5.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-history"
                  role="tabpanel"
                  aria-labelledby="pills-history-tab"
                >
                  <div className="responsive-table">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">USER</th>
                          <th scope="col">Ticket numbers</th>
                          <th scope="col">Tickets</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src="assets/images/people/p1.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p2.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p3.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p4.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p5.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p1.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p2.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p3.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p4.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                        <tr>
                          <td>
                            <img src="assets/images/people/p5.png" alt />
                            Tom Bass
                          </td>
                          <td>
                            <ul className="number-list">
                              <li>24</li>
                              <li>25</li>
                              <li>26</li>
                              <li>27</li>
                              <li>28</li>
                            </ul>
                          </td>
                          <td>01</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* How it Work Area Start */}
        <div className="how-it-work">
          <img
            className="bg-shape"
            src="assets/images/howitwork/bg-shape.png"
            alt
          />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="section-heading">
                  <h5 className="subtitle">Want to see how</h5>
                  <h2 className="title">How it works?</h2>
                  <p className="text">
                    We update our site regularly; more and more winners are
                    added every day! To locate the most recent winner's
                    information
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="single-work">
                  <img src="assets/images/howitwork/ic1.png" alt />
                  <h4 className="title">Choose</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliqui eum atque.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-work">
                  <img src="assets/images/howitwork/ic2.png" alt />
                  <h4 className="title">BUY</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliqui eum atque.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-work">
                  <img src="assets/images/howitwork/ic3.png" alt />
                  <h4 className="title">WIN</h4>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliqui eum atque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* How it Work Area Start */}
      </section>
      {/* Latest Activities Area End */}
      {/* lottery video Area Start */}
      <section className="lottery-video">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="video-box">
                <a href="#" className="video-play-btn video-icon mfp-iframe">
                  <img src="assets/images/play-icon-red.png" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* lottery video Area End */}
      {/* Questions Area Start */}
      <section className="question-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/images/question-left.png" alt />
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
                    <img src="assets/images/icon2.png" alt />
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
                    <img src="assets/images/icon2.png" alt />
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
                    <img src="assets/images/icon2.png" alt />
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
                          <h5 className="sub-title">subscribe to Dooplo</h5>
                          <h4 className="title">To Get Exclusive Benefits</h4>
                        </div>
                      </div>
                      <div className="col-lg-3 col-4 d-flex align-self-center">
                        <div className="icon">
                          <img src="assets/images/mail-box.png" alt />
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
                    <a href="#">
                      <i className="fas fa-angle-double-right" /> About Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" /> Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" /> Latest Blog
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" /> Authenticity
                      Guarantee
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" /> Customer
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" /> Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget info-link-widget">
                <h4 className="title">My Account</h4>
                <ul className="link-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" /> Manage Your
                      Account
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" /> How to Deposit
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" /> How to
                      Withdraw
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" /> Account
                      Varification
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" /> Safety &amp;
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" /> Membership
                      Level
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget info-link-widget">
                <h4 className="title">help center</h4>
                <ul className="link-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      Help centre
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      Quick Start Guide
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      Borrow
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      Lend
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget info-link-widget">
                <h4 className="title">Legal Info</h4>
                <ul className="link-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      Risk Warnings
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      Privacy Notice
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      Become Affiliate
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      Complaints Policy
                    </a>
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
                    <a href="#">Dooplo</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="copright-area-links">
                  <li>
                    <a href="#">Terms Of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Gamble</a>
                  </li>
                  <li>
                    <a href="#">Aware</a>
                  </li>
                  <li>
                    <a href="#">Help Cente</a>
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

export default Lottery;
