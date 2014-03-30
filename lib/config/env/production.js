module.exports = {
  env: 'production',
  pg: {
    uri: process.env.DATABASE_URL ||
      'postgres://postgres:root@localhost/neoclassicprod'
  },
  mongo: {
    uri: process.env.MONGOLAB_URI ||
      process.env.MONGOHQ_URL ||
      'mongodb://localhost/fullstack'
  }
}