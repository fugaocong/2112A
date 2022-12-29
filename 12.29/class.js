var People = /** @class */ (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.sport = function () {
        return "".concat(this.name, "\u62BD\u70DF");
    };
    return People;
}());
var p = new People("黑蛋", 1);
console.log(p.sport());
