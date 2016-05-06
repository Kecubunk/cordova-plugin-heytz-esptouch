var exec = require('cordova/exec');

exports.setDeviceWifi = function(arg0, success, error) {
    exec(success, error, "HeytzEsptouch", "setDeviceWifi", [arg0]);
};
