const Faq = () => {
  return (
    <>
      <section className="breadcrumb-area bc-faq">
        <img className="bc-img" src="assets/images/breadcrumb/faq.png" alt />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="title">Faq</h4>
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
                  <a href="faq.html">Faq</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Area End */}
      {/* faq-section start */}
      <section className="faq-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-heading">
                <h5 className="subtitle">Got any Question</h5>
                <h2 className="title">We've answers</h2>
                <p className="text">
                  It’s up to the competition in features, with some unique
                  advantages.All the latest crypto games.Here are some of them.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="faq-wrapper">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="ticket-tab"
                      data-toggle="tab"
                      href="#ticket"
                      role="tab"
                      aria-controls="ticket"
                      aria-selected="false"
                    >
                      Cryptogames
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="banking-tab"
                      data-toggle="tab"
                      href="#banking"
                      role="tab"
                      aria-controls="banking"
                      aria-selected="false"
                    >
                      banking
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="winning-tab"
                      data-toggle="tab"
                      href="#winning"
                      role="tab"
                      aria-controls="winning"
                      aria-selected="false"
                    >
                      winning
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="results-tab"
                      data-toggle="tab"
                      href="#results"
                      role="tab"
                      aria-controls="results"
                      aria-selected="true"
                    >
                      results &amp; alerts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="about-tab"
                      data-toggle="tab"
                      href="#about"
                      role="tab"
                      aria-controls="about"
                      aria-selected="false"
                    >
                      About JeUgo
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="general-tab"
                      data-toggle="tab"
                      href="#general"
                      role="tab"
                      aria-controls="general"
                      aria-selected="false"
                    >
                      general
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade"
                    id="ticket"
                    role="tabpanel"
                    aria-labelledby="ticket-tab"
                  >
                    <div
                      className="accordion sorteo-accordion"
                      id="accordionExample"
                    >
                      <div className="card">
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <i className="fa fa-question" /> What is the
                              meaning of business with example?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              scelerisque consectetuer ac a at nunc, in lectus.
                              Ut lectus erat. Sit praesent tellus, ac eget pede
                              risus, urna ante nec tincidunt vel, tincidunt
                              tortor sit lacinia. Enim massa in, porttitor felis
                              justo, aenean habitant velit nunc, maecenas eget
                              magna viverra imperdiet magna tincidunt. Lacinia
                              eleifend luctus ante fermentum, lectus faucibus mi
                              id, orci congue, amet donec erat nisl vestibulum.
                              Ut ac luctus semper curabitur ipsum, odio pretium
                              nec interdum tellus urna.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTwo">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <i className="fa fa-question" /> What is a
                              business simple definition?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingThree">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              <i className="fa fa-question" /> how to payment?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingFour">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              <i className="fa fa-question" /> why we are best
                              for digital agency
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="banking"
                    role="tabpanel"
                    aria-labelledby="banking-tab"
                  >
                    <div
                      className="accordion sorteo-accordion"
                      id="accordionExample2"
                    >
                      <div className="card">
                        <div className="card-header" id="headingFive">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseFive"
                              aria-expanded="true"
                              aria-controls="collapseFive"
                            >
                              <i className="fa fa-question" /> What is the
                              meaning of business with example?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse show"
                          aria-labelledby="headingFive"
                          data-parent="#accordionExample2"
                        >
                          <div className="card-body">
                            <p>
                              scelerisque consectetuer ac a at nunc, in lectus.
                              Ut lectus erat. Sit praesent tellus, ac eget pede
                              risus, urna ante nec tincidunt vel, tincidunt
                              tortor sit lacinia. Enim massa in, porttitor felis
                              justo, aenean habitant velit nunc, maecenas eget
                              magna viverra imperdiet magna tincidunt. Lacinia
                              eleifend luctus ante fermentum, lectus faucibus mi
                              id, orci congue, amet donec erat nisl vestibulum.
                              Ut ac luctus semper curabitur ipsum, odio pretium
                              nec interdum tellus urna.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingSix">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              <i className="fa fa-question" /> What is a
                              business simple definition?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseSix"
                          className="collapse"
                          aria-labelledby="headingSix"
                          data-parent="#accordionExample2"
                        >
                          <div className="card-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="winning"
                    role="tabpanel"
                    aria-labelledby="winning-tab"
                  >
                    <div
                      className="accordion sorteo-accordion"
                      id="accordionExample3"
                    >
                      <div className="card">
                        <div className="card-header" id="headingSeven">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseSeven"
                              aria-expanded="true"
                              aria-controls="collapseSeven"
                            >
                              <i className="fa fa-question" /> What is the
                              meaning of business with example?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseSeven"
                          className="collapse show"
                          aria-labelledby="headingSeven"
                          data-parent="#accordionExample3"
                        >
                          <div className="card-body">
                            <p>
                              scelerisque consectetuer ac a at nunc, in lectus.
                              Ut lectus erat. Sit praesent tellus, ac eget pede
                              risus, urna ante nec tincidunt vel, tincidunt
                              tortor sit lacinia. Enim massa in, porttitor felis
                              justo, aenean habitant velit nunc, maecenas eget
                              magna viverra imperdiet magna tincidunt. Lacinia
                              eleifend luctus ante fermentum, lectus faucibus mi
                              id, orci congue, amet donec erat nisl vestibulum.
                              Ut ac luctus semper curabitur ipsum, odio pretium
                              nec interdum tellus urna.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingEight">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseEight"
                              aria-expanded="false"
                              aria-controls="collapseEight"
                            >
                              <i className="fa fa-question" /> What is a
                              business simple definition?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseEight"
                          className="collapse"
                          aria-labelledby="headingEight"
                          data-parent="#accordionExample3"
                        >
                          <div className="card-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="results"
                    role="tabpanel"
                    aria-labelledby="results-tab"
                  >
                    <div
                      className="accordion sorteo-accordion"
                      id="accordionExample4"
                    >
                      <div className="card">
                        <div className="card-header" id="headingNine">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseNine"
                              aria-expanded="false"
                              aria-controls="collapseNine"
                            >
                              <i className="fa fa-question" />
                              What are lottery results alerts?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseNine"
                          className="collapse"
                          aria-labelledby="headingNine"
                          data-parent="#accordionExample4"
                        >
                          <div className="card-body">
                            <p>
                              scelerisque consectetuer ac a at nunc, in lectus.
                              Ut lectus erat. Sit praesent tellus, ac eget pede
                              risus, urna ante nec tincidunt vel, tincidunt
                              tortor sit lacinia. Enim massa in, porttitor felis
                              justo, aenean habitant velit nunc, maecenas eget
                              magna viverra imperdiet magna tincidunt. Lacinia
                              eleifend luctus ante fermentum, lectus faucibus mi
                              id, orci congue, amet donec erat nisl vestibulum.
                              Ut ac luctus semper curabitur ipsum, odio pretium
                              nec interdum tellus urna.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="headingTen">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTen"
                              aria-expanded="false"
                              aria-controls="collapseTen"
                            >
                              <i className="fa fa-question" />
                              What are jackpot alerts?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapseTen"
                          className="collapse"
                          aria-labelledby="headingTen"
                          data-parent="#accordionExample4"
                        >
                          <div className="card-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading11">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse11"
                              aria-expanded="true"
                              aria-controls="collapse11"
                            >
                              <i className="fa fa-question" />
                              How do I sign up to receive SMS winning alerts?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse11"
                          className="collapse show"
                          aria-labelledby="heading11"
                          data-parent="#accordionExample4"
                        >
                          <div className="card-body">
                            <p>
                              To subscribe to FREE SMS winning alerts, please
                              fill in your mobile phone number in the 'SMS
                              Number' field in the Notification settings and
                              save the changes. To unsubscribe, please uncheck
                              the box next to the 'SMS Number' field and save
                              the changes.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading12">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse12"
                              aria-expanded="false"
                              aria-controls="collapse12"
                            >
                              <i className="fa fa-question" />
                              When are lottery results updated on the site?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse12"
                          className="collapse"
                          aria-labelledby="heading12"
                          data-parent="#accordionExample4"
                        >
                          <div className="card-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading13">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse13"
                              aria-expanded="false"
                              aria-controls="collapse13"
                            >
                              <i className="fa fa-question" />
                              How do I read the lottery results?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse13"
                          className="collapse"
                          aria-labelledby="heading13"
                          data-parent="#accordionExample4"
                        >
                          <div className="card-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="about"
                    role="tabpanel"
                    aria-labelledby="about-tab"
                  >
                    <div
                      className="accordion sorteo-accordion"
                      id="accordionExample5"
                    >
                      <div className="card">
                        <div className="card-header" id="heading14">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse14"
                              aria-expanded="true"
                              aria-controls="collapse14"
                            >
                              <i className="fa fa-question" /> What is the
                              meaning of business with example?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse14"
                          className="collapse show"
                          aria-labelledby="heading14"
                          data-parent="#accordionExample5"
                        >
                          <div className="card-body">
                            <p>
                              scelerisque consectetuer ac a at nunc, in lectus.
                              Ut lectus erat. Sit praesent tellus, ac eget pede
                              risus, urna ante nec tincidunt vel, tincidunt
                              tortor sit lacinia. Enim massa in, porttitor felis
                              justo, aenean habitant velit nunc, maecenas eget
                              magna viverra imperdiet magna tincidunt. Lacinia
                              eleifend luctus ante fermentum, lectus faucibus mi
                              id, orci congue, amet donec erat nisl vestibulum.
                              Ut ac luctus semper curabitur ipsum, odio pretium
                              nec interdum tellus urna.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading15">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse15"
                              aria-expanded="false"
                              aria-controls="collapse15"
                            >
                              <i className="fa fa-question" /> What is a
                              business simple definition?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse15"
                          className="collapse"
                          aria-labelledby="heading15"
                          data-parent="#accordionExample5"
                        >
                          <div className="card-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="general"
                    role="tabpanel"
                    aria-labelledby="general-tab"
                  >
                    <div
                      className="accordion sorteo-accordion"
                      id="accordionExample6"
                    >
                      <div className="card">
                        <div className="card-header" id="heading16">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse16"
                              aria-expanded="true"
                              aria-controls="collapse16"
                            >
                              <i className="fa fa-question" />
                              What is the meaning of business with example?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse16"
                          className="collapse show"
                          aria-labelledby="heading16"
                          data-parent="#accordionExample6"
                        >
                          <div className="card-body">
                            <p>
                              scelerisque consectetuer ac a at nunc, in lectus.
                              Ut lectus erat. Sit praesent tellus, ac eget pede
                              risus, urna ante nec tincidunt vel, tincidunt
                              tortor sit lacinia. Enim massa in, porttitor felis
                              justo, aenean habitant velit nunc, maecenas eget
                              magna viverra imperdiet magna tincidunt. Lacinia
                              eleifend luctus ante fermentum, lectus faucibus mi
                              id, orci congue, amet donec erat nisl vestibulum.
                              Ut ac luctus semper curabitur ipsum, odio pretium
                              nec interdum tellus urna.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="heading17">
                          <h2 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse17"
                              aria-expanded="false"
                              aria-controls="collapse17"
                            >
                              <i className="fa fa-question" /> What is a
                              business simple definition?
                            </button>
                          </h2>
                        </div>
                        <div
                          id="collapse17"
                          className="collapse"
                          aria-labelledby="heading17"
                          data-parent="#accordionExample6"
                        >
                          <div className="card-body">
                            <p>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </p>
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
      </section>
    </>
  );
};

export default Faq;
