var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");

function decToBin(val) {
    // console.log("called decToBin");
    var str = val.toString();
    // console.log(str);
    var bin = (+str).toString(2);
    // console.log(bin);
    text2.value = bin;
}

function decToHex(val) {
    // console.log("called decToHex");
    var str = val.toString();
    var hex = (+str).toString(16).toUpperCase();
    // console.log(hex);
    text2.value = hex;
}

function binToDec(val) {
    // console.log("called binToDec");
    var str = val.toString();
    var dec = parseInt(str, 2);
    // console.log(dec);
    text2.value = dec;
}

function binToHex(val) {
    // console.log("called binToHex");
    var str = val.toString();
    var hex = parseInt(str, 2).toString(16);
    // console.log(hex);
    text2.value = hex;
}

function hexToDec(val) {
    // console.log("called hexToDec");
    var str = val.toString();
    var dec = parseInt(str, 16);
    // console.log(dec);
    text2.value = dec;
}

function hexToBin(val) {
    // console.log("called hexToBin");
    // convert to decimal first
    var str = val.toString();
    var dec = parseInt(str, 16);

    //now convert to binary
    var str2 = dec.toString();
    var bin = (+str2).toString(2);
    text2.value = bin;
}

function checkDec(val) {
    var str = val.toString();
    for (var i = 0; i < str.length; ++i) {
        if (isNaN(str.charAt(i))) {
            // console.log("nan");
            return false;
        }
    }
    return true;
}

function checkBin(val) {
    var str = val.toString();
    for (var i = 0; i < str.length; ++i) {
        if (str.charAt(i) != 0 && str.charAt(i) != 1) {
            // console.log("num is not a bin");
            return false;
        }
    }
    return true;
}

function changeBG() {
    var hex = text2.value; // only dealing with "*** to hex" conversion for now
    var hexStr = "#" + hex;
    // console.log(hexStr);
    document.body.style.backgroundColor = hexStr;
}

function convert() {
    var x = document.getElementById("from");
    var y = document.getElementById("to");
    var selectedVal1 = x.options[x.selectedIndex].value;
    var selectedVal2 = y.options[y.selectedIndex].value;

    if (selectedVal1 == "decimal") {
        if (checkDec(text1.value)) {
            if (selectedVal2 == "binary") {
                decToBin(text1.value);
            }
            else if (selectedVal2 == "hex") {
                decToHex(text1.value);
                changeBG();
            }
            else {
                text2.value = text1.value;
            }
        }
        else {
            alert("Not a valid decimal number");
        }
    }
    else if (selectedVal1 == "binary") {
        if (checkBin(text1.value)) {
            if (selectedVal2 == "decimal") {
                binToDec(text1.value);
            }
            else if (selectedVal2 == "hex") {
                binToHex(text1.value);
                changeBG();
            }
            else {
                text2.value = text1.value;
            }
        }
        else {
            alert("Not a valid binary number");
        }
    }
    else if (selectedVal1 == "hex") {
        if (selectedVal2 == "decimal") {
            hexToDec(text1.value);
        }
        else if (selectedVal2 == "binary") {
            hexToBin(text1.value);
        }
        else {
            text2.value = text1.value;
            changeBG();
        }
    }
    else {
        alert("error");
    }
}
