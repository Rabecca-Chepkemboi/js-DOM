document.getElementById('body').style.backgroundColor = 'silver';

document.getElementById('title').style.color = 'green';

document.getElementById('grocery').style.textTransform = 'uppercase';

document.getElementById('groceries').style.textTransform = 'uppercase';


let li = document.createElement('li');
li.innerHTML = " Spinach";
document.getElementById('vegList').appendChild(li)

let list = document.createElement('list');
list.innerHTML = " Oranges";
document.getElementById('fruList').appendChild(list)

