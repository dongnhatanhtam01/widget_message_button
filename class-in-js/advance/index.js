/** SAMPLE FORM */
var f = document.createElement("form");
f.setAttribute('method',"post");
f.setAttribute('action',"submit.php");

var i = document.createElement("input"); //input element, text
i.setAttribute('type',"text");
i.setAttribute('name',"username");

var s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");

f.appendChild(i);
f.appendChild(s);

//and some more input elements here
//and dont forget to add a submit button

// document.getElementsByTagName('body')[0].appendChild(f);






//todo Student form
var row = document.createElement("div");
var sectionForm = document.createElement("div");

row.className = "row";
sectionForm.className = "section-form";






row.appendChild(sectionForm);
document.getElementsByTagName('body')[0].appendChild(row);



/** student declaration */
const a = new Student("123", "tong xin", "tongxin@gmail.com", 1, 1, 1, 1, "_trainingScore");

console.log(a.averagePoint());
console.log(a.spillSecret());

// remind that accessing _variable is denined
console.log(a._id);