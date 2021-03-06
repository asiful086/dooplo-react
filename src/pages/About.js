// import { Link } from "react-router-dom";

// const About = () => {
//   return (
//     <>
//       <section className="breadcrumb-area about">
//         <img
//           className="bc-img"
//           src="assets/images/breadcrumb/about.png"
//           alt="random"
//         />
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <h4 className="title">About Us</h4>
//               <ul className="breadcrumb-list">
//                 <li>
//                   <Link to="index.html">
//                     <i className="fas fa-home" />
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <span>
//                     <i className="fas fa-chevron-right" />{" "}
//                   </span>
//                 </li>
//                 <li>
//                   <Link to="about.html">About Us</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Breadcrumb Area End */}
//       {/* About page section Area Start */}
//       <section className="about-page-section">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6 d-flex align-self-center">
//               <div className="about-video">
//                 <img src="assets/images/about-video-bg.jpg" alt="random" />
//                 <Link
//                   to="https://www.youtube.com/watch?v=oj40TQirhss"
//                   className="play-video mfp-iframe"
//                 >
//                   <img src="assets/images/play-icon-red.png" alt="random" />
//                 </Link>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="section-heading">
//                 <h5 className="subtitle">Our Journey in a Nutshell</h5>
//                 <h2 className="title">About winnerpool</h2>
//                 <p className="text">
//                   winnerpool is a unique cryptogames providing pleasant pastime. We
//                   offer our members to play Provably Fair games and some bonus
//                   games, join contests, achieve various awards.
//                 </p>
//                 <p className="text">
//                   Our service is strongly user-oriented which is manifested in
//                   carefully designed UI, proactive support, low House Edge, and
//                   transparent withdrawal principles.
//                 </p>
//                 <Link to="#" className="mybtn1">
//                   Read More{" "}
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* About page section Area End */}
//       {/* Our Vision Area Start */}
//       <section className="our-vision">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 col-md-10">
//               <div className="section-heading">
//                 <h5 className="subtitle">Take a look</h5>
//                 <h2 className="title">Our vision</h2>
//                 <p className="text">
//                   We create long term value for our partners by putting
//                   innovations, data and sustainability at the very heart of our
//                   business.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-4 col-md-6">
//               <div className="single-vision">
//                 <div className="icon one">
//                   <img src="assets/images/vision/icon1.png" alt="random" />
//                 </div>
//                 <div className="content">
//                   <h4 className="title">CREATIVE</h4>
//                   <p className="text">
//                     To give back to the people that support our company
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="single-vision">
//                 <div className="icon two">
//                   <img src="assets/images/vision/icon2.png" alt="random" />
//                 </div>
//                 <div className="content">
//                   <h4 className="title">EXTENSIVE</h4>
//                   <p className="text">
//                     To give back to the people that support our company
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="single-vision">
//                 <div className="icon three">
//                   <img src="assets/images/vision/icon3.png" alt="random" />
//                 </div>
//                 <div className="content">
//                   <h4 className="title">CARING</h4>
//                   <p className="text">
//                     To give back to the people that support our company
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Our Vision Area End */}
//       {/* Features Area Start */}
//       <section className="features about-page">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 col-md-10">
//               <div className="section-heading">
//                 <h5 className="subtitle">an exhaustive list of</h5>
//                 <h2 className="title">Amazing features</h2>
//                 <p className="text">
//                   It???s up to the competition in features, with some unique
//                   advantages.All the latest crypto games.Here are some of them.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="feature-box">
//                 <div className="feature-box-inner">
//                   <div className="row">
//                     <div className="col-lg-6 col-md-6">
//                       <div className="single-feature landscape">
//                         <div className="icon one">
//                           <img
//                             src="assets/images/feature/icon1.png"
//                             alt="random"
//                           />
//                         </div>
//                         <div className="content">
//                           <h4 className="title">Exclusive Bonuses</h4>
//                           <Link to="#" className="link">
//                             read more <i className="fas fa-arrow-right" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6">
//                       <div className="single-feature landscape">
//                         <div className="icon three">
//                           <img
//                             src="assets/images/feature/payout.png"
//                             alt="random"
//                           />
//                         </div>
//                         <div className="content">
//                           <h4 className="title">Instant Payout</h4>
//                           <Link to="#" className="link">
//                             read more <i className="fas fa-arrow-right" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6">
//                       <div className="single-feature landscape">
//                         <div className="icon two">
//                           <img
//                             src="assets/images/feature/icon2.png"
//                             alt="random"
//                           />
//                         </div>
//                         <div className="content">
//                           <h4 className="title">Provably Fair</h4>
//                           <Link to="#" className="link">
//                             read more <i className="fas fa-arrow-right" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6">
//                       <div className="single-feature landscape">
//                         <div className="icon two">
//                           <img
//                             src="assets/images/feature/security.png"
//                             alt="random"
//                           />
//                         </div>
//                         <div className="content">
//                           <h4 className="title">Secure playing</h4>
//                           <Link to="#" className="link">
//                             read more <i className="fas fa-arrow-right" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6">
//                       <div className="single-feature landscape">
//                         <div className="icon three">
//                           <img
//                             src="assets/images/feature/reward.png"
//                             alt="random"
//                           />
//                         </div>
//                         <div className="content">
//                           <h4 className="title">Rewarsd</h4>
//                           <Link to="#" className="link">
//                             read more <i className="fas fa-arrow-right" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6">
//                       <div className="single-feature landscape">
//                         <div className="icon four">
//                           <img
//                             src="assets/images/feature/icon3.png"
//                             alt="random"
//                           />
//                         </div>
//                         <div className="content">
//                           <h4 className="title">24/7 Support</h4>
//                           <Link to="#" className="link">
//                             read more <i className="fas fa-arrow-right" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Features Area End */}
//       {/* Team Area Start */}
//       <section className="team">
//         <div className="top-area">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-8 col-md-10">
//                 <div className="section-heading">
//                   <h5 className="subtitle">an exhaustive list of</h5>
//                   <h2 className="title">Amazing features</h2>
//                   <p className="text">
//                     It???s up to the competition in features, with some unique
//                     advantages.All the latest crypto games.Here are some of
//                     them.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="team-members">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="team-member-inner">
//                   <div className="row">
//                     <div className="col-lg-3 col-md-6">
//                       <div className="single-team">
//                         <div className="image">
//                           <img
//                             src="assets/images/team/team1.png"
//                             alt="random"
//                           />
//                           <div className="overlay" />
//                           <div className="content">
//                             <h4 className="name">Neal Ryan</h4>
//                             <div className="designation">
//                               Co-Founder &amp; CEO
//                             </div>
//                           </div>
//                         </div>
//                         <div className="social-area">
//                           <ul className="social-links">
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-f" />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter" />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram" />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-pinterest-p" />
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6">
//                       <div className="single-team">
//                         <div className="image">
//                           <img
//                             src="assets/images/team/team2.png"
//                             alt="random"
//                           />
//                           <div className="overlay" />
//                           <div className="content">
//                             <h4 className="name">Neal Ryan</h4>
//                             <div className="designation">
//                               Co-Founder &amp; CEO
//                             </div>
//                           </div>
//                         </div>
//                         <div className="social-area">
//                           <ul className="social-links">
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-f" />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter" />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram" />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-pinterest-p" />
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6">
//                       <div className="single-team">
//                         <div className="image">
//                           <img
//                             src="assets/images/team/team3.png"
//                             alt="random"
//                           />
//                           <div className="overlay" />
//                           <div className="content">
//                             <h4 className="name">Neal Ryan</h4>
//                             <div className="designation">
//                               Co-Founder &amp; CEO
//                             </div>
//                           </div>
//                         </div>
//                         <div className="social-area">
//                           <ul className="social-links">
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-f" />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter" />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram" />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-pinterest-p" />
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-lg-3 col-md-6">
//                       <div className="single-team">
//                         <div className="image">
//                           <img
//                             src="assets/images/team/team4.png"
//                             alt="random"
//                           />
//                           <div className="overlay" />
//                           <div className="content">
//                             <h4 className="name">Neal Ryan</h4>
//                             <div className="designation">
//                               Co-Founder &amp; CEO
//                             </div>
//                           </div>
//                         </div>
//                         <div className="social-area">
//                           <ul className="social-links">
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-facebook-f" />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-twitter" />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-instagram" />
//                               </Link>
//                             </li>
//                             <li>
//                               <Link to="#">
//                                 <i className="fab fa-pinterest-p" />
//                               </Link>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-12 text-center">
//                 <Link to="#" className="mybtn1">
//                   SEE All of our Team
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Team Area End */}
//       {/* community and Blog Area Start */}
//       <div className="community-blog">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <div className="single-box">
//                 <div className="img">
//                   <img
//                     src="assets/images/team/community-icon.png"
//                     alt="random"
//                   />
//                 </div>
//                 <div className="content">
//                   <h4 className="title">
//                     <Link to="#">
//                       Community <i className="fas fa-arrow-right" />
//                     </Link>
//                   </h4>
//                   <p className="text">
//                     Find answers, support, and inspiration from other Jeugo
//                     users.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="single-box">
//                 <div className="img">
//                   <img src="assets/images/team/blog-icon.png" alt="random" />
//                 </div>
//                 <div className="content">
//                   <h4 className="title">
//                     <Link to="#">
//                       Blogs <i className="fas fa-arrow-right" />
//                     </Link>
//                   </h4>
//                   <p className="text">
//                     Find answers, support, and inspiration from other Jeugo
//                     users.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;
