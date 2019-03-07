import axios from "axios";

const KEY = "AIzaSyDuqMHawRv-WF9cTTgpNfhhV110a9_pp9I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    maxResults: "5",
    part: "snippet",
    type: "",
    key: KEY
  }
});
