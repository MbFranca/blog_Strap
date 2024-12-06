const axios = require('axios');

module.exports = {
  async afterCreate(result, data) {

    await axios.post('https://api.netlify.com/build_hooks/67521a801f8b892092f17d8a')
    },

  async afterUpdate(result, params, data ) {
    
    await axios.post('https://api.netlify.com/build_hooks/67521a801f8b892092f17d8a')
    },
};
