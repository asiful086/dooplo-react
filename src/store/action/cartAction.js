import axios from "axios";
export const addToCart = (item) => {
  console.log(item);
  return {
    type: "ADD",
    payload: item,
  };
};

export const ticketsFetch = (userid) => {
  var formData = new FormData();
  formData.append("userid", userid);

  return (dispatch) => {
    axios
      .post("https://easylifeyes.com/lottery/get_my_cart", formData)
      .then((res) => {
        console.log("from cart tickets", res.data.dataArr);
        dispatch({
          type: "FETCH_TICKETS",
          payload: res.data.dataArr,
        });
      });
  };
};
