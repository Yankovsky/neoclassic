module.exports = {
  env: 'production',
  pg: {
    uri: process.env.HEROKU_POSTGRESQL_AMBER_URL ||
      'postgres://postgres:root@localhost/neoclassicdev'
  },
  mongo: {
    uri: process.env.MONGOLAB_URI ||
      process.env.MONGOHQ_URL ||
      'mongodb://localhost/session-storage'
  }
}