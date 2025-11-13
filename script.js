//your JS code here. If required.
function add() {
	
let ti = document.getElementById("title").value;
let aut = document.getElementById("author").value;
let is = document.getElementById("isbn").value;
	if((ti=="")||(aut=="")||(is=="")){
		alert("Please fill the form")
		return;
	}
		let table = document.getElementById("book-list");
		let row = document.createElement("tr");
table.append(row)
	// 3 td banao
	let td1 = document.createElement("td");
	let td2 = document.createElement("td");
	let td3 = document.createElement("td");
	let td4 = document.createElement("td");
	row.append(td1);
	row.append(td2);
	row.append(td3);
	row.append(td4);
	let deletebtn = document.createElement("button");
	deletebtn.innerText = "Delete";
	deletebtn.setAttribute("class", "delete");
	td1.innerText=ti;
	td2.innerText=aut;
	td3.innerText=is;
	
	td4.appendChild(deletebtn);
	deletebtn.addEventListener("click" , ()=>{
		row.remove();
	})
	
}
let submit = document.getElementById("submit");

submit.addEventListener("click" , add);