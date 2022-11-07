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
        sample_submit(dog, bon);
    }
}



function sample_submit(name, des) {
    function makeform(name, des){
        const form = `<div class="forum_card"><h1>${name}</h1><p><span>- </span><span>หมา</span>${des}<span> -</span></p></div>`
        return form
    }
    var forum_list = document.getElementById("forum_list");
    const mform = makeform(name, des);
    forum_list.innerHTML += mform;

}