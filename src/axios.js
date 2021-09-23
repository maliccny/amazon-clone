import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-108f0.cloudfunctions.net/api" //THE API(cloud function) URL
  // "http://localhost:5001/challenge-108f0/us-central1/api"
})

export default instance;