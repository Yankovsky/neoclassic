module.exports = {
  env: 'test',
  pg: {
    uri: 'postgres://postgres:root@localhost/neoclassictest'
  },
  mongo: {
    uri: 'mongodb://localhost/session-storage-test'
  }
}