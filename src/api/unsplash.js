import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',

    headers: {
        Authorization: 'Client-ID qzz7_X5NC72QeXfp8n0O6qwA0Oh8NAZtC3EWtO6YCe4'
    }


});