const Awards = () => {
  return (
    <>
      <section className="breadcrumb-area bc-awards">
        <img className="bc-img" src="assets/images/breadcrumb/awards.png" alt />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="title">Awards</h4>
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
                  <a href="awards.html">Awards</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Area End */}
      {/* Awards Area Start */}
      <section className="awards-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-heading">
                <h5 className="subtitle">Wellcome bonuses</h5>
                <h2 className="title">Deposit Bonus</h2>
                <p className="text">
                  We update our site regularly; more and more winners are added
                  every day! To locate the most recent winner's information
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-awards">
                <div className="content">
                  <img src="assets/images/awards/ic1.png" alt />
                  <h4 className="title">Luck power</h4>
                  <p>
                    <i className="fas fa-users" />
                    342
                  </p>
                  <a href="#" className="mybtn2">
                    Read MOre
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-awards">
                <div className="content">
                  <img src="assets/images/awards/ic2.png" alt />
                  <h4 className="title">Zero Hunter</h4>
                  <p>
                    <i className="fas fa-users" />
                    342
                  </p>
                  <a href="#" className="mybtn2">
                    Read MOre
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-awards">
                <div className="content">
                  <img src="assets/images/awards/ic3.png" alt />
                  <h4 className="title">BTC Top</h4>
                  <p>
                    <i className="fas fa-users" />
                    342
                  </p>
                  <a href="#" className="mybtn2">
                    Read MOre
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-awards">
                <div className="content">
                  <img src="assets/images/awards/ic4.png" alt />
                  <h4 className="title">BTC King</h4>
                  <p>
                    <i className="fas fa-users" />
                    342
                  </p>
                  <a href="#" className="mybtn2">
                    Read MOre
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-awards">
                <div className="content">
                  <img src="assets/images/awards/ic5.png" alt />
                  <h4 className="title">Money Bag</h4>
                  <p>
                    <i className="fas fa-users" />
                    342
                  </p>
                  <a href="#" className="mybtn2">
                    Read MOre
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-awards">
                <div className="content">
                  <img src="assets/images/awards/ic6.png" alt />
                  <h4 className="title">BTC Top</h4>
                  <p>
                    <i className="fas fa-users" />
                    342
                  </p>
                  <a href="#" className="mybtn2">
                    Read MOre
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Awards Area End */}
      {/* community and Blog Area Start */}
      <div className="community-blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-box">
                <div className="img">
                  <img src="assets/images/team/community-icon.png" alt />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="#">
                      Community <i className="fas fa-arrow-right" />
                    </a>
                  </h4>
                  <p className="text">
                    Find answers, support, and inspiration from other Jeugo
                    users.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-box">
                <div className="img">
                  <img src="assets/images/team/blog-icon.png" alt />
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="#">
                      Blogs <i className="fas fa-arrow-right" />
                    </a>
                  </h4>
                  <p className="text">
                    Find answers, support, and inspiration from other Jeugo
                    users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
