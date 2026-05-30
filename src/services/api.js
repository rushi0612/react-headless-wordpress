import axios from "axios";

export default axios.create({
  baseURL:
    "http://react-headless-cms.local/wp-json/wp/v2",
});