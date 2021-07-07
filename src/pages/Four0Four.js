import { Link } from "react-router-dom";

const Four0Four = () => {
  return (
    <>
      <section className="four-zero-four">
        <img className="bg-img" src="assets/images/404-bg.png" alt="random" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content">
                <img src="assets/images/404.png" alt="random" />
                <div className="inner-content">
                  <h4 className="title">Oops, Something went wrong !</h4>
                  <Link to="/" className="mybtn1">
                    <i className="fas fa-angle-double-left" /> BACK TO HOME
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Four0Four;
