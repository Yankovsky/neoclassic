var should = require('should')

var user

describe('User Model', function() {
  before(function(done) {
    user = new usersRepo({
      provider: 'local',
      name: 'Fake User',
      email: 'test@test.com',
      password: 'password'
    })

    // Clear users before testing
    usersRepo.remove().exec()
    done()
  })

  afterEach(function(done) {
    usersRepo.remove().exec()
    done()
  })

  it('should begin with no users', function(done) {
    usersRepo.find({}, function(err, users) {
      users.should.have.length(0)
      done()
    })
  })

  it('should fail when saving a duplicate user', function(done) {
    user.save()
    var userDup = new usersRepo(user)
    userDup.save(function(err) {
      should.exist(err)
      done()
    })
  })

  it('should fail when saving without an email', function(done) {
    user.email = ''
    user.save(function(err) {
      should.exist(err)
      done()
    })
  })

  it("should authenticate user if password is valid", function() {
    user.authenticate('password').should.be.true
  })

  it("should not authenticate user if password is invalid", function() {
    user.authenticate('blah').should.not.be.true
  })

})