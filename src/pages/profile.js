import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthField from "../components/form/AuthField";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    errorMessage: "",
    successMessage: "",
    states: [],
    cities: [],
  });
  useEffect(() => {
    axios.get("https://easylifeyes.com/lottery/get_states").then((res) => {
      // console.log(res.data.data);
      let all_state = res.data.data;
      axios.post("https://easylifeyes.com/lottery/get_cities").then((res) => {
        console.log("indisde city", res.data);
        setState({
          ...state,
          states: all_state,
          cities: [
            {
              city_id: "55",
              state_id: "5",
              city_name: "Araria",
            },
            {
              city_id: "57",
              state_id: "5",
              city_name: "Banka",
            },
            {
              city_id: "58",
              state_id: "5",
              city_name: "Begusarai",
            },
          ],
        });
      });
    });
  }, []);

  return (
    <>
      {/* Breadcrumb Area Start */}
      <section className="breadcrumb-area bc-contact">
        <img
          className="bc-img"
          src="assets/images/breadcrumb/contact.png"
          alt="banner"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="title">Profile</h4>
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
                  <a href="contact.html">Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Area End */}
      {/* Contact Area End */}
      <section className="contact">
        <img
          className="left-img"
          src="assets/images/contact-left.png"
          alt="banner"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-heading">
                <h5 className="subtitle">Contact Us</h5>
                <h2 className="title">Get in Touch</h2>
                <p className="text">
                  It’s up to the competition in features, with some unique
                  advantages.All the latest crypto games.Here are some of them.
                </p>
              </div>
            </div>
          </div>
          <Formik
            initialValues={{
              // email: "prashant@webcab.in",
              // password: "qwertyui",
              name: "",
              email: "",
              contact_no: "",
              street_address: "",
              locality: "",
              state: "",
              city: "",
              account_holder_name: "",
              account_no: "",
              ifsc_code: "",
              bank_name: "",
            }}
            onSubmit={async (values, actions) => {
              // window.document.getElementById("#login").modal("hide");
              // document.getElementById("#login").hide();
              console.log("from", window.document.getElementById("#login"));
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
                // dispatch(login(res.data.dataArr));
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
              <Form>
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-6">
                    <div className="contact-form-wrapper">
                      <div className="contact-box">
                        <h4 className="title">Basic Information</h4>

                        {/* name */}
                        <AuthField
                          required={true}
                          name="name"
                          type="text"
                          id="register-input-name"
                          placeholder="Enter your Name"
                        />
                        {/* email */}
                        <AuthField
                          required={true}
                          name="email"
                          type="email"
                          id="profile-input-email"
                          placeholder="Enter your Email"
                        />
                        {/* contact_no */}
                        <AuthField
                          required={true}
                          name="contact_no"
                          type="text"
                          id="profile-input-contact_no"
                          placeholder="Enter your Contact Number"
                        />
                        {/* street_address */}
                        <AuthField
                          required={true}
                          name="street_address"
                          type="text"
                          id="profile-input-street_address"
                          placeholder="your Street Address"
                        />
                        {/* locality */}
                        <AuthField
                          required={true}
                          name="locality"
                          type="text"
                          id="profile-input-locality"
                          placeholder="Enter your Locality"
                        />
                        {/* state */}
                        <div className="relative inline-block w-full text-gray-700 ">
                          <Field
                            as="select"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 relative 
                        bg-white rounded text-sm shadow outline-none focus:outline-none 
                        focus:shadow-outline w-full border"
                            placeholder="Regular input"
                            name="state"
                          >
                            <option value="">Select state</option>

                            {state.states &&
                              state.states.map((st) => (
                                <option value={st.state_id} key={st.state_id}>
                                  {st.state_name}
                                </option>
                              ))}
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="state"
                            className="text-red-500"
                          />
                        </div>
                        {/* <AuthField
                          required={true}
                          name="state"
                          type="text"
                          id="profile-input-state"
                          placeholder="Enter your state"
                        /> */}
                        {/* city */}
                        <div className="relative inline-block w-full text-gray-700 ">
                          <Field
                            as="select"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 relative 
                        bg-white rounded text-sm shadow outline-none focus:outline-none 
                        focus:shadow-outline w-full border"
                            placeholder="Regular input"
                            name="city"
                          >
                            <option value="">Select city</option>
                            {state.cities
                              .filter((city) => city.state_id === values.state)
                              .map((city) => (
                                <option value={city.city_id} key={city.city_id}>
                                  {city.city_name}
                                </option>
                              ))}

                            {/* {state.cities &&
                              state.cities.map((city) => (
                                <option value={city.city_id} key={city.city_id}>
                                  {city.city_name}
                                </option>
                              ))} */}
                          </Field>
                          <ErrorMessage
                            component="div"
                            name="city"
                            className="text-red-500"
                          />
                        </div>
                        {/* <AuthField
                          required={true}
                          name="city"
                          type="text"
                          id="profile-input-city"
                          placeholder="Enter your city"
                        /> */}
                      </div>
                      <div className="contact-box">
                        <h4 className="title">Bank Details</h4>
                        {/* account_holder_name */}
                        <AuthField
                          required={true}
                          name="account_holder_name"
                          type="text"
                          id="profile-input-account_holder_name"
                          placeholder="Account Holder Name"
                        />
                        {/* account_no */}
                        <AuthField
                          required={true}
                          name="account_no"
                          type="text"
                          id="profile-input-account_no"
                          placeholder="Account Number"
                        />
                        {/* ifsc_code */}
                        <AuthField
                          required={true}
                          name="ifsc_code"
                          type="text"
                          id="profile-input-ifsc_code"
                          placeholder="IFSC Code"
                        />
                        {/* bank_name */}
                        <AuthField
                          required={true}
                          name="bank_name"
                          type="text"
                          id="profile-input-bank_name"
                          placeholder="Bank Name"
                        />

                        <button type="submit" className="mybtn1">
                          SUBMIT NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <pre>{JSON.stringify(values, null, 2)}</pre>
                <pre>{JSON.stringify(errors, null, 2)}</pre>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Profile;
