import axios from "axios";
import notification from "../utils/antd-notifications";

import { history } from '../App';

const instance = axios.create({
  baseURL: "http://localhost:3000/api/"
});

instance.interceptors.response.use(null, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        localStorage.setItem("isAuthenticated", false);
        localStorage.setItem("token", "");
        window.location.reload();
        notification.openAuthWarningNotification();
        history.push("/login");
        break;
      case 404:
        history.replace("/not-found");
        break;
      case 500:
        notification.openServerErrorNotification();
        history.replace("/server-error");
        break;
      default:
        if (error.response.status !== 400) {
          notification.openUncommonErrorNotification();
          console.log(error.response.status)
        }
    }
  }
  return Promise.reject(error);
});

const token = localStorage.getItem("token");

instance.defaults.headers.common["Authorization"] = token;

export default instance;
