function calc() {
    var one = document.getElementById("one");
    var one1 = one.value;
    var one2 = parseInt(one1);
    var two = document.getElementById("two");
    var two1 = two.value;
    var two2 = parseInt(two1);
    var result1;
    var operator = document.getElementById("operator");
    var operator1 = operator.value;
    switch (operator1) {
        case "plus":result1 = one2 + two2; document.getElementById("result").value=result1;break;
        case "minus":result1 = one2 - two2; document.getElementById("result").value=result1;break;
        case "multi":result1 = one2 * two2; document.getElementById("result").value=result1;break;
        case "divi":result1 = one2 / two2; document.getElementById("result").value=result1;break;
    }
}