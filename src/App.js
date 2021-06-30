import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Lottery from "./pages/Lottery";
import Play from "./pages/Play";
import Tournaments from "./pages/Tournaments";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/play" component={Play} />
        <Route path="/lottery" component={Lottery} />
        <Route path="/tournaments" component={Tournaments} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
