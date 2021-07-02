import { Formik, Form } from "formik";
import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/action/userAction";

import AuthField from "../form/AuthField";

const RegisterModal = () => {
  const modalRef = useRef();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    errorMessage: "",
    successMessage: "",
  });
  return (
    <div
      ref={modalRef}
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
                name: "",
                email: "",
                password: "",
                cpassword: "",
              }}
              onSubmit={async (values, actions) => {
                var formData = new FormData();
                formData.append("name", values.name);
                formData.append("email", values.email);
                formData.append("password", values.password);
                formData.append("cpassword", values.cpassword);
                let res = await axios.post(
                  "https://easylifeyes.com/lottery/signup",
                  formData
                );

                if (res.data.response === "SUCCESS") {
                  setState({
                    ...state,
                    errorMessage: "",
                    successMessage: res.data.message,
                  });
                  dispatch(login(res.data.dataArr));

                  setTimeout(function () {
                    modalRef.current.classList.remove("show");
                    document
                      .querySelector(".modal-backdrop")
                      .classList.remove("show");
                  }, 1000);
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
                    {/* name */}
                    <AuthField
                      required={true}
                      label="Name*"
                      name="name"
                      type="text"
                      id="register-input-name"
                      placeholder="Enter your Name"
                    />
                    {/* email */}
                    <AuthField
                      required={true}
                      label="Email*"
                      name="email"
                      type="email"
                      id="register-input-email"
                      placeholder="Enter your Email"
                    />
                    {/* password */}
                    <AuthField
                      required={true}
                      label="Password*"
                      name="password"
                      type="password"
                      id="register-input-password"
                      placeholder="Enter your password"
                    />
                    {/* confirm password */}
                    <AuthField
                      required={true}
                      label="Confirm Password*"
                      name="cpassword"
                      type="password"
                      id="register-input-cpassword"
                      placeholder="Enter your confirm password"
                    />
                    {/* <div className="form-group">
                  <select>
                    <option value={0}>BTC</option>
                    <option value={1}>USD</option>
                    <option value={2}>EUR</option>
                  </select>
                </div> */}
                    {/* <div className="form-group">
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
                    </div> */}
                    <div className="form-group">
                      <button type="submit" className="mybtn1">
                        {/* Take Bonus */}
                        SIGNUP
                      </button>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
            <div className="form-footer">
              <p>
                Already a memeber
                <a
                  href="#"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#login"
                >
                  Sign in <i className="fas fa-angle-double-right" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
