import axios from "axios";
const baseDomain = "http://localhost:8080/"; //For Strapi
const baseURL = `${baseDomain}`; // Incase of /api/v1;
// ALL DEFAULT CONFIGURATION HERE
export default axios.create({
    baseURL,
    headers: {
        // "Authorization": "Bearer xxxxx"
    }
});
