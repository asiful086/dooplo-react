import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import { show_login_modal } from "../store/action/modalAction";
import { auth } from "../utilityfunc";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const isLoginModal = useSelector((state) => state.modalReducer.isLoginModal);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      dispatch(show_login_modal());
    }
  }, [dispatch]);
  if (!localStorage.getItem("user")) {
    return null;
  }

  return (
    <Switch>
      <Route
        {...rest}
        render={(props) => {
          if (auth()) {
            return <Component {...props} />;
          }
        }}
      />
    </Switch>
  );
};

export default ProtectedRoute;

//  <Switch>
//     <Route
//       {...rest}
//       render={(props) => {
//         if (localStorage.getItem("user")) {
//           return <Component {...props} />;
//         } else {
//           dispatch(show_login_modal());
//           // return <Redirect to="/404" />;
//         }
//       }}
//     />
//   </Switch>
