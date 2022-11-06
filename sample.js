// Get sample components
msg_sample = document.getElementById("msg_sample");
name_sample = document.getElementById("name_sample");
// get input ชื่อหมา และ บ่น
fdog = document.getElementById("fdog");
fbon = document.getElementById("fbon");
// on value change
// fdog.onchange = function() {
//     // set value to msg_sample
//     msg_sample.innerHTML = fdog.value;
// }
// fbon.onchange = function() {
//     // set value to name_sample
//     name_sample.innerHTML = fbon.value;
// }
// chaneg focus when enter
fdog.onkeydown = function(e) {
    if (e.keyCode == 13) {
        fbon.focus();
    }
}

function updatesample() {
    msg_sample.innerHTML = fbon.value;
    name_sample.innerHTML = fdog.value;
}

function submit() {
    // play dog bark
    var audio = new Audio('./bark.mp3');
    audio.play();
    // get value from input
    var dog = msg_sample.value;
    var bon = name_sample.value;
    // check value
    if (dog == "" || bon == "") {
        alert("กรุณากรอกข้อมูลให้ครบ");
    } else {
        // submit form
        console.log("submit");
    }
}