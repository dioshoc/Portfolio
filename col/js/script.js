function Name(first, second, opend) {
    let a = 0
    if (!parseInt(first && second)) {
        console.log("Введен неверный формат данных")
    } else {
        if (opend === "+") {
            a = +first + +second
        } else if (opend === "") {
            a = +first + +second
        } else if (opend === "-") {
            a = +first - +second
        } else if (opend === "*") {
            a = +first * +second
        } else if (opend === "/") {
            a = +first / +second
        } else if (opend === "pow") {
            opend = "**"
            a = first ** second

        } else {
            console.log("Введен неверный оператор")
        }
        return console.log(` ${a} (${first} ${opend} ${second} = ${a})`)
    }
}
const dog = this.Name(2, "3", "pow")