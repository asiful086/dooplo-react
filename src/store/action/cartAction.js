import axios from "axios";
export const addToCart = (item) => {
  // console.log(item);
  return {
    type: "ADD",
    payload: item,
  };
};

export const ticketsFetch = (userid) => {
  // console.log("user id from ticketsFetch", userid);
  var formData = new FormData();
  formData.append("userid", userid);

  return (dispatch) => {
    axios
      .post("https://webcab.in/lottery/get_my_cart", formData)
      .then((res) => {
        if (res.data.message === "No tickets in your cart.") {
          // console.log("from cart tickets", res.data);
          dispatch({
            type: "FETCH_TICKETS",
            payload: [],
          });
        }
        if (res.data.dataArr) {
          dispatch({
            type: "FETCH_TICKETS",
            payload: res.data.dataArr,
          });
        }
      });
  };
};
