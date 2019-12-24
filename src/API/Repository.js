import axios from 'axios';

const baseDomain = "https://admin-htactive.herokuapp.com"

const baseURL = `${baseDomain}/api`

export default axios.create({
    baseURL
})