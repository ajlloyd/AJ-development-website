require('dotenv').config();
const mongoUsername = process.env.MONGO_USERNAME_ENV;
const mongoPassword = process.env.MONGO_PASSWORD_ENV;

module.exports = {
  reactStrictMode: true,
  env:{
    MONGO_URI: `mongodb+srv://${mongoUsername}:${mongoPassword}@longsword.b2vea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  },

  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
  

}

