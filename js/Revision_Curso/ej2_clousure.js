function printName() {
    let helloName = "Hello John";
    function inner() {

        setTimeout(() => {
            console.log(helloName);

        }, 5000);
    }
    return inner;
}
let variable = printName();
variable();
