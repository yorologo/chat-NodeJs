const config = {
  dbUrl:
    process.env.DB_URL ||
    "mongodb+srv://db_newUser:6MxEPqi3aQQnjjCM@cluster0.yebum.mongodb.net/CursoNodeJS?retryWrites=true&w=majority",
  port: process.env.PORT || 3000,
  host: process.env.HOST || "http://localhost",
  publicRoute: process.env.PUBLIC_ROUTE || "/app",
  filesRoute: process.env.FILES_ROUTE || "files",
};

module.exports = config;
