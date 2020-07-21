const contentful = require("contentful");

module.exports = contentful.createClient({
  space: process.env.VUE_APP_SPACE_ID,
  accessToken: process.env.VUE_APP_CONTENTFUL,
});
