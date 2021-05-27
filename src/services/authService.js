import axios from "../config/httpClient";
import { openErrorNotification } from "../utils/antd-notifications";


export async function register(data) {
  try {
    const res = await axios.post("users", data);
    if (res && res.data) return res.data;
  } catch (ex) {
    switch (ex.response.data.errorCode) {
      case 600:
        openErrorNotification("This E-mail already exists");
        break;
      case 601:
        openErrorNotification("Please enter a valid E-mail!");
        break;
      case 602:
        openErrorNotification("please enter a strong password");
        break;
      case 604:
        openErrorNotification("please enter a valid name");
        break;
      default:
        openErrorNotification("Something went wrong, please try again");
        break;
    }
    return false;
  }
}


export async function login(user) {
  try {
    const res = await axios.post("auth", user);
    if (res && res.data) return res.data;

  } catch (ex) {
    switch (ex.response.data.errorCode) {
      case 605:
        openErrorNotification("Email doesn’t exist");
        break;
      case 607:
        openErrorNotification("Wrong password, please try again");
        break;
      case 606:
        openErrorNotification("This account is not activated");
        break;
      default:
        openErrorNotification("Something went wrong, please try again");
        break;
    }
    return false;
  }
}

export async function logout() {
  try {
    localStorage.setItem("isAuthenticated", false);
    localStorage.setItem("token", "");
    return true;
  } catch (ex) {
    openErrorNotification("Something went wrong, please try again");
    return false;

  }
}
