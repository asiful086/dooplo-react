import { Route, Switch, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import About from "./pages/About";
// import Affiliate from "./pages/Affiliate";
// import Awards from "./pages/Awards";
// import Bonus from "./pages/Bonus";
import Cart from "./pages/Cart";
// import ConditionDetails from "./pages/ConditionDetails";
// import Contact from "./pages/Contact";
// import Faq from "./pages/Faq";
import Four0Four from "./pages/Four0Four";
import Home from "./pages/Home";
// import HowItWork from "./pages/HowItWork";
import Lottery from "./pages/Lottery";
// import Play from "./pages/Play";
// import TermsAndCondition from "./pages/TermsAndCondition";
// import Tournaments from "./pages/Tournaments";

import "./App.css";
import Profile from "./pages/profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { auth } from "./utilityfunc";

const App = () => {
  let urlName = useLocation().pathname;
  let isExists = urlName.includes("404");

  return (
    <>
      {!isExists && <Header />}
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => {
            if (auth()) {
              return <Home {...props} />;
            }
          }}
        />
        {/* <Route path="/play" component={Play} />
        <Route path="/lottery" component={Lottery} />
        <Route path="/tournaments" component={Tournaments} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/affiliate" component={Affiliate} />
        <Route path="/awards" component={Awards} />
        <Route path="/bonus" component={Bonus} /> */}
        <ProtectedRoute path="/checkout" component={Cart} />
        {/* <Route path="/faq" component={Faq} />
        <Route path="/how-it-work" component={HowItWork} />
        <Route path="/terms-and-condition" component={TermsAndCondition} />
        <Route path="/condition-details" component={ConditionDetails} /> */}
        <Route path="/404" component={Four0Four} />
        <ProtectedRoute path="/profile/:id" component={Profile} />
        <ProtectedRoute exact path="/contest/:id" component={Lottery} />
        {/* <Route path="/profile/:id" component={Profile} /> */}
      </Switch>
      {!isExists && <Footer />}
    </>
  );
};

export default App;

// this is app
