var slidesRepo = require('./../db/repositories/slides-repo'),
  typicalController = require('./../utils/typical-controller')

exports.all = typicalController.all(slidesRepo.all)