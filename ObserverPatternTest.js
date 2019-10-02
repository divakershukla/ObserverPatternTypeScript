"use strict";
exports.__esModule = true;
var ObserverPattern_1 = require("./ObserverPattern");
var ws1 = new ObserverPattern_1.WinterStation();
var tempDisplay1 = new ObserverPattern_1.TempDisplay();
var fan1 = new ObserverPattern_1.Fan();
ws1.addObserver(tempDisplay1);
ws1.addObserver(fan1);
ws1.setTemp(20);
