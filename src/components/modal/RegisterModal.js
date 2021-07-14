import { Formik, Form } from "formik";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/action/userAction";
import { Link, useHistory } from "react-router-dom";
import AuthField from "../form/AuthField";
import { AnimatePresence, motion } from "framer-motion";
import {
  close_register_modal,
  show_login_modal,
} from "../../store/action/modalAction";

const RegisterModal = () => {
  const history = useHistory();

  const isRegisterModal = useSelector(
    (state) => state.modalReducer.isRegisterModal
  );

  const dispatch = useDispatch();

  const [state, setState] = useState({
    errorMessage: "",
    successMessage: "",
  });
  return (
    <AnimatePresence>
      {isRegisterModal && (
        <>
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: "-100vw",
              opacity: 0,
            }}
            // initial={{ y: 50, opacity: 0 }}
            // animate={{
            //   y: 0,
            //   opacity: 1,
            // }}
            // exit={{
            //   y: -50,
            //   opacity: 0,
            // }}
            transition={{ type: "spring", bounce: 0, duration: 0.9 }}
            className="login-modal sign-in w-50"
          >
            <div
              className="modal-dialog modal-dialog-centered "
              role="document"
            >
              <div className="modal-content">
                <button
                  type="button"
                  className="close"
                  // data-dismiss="modal"
                  // aria-label="Close"
                  onClick={() => dispatch(close_register_modal())}
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-body">
                  <div className="logo-area">
                    <img
                      className="logo"
                      src="assets/images/logo.png"
                      alt="logo"
                    />
                  </div>
                  <div className="header-area">
                    <h4 className="title">Great to have you back!</h4>
                    <p className="sub-title">Enter your details below.</p>
                    {state.errorMessage && (
                      <p className="fw-bold text-danger">
                        {state.errorMessage}
                      </p>
                    )}

                    {state.successMessage && (
                      <p className="fw-bold text-success">
                        {state.successMessage}
                      </p>
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
                          dispatch(close_register_modal());
                          history.push("/");
                        }, 1000);
                      }

                      if (res.data.response === "ERROR") {
                        setState({
                          ...state,
                          successMessage: "",
                          errorMessage: res.data.message,
                        });
                      }
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
                      <Link
                        to="#"
                        data-dismiss="modal"
                        // data-toggle="modal"
                        // data-target="#login"
                        onClick={() => {
                          dispatch(close_register_modal());
                          dispatch(show_login_modal());
                        }}
                      >
                        Sign in <i className="fas fa-angle-double-right" />
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={() => dispatch(close_register_modal())}
            className="black-drawer px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default RegisterModal;
