import axios from "axios";

const getLiveVideo = () => {
    return axios.get(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_LIVE}`)
}

export default getLiveVideo;