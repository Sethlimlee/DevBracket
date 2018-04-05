import axios from "axios";

const initialState = {
  user: {}
};

const UPDATE_USER_INFO = "UPDATE_USER_INFO";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO + "_FULFILLED":
    // const {class, descr, id, img, name, sport, team_name, userid} = action.payload;
      return {...state, user:{...action.payload, team_name: action.payload.team_name, userid: action.payload.userid}}
    default:
      return state;
  }
}

export function getUserInfo() {
  const userData = axios.get("/login/me").then(res => {
    console.log(res.data);
    return res.data;
  });

  return {
    type: UPDATE_USER_INFO,
    payload: userData
  };
}
