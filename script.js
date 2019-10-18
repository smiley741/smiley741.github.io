console.log("hello world");

function doit(barId, crId) {
  const htmlbar = document.getElementById(barId);
  const htmlbarcr = document.getElementById(crId);
  htmlbarcr.style.width = htmlbar.value + "%";
}

function clickChange() {
  const nameC = document.getElementById("nameCID")
  const realname = document.getElementById("realname")
  realname.innerText = nameC.value
  nameC.value = ""
}

function clickclickboom() {
  const skillinput = document.getElementById("skillButt");
  const ulID = document.getElementById("ulId");
  
  const firstli = document.createElement("li");
  const elementId  = "li" + ulID.children.length;
  firstli.setAttribute("id", elementId);
  firstli.innerHTML = '<div class="skillText">' + 
                      skillinput.value + 
                      '<button onclick="functionD(\'' + elementId + '\')">delete</button>' +
                      '</div>';
  ulID.appendChild(firstli);
  skillinput.value=""
}

function functionD(elementId) {
  document.getElementById(elementId).remove()
}

function BGC(colorcode){
 document.body.style.background = colorcode
} 