var parent1 = document.createElement("div");
parent1.setAttribute('id', 'new1');
document.body.appendChild(parent1);

var img = document.createElement("img");
img.src = "DOM.png";
document.getElementById('new1').appendChild(img);

var a = document.createElement("p");
a.innerHTML = "Brimma";
document.getElementById('new1').appendChild(a);
a.className = "Brimma";

var b = document.createElement("p");
b.innerHTML = 'INNOVATION CENTER';
document.getElementById('new1').appendChild(b);
b.className = "Inc";

var parent2 = document.createElement("div");
parent2.setAttribute('id', 'par2');
document.body.appendChild(parent2);

var parent3 = document.createElement("child1");
parent3.setAttribute('id', 'new2');
document.getElementById('par2').appendChild(parent3);

var c = document.createElement("div")
c.innerHTML = '<b>Brimma Tech Inc.</b> <br>' +
    '7605 Carrick Hill CT, <br>' +
    ' Wake Forest, NC 27587, USA.';
document.getElementById('new2').appendChild(c);
c.className = "left";

var parent4 = document.createElement("child2");
parent4.setAttribute('id', 'new3');
document.getElementById('par2').appendChild(parent4);

var d = document.createElement("div")
d.innerHTML = '<b>Brimma Tech Pvt. Ltd.</b><br>' + 'Olympia Technology Park,<br>' +
    'Level 2, 3rd floor, Altius Block,<br>' +
    'No 1 SIDCO Industrial Estate,<br>' +
    'Guindy, Chennai - 600 032.';
document.getElementById('new3').appendChild(d);
d.className = "Right"
