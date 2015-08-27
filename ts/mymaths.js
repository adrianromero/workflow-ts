
function add(a, b) {
    return a + b;
}
exports.add = add;

var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting + '!';
    };
    return Greeter;
})();
exports.Greeter = Greeter;
