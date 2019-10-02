import { WinterStation, TempDisplay, Fan } from "./ObserverPattern";


let ws1 = new WinterStation();
let tempDisplay1 = new TempDisplay();
let fan1 = new Fan();

ws1.addObserver(tempDisplay1);
ws1.addObserver(fan1);

ws1.setTemp(20);
