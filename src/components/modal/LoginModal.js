import { Formik, Form } from "formik";
import axios from "axios";
import AuthField from "../form/AuthField";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/action/userAction";

const LoginModal = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    errorMessage: "",
    successMessage: "",
  });
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
              <img className="logo" src="assets/images/logo.png" alt="logo" />
            </div>
            <div className="header-area">
              <h4 className="title">Great to have you back!</h4>
              <p className="sub-title">Enter your details below.</p>

              {state.errorMessage && (
                <p className="fw-bold text-danger">{state.errorMessage}</p>
              )}

              {state.successMessage && (
                <p className="fw-bold text-success">{state.successMessage}</p>
              )}
            </div>

            <Formik
              initialValues={{
                // email: "prashant@webcab.in",
                // password: "qwertyui",
                email: "",
                password: "",
              }}
              onSubmit={async (values, actions) => {
                var formData = new FormData();
                formData.append("email", values.email);
                formData.append("password", values.password);
                let res = await axios.post(
                  "https://easylifeyes.com/lottery/login",
                  formData
                );

                if (res.data.response === "SUCCESS") {
                  setState({
                    ...state,
                    errorMessage: "",
                    successMessage: res.data.message,
                  });
                  dispatch(login(res.data.dataArr));
                }

                if (res.data.response === "ERROR") {
                  setState({
                    ...state,
                    successMessage: "",
                    errorMessage: res.data.message,
                  });
                }
                console.log(res.data.dataArr);
              }}
            >
              {({ values, isSubmitting, errors }) => (
                <div className="form-area">
                  <Form>
                    {/* email */}
                    <AuthField
                      required={true}
                      label="Email*"
                      name="email"
                      type="email"
                      id="login-input-email"
                      placeholder="Enter your Email"
                    />
                    {/* password */}
                    <AuthField
                      required={true}
                      label="Password*"
                      name="password"
                      type="password"
                      id="login-input-password"
                      placeholder="Enter your password"
                    />
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
                          <Link href="/">Forgot Password?</Link>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="mybtn1">
                        Log In
                      </button>
                    </div>
                    {/* </form> */}
                  </Form>
                </div>
              )}
            </Formik>

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
