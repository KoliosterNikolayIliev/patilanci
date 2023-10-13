import axios from "axios";

const getLiveVideo = () => {
//    return axios.get(`${process.env.REACT_APP_API_URL}/balance/`)
    return axios.get('http://127.0.0.1:8000/api/live-video')
}

export default getLiveVideo;