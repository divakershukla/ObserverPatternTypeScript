"use strict";
exports.__esModule = true;
var WinterStation = /** @class */ (function () {
    function WinterStation() {
        this.observers = [];
    }
    WinterStation.prototype.setTemp = function (netTemp) {
        this.temp = netTemp;
        console.log("new tem set in weather station: " + this.temp);
        this.notifyObservers();
    };
    WinterStation.prototype.addObserver = function (obj) {
        this.observers.push(obj);
    };
    WinterStation.prototype.removeObserver = function (obj) {
        var index = this.observers.indexOf(obj);
        this.observers.splice(index, 1);
    };
    WinterStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temp);
        }
    };
    return WinterStation;
}());
exports.WinterStation = WinterStation;
var TempDisplay = /** @class */ (function () {
    function TempDisplay() {
    }
    TempDisplay.prototype.update = function (temp) {
        if (temp > 25) {
            console.log("temp is greater than 25");
        }
        else {
            console.log("temp is less than 25");
        }
    };
    return TempDisplay;
}());
exports.TempDisplay = TempDisplay;
var Fan = /** @class */ (function () {
    function Fan() {
    }
    Fan.prototype.update = function (temp) {
        if (temp > 25) {
            console.log("turn of fan");
        }
        else {
            console.log("turn on fan");
        }
    };
    return Fan;
}());
exports.Fan = Fan;
