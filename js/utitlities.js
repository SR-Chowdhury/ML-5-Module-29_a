function getPin() {
    const pin = pinGenerator();
    if (pin.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function pinGenerator() {

    const randomValue = Math.round(Math.random()*10000);
    const radomConcatValue = randomValue+'';
    return radomConcatValue;

}

function setInputValue(elementId, elementValue) {

    const element = document.getElementById(elementId);
    element.value = elementValue;
}

function countLeft(n) {
    let count = 1;
    count = count + n;
    return count;
}