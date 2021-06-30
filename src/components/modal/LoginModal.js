const LoginModal = () => {
  return (
    <div
      className="modal fade login-modal"
      id="login"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="login"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
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
                  <label htmlFor="login-input-email">Email*</label>
                  <input
                    type="email"
                    className="input-field"
                    id="login-input-email"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="login-input-password">Password*</label>
                  <input
                    type="password"
                    className="input-field"
                    id="login-input-password"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <div className="box">
                    <div className="left">
                      <input
                        type="checkbox"
                        className="check-box-field"
                        id="input-save-password"
                        defaultChecked
                      />
                      <label htmlFor="input-save-password">
                        Remember Password
                      </label>
                    </div>
                    <div className="right">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="mybtn1">
                    Log In
                  </button>
                </div>
              </form>
            </div>
            <div className="form-footer">
              <p>
                Not a member?
                <a href="#">
                  Create account <i className="fas fa-angle-double-right" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
