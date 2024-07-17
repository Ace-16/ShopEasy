import axios from 'axios'

const instance = axios.create({
  baseURL: "https://us-central1-clone-d02f5.cloudfunctions.net/api",
  // 'http://127.0.0.1:5001/clone-d02f5/us-central1/api',
  headers: {
    'Content-Type':'application/json',
  }
});

export default instance;