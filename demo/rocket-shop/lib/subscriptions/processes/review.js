var Emitter = require('events').EventEmitter;
var util = require('util');

var ReviewProcess = function (args) {

    //make sure the app is valid
    this.ensureAppValid = function (app) {
        if(app.isValid()){
            this.emit('validated', app);
        } else {
            //TODO: Would be nice to know what's wrong
            this.emit('invalid', app.validationMessage());
        }
    };


    //find the next mission
    this.findNextMission = function (app) {
        app.mission = {
            commander:null,
            pilot:null,
            MACPilot: null,
            passengers: []
        };

        this.emit('mission-selected', app);
    };

    //make sure role selected is available
    this.roleIsAvailable = function (app) {
        //we have no concept of role selection just yet
        //TODO: What about a role? Need more info
        this.emit('role-available', app);
    };

    //make sure height/weight/age is right for role
    this.ensureRoleCompatible = function (app) {
     //TODO: find out about roles and height/weight
        this.emit('role-compatible', app);
    };

    //accept the app with a message

    this.acceptApplication = function (app) {
        //what do we do?
    };

    //deny the app with a message
    this.denyApplication = function(app) {

    }
};


util.inherits(ReviewProcess, Emitter);
module.exports = ReviewProcess;
