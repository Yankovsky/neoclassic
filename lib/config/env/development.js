module.exports = {
  env: 'development',
  pg: {
    uri: 'postgres://postgres:root@localhost/neoclassicdev'
  },
  mongo: {
    uri: 'mongodb://localhost/session-storage-dev'
  }
}