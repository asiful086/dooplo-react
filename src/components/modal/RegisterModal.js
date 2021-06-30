const RegisterModal = () => {
  return (
    <div
      className="modal fade login-modal sign-in"
      id="signin"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="signin"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered " role="document">
        <div className="modal-content">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-body">
            <div className="logo-area">
              <img className="logo" src="assets/images/logo.png" alt />
            </div>
            <div className="header-area">
              <h4 className="title">Great to have you back!</h4>
              <p className="sub-title">Enter your details below.</p>
            </div>
            <div className="form-area">
              <form action="#" method="POST">
                <div className="form-group">
                  <label htmlFor="input-name">Name*</label>
                  <input
                    type="text"
                    className="input-field"
                    id="input-name"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="input-email">Email*</label>
                  <input
                    type="email"
                    className="input-field"
                    id="input-email"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="input-password">Password*</label>
                  <input
                    type="password"
                    className="input-field"
                    id="input-password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="input-con-password">confirm password**</label>
                  <input
                    type="password"
                    className="input-field"
                    id="input-con-password"
                    placeholder="Enter your Confirm Password"
                  />
                </div>
                {/* <div className="form-group">
                  <select>
                    <option value={0}>BTC</option>
                    <option value={1}>USD</option>
                    <option value={2}>EUR</option>
                  </select>
                </div> */}
                <div className="form-group">
                  <div className="check-group">
                    <input
                      type="checkbox"
                      className="check-box-field"
                      id="input-terms"
                      defaultChecked
                    />
                    <label htmlFor="input-terms">
                      I agree with <a href="#">terms and Conditions</a> and{" "}
                      <a href="#">privacy policy</a>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="mybtn1">
                    {/* Take Bonus */}
                    SIGNUP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
