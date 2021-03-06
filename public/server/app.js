/**
 * Created by sumeetdubey on 3/17/16.
 // */
module.exports = function(app, mongoose, passport) {
    var userModel = require("./models/user.model.server.js")(app, mongoose);
    var tutorialModel = require("./models/tutorial.model.server.js")(app, mongoose);
    var lessonModel = require("./models/lesson.model.server.js")(app, mongoose);

    var userService = require("./services/user.service.server.js")(app, userModel, passport);
    var tutorialService = require("./services/tutorial.service.server.js")(app, tutorialModel);
    var lessonService = require("./services/lesson.service.server.js")(app, lessonModel);
};