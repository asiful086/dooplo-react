import { Formik, Form } from "formik";
import axios from "axios";
import AuthField from "../form/AuthField";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/action/userAction";
import { ticketsFetch } from "../../store/action/cartAction";
import { AnimatePresence, motion } from "framer-motion";
import {
  close_ticket_modal,
  show_register_modal,
} from "../../store/action/modalAction";
import { useState } from "react";

const TicketModal = (props) => {
  const history = useHistory();
  const isTicketModal = useSelector(
    (state) => state.modalReducer.isTicketModal
  );

  const dispatch = useDispatch();

  const [state, setState] = useState({
    errorMessage: "",
    successMessage: "",
  });
  return (
    <AnimatePresence>
      {isTicketModal && (
        <>
          <motion.div
            initial={{ y: "100vw", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: "-100vw",
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            className="login-modal"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content w-100">
                <button
                  type="button"
                  className="close"
                  onClick={() => {
                    props.unSelectTicket(props.selectedTickets[0]);
                    dispatch(close_ticket_modal());
                  }}
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-body">
                  <div className="logo-area">
                    <img
                      className="logo"
                      src="../../assets/images/logo.png"
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
                      price: "",
                    }}
                    onSubmit={async (values, { setErrors }) => {
                      if (parseInt(values.price) === 0) {
                        return setErrors({ price: "price is not valid" });
                      } else {
                        props.handleCallback(values);
                      }
                    }}
                  >
                    {({ values, isSubmitting, errors }) => (
                      <div className="form-area">
                        <Form>
                          {/* Price */}
                          <AuthField
                            required={true}
                            label="Price"
                            name="price"
                            type="text"
                            id="login-input-price"
                            placeholder="Enter your price"
                          />

                          <div className="form-group">
                            <button type="submit" className="mybtn1">
                              Book Ticket
                            </button>
                          </div>
                        </Form>
                      </div>
                    )}
                  </Formik>
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
            onClick={() => {
              props.unSelectTicket(props.selectedTickets[0]);
              dispatch(close_ticket_modal());
            }}
            className="black-drawer"
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default TicketModal;
