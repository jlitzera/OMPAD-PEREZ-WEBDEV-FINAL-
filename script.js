function convert() {
  let num = document.getElementById("inputNumber").value;
  let fromBase = parseInt(document.getElementById("fromSystem").value);
  let toBase = parseInt(document.getElementById("toSystem").value);
  let result = "";

  try {
    let decimalValue = parseInt(num, fromBase);

    result = decimalValue.toString(toBase).toUpperCase();

    document.getElementById("result").innerText = "Result: " + result;
  } catch (error) {
    document.getElementById("result").innerText = "Invalid input!";
  }
}