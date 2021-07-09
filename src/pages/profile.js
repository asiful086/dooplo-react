import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import AuthField from "../components/form/AuthField";
import { useEffect } from "react";

const Profile = ({ match }) => {
  // const dispatch = useDispatch();

  const [profileData, setProfileData] = useState("");
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    errorMessage: "",
    successMessage: "",
    states: [],
    cities: [],
  });

  useEffect(() => {
    // fetching user profile data
    setLoading(true);
    var formData = new FormData();
    formData.append("userid", match.params.id);
    // formData.append("userid", 4);
    axios
      .post("https://easylifeyes.com/lottery/get_user_profile", formData)
      .then((res) => {
        setProfileData(res.data.data[0]);
      });

    axios.get("https://easylifeyes.com/lottery/get_states").then((res) => {
      let all_state = res.data.data;
      axios.post("https://easylifeyes.com/lottery/get_cities").then((res) => {
        // console.log("indisde city", res.data);
        setState({
          ...state,
          states: all_state,
          cities: res.data.data,
        });
        setLoading(false);
      });
    });
  }, []);

  // console.log("sldkfjsl", profileData);
  if (loading) {
    return <h1>loading</h1>;
  }

  console.log(profileData);

  return (
    <>
      {/* Breadcrumb Area Start */}
      <section className="breadcrumb-area bc-contact">
        <img
          className="bc-img"
          src="../../assets/images/breadcrumb/contact.png"
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
          src="../../assets/images/contact-left.png"
          alt="banner"
        />
        <div className="container">
          {/* <div className="row justify-content-center">
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
          </div> */}
          <Formik
            initialValues={{
              userid: match.params.id,
              name: profileData && profileData.name,
              email: profileData.email,
              contact_no: profileData.contact_no,
              street_address: profileData.street_address,
              locality: profileData.locality,
              state_id: profileData.state_id,
              city_id: profileData.city_id,
              account_holder_name: profileData.account_holder_name,
              account_no: profileData.account_no,
              ifsc_code: profileData.ifsc_code,
              bank_name: profileData.bank_name,
            }}
            onSubmit={async (values, actions) => {
              var formData = new FormData();
              formData.append("userid", values.userid);
              formData.append("name", values.name);
              formData.append("email", values.email);
              formData.append("contact_no", values.contact_no);
              formData.append("street_address", values.street_address);
              formData.append("locality", values.locality);
              formData.append("state_id", values.state_id);
              formData.append("city_id", values.city_id);
              formData.append(
                "account_holder_name",
                values.account_holder_name
              );
              formData.append("account_no", values.account_no);
              formData.append("ifsc_code", values.ifsc_code);
              formData.append("bank_name", values.bank_name);
              let res = await axios.post(
                "https://easylifeyes.com/lottery/save_profile",
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
                          readOnly
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
                          // required={true}
                          name="street_address"
                          type="text"
                          id="profile-input-street_address"
                          placeholder="your Street Address"
                        />
                        {/* locality */}
                        <AuthField
                          // required={true}
                          name="locality"
                          type="text"
                          id="profile-input-locality"
                          placeholder="Enter your Locality"
                        />
                        {/* state */}
                        <div className="">
                          <Field
                            as="select"
                            // className="profileSelect rounded-pill px-2 py-1 w-100 my-1"
                            className="profileSelect"
                            placeholder="Regular input"
                            name="state_id"
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
                        {/* city */}
                        <div className="">
                          <Field
                            as="select"
                            className="profileSelect"
                            placeholder="Regular input"
                            name="city_id"
                          >
                            <option value="">Select city</option>
                            {state.cities
                              .filter(
                                (city) => city.state_id === values.state_id
                              )
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
                {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                <pre>{JSON.stringify(errors, null, 2)}</pre> */}
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Profile;
