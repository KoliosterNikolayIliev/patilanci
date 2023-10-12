import axios from "axios";

const getLiveVideo = () => {
    return axios.get(`${process.env.REACT_APP_API_URL}/balance/`)
}

export default getLiveVideo;