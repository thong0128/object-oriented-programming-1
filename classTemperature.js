class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }
    toFahrenheit() {
        return 9/5 * this.celsius + 32;
    }
    toKelvins() {
        return this.celsius + 273.15
    }
}

let temperature = new Temperature(25);
let myFahrenheit = temperature.toFahrenheit();
let myKelvins = temperature.toKelvins();

document.write("Nhiệt độ K: " + myKelvins + "<br>" + "Nhiệt độ F: " + myFahrenheit);