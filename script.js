var models={
  
  apple:["Iphone 14 Pro Max","Iphone 14 Pro", "Iphone 14 Plus", "Iphone 14", "Iphone SE (3rd generation)", "Iphone 13 Pro Max", "Iphone 13 Pro", " Iphone 13 Mini", "Iphone 13"],
  samsung:["Galaxy S22 Ultra","Galaxy S22"],
  huawei: ["Mate 50 pro","Mate 50"]
  
};
var marka = document.getElementById("marka");
var model = document.querySelector("#model");
window.onload = selectMarka;
marka.onchange = selectMarka;

function selectMarka(ev){
  model.innerHTML = "";
  var c = this.value,o;

    o = new Option('select model phone...',1,false,false);
    model.add(o);
    

  for(let i = 0; i<models[c].length; i++){
 o = new Option(models[c][i],i+1,false,false);
model.add(o);
  };
}
console.clear();
model.onchange = function(ev){
let name = models[marka.value][ev.currentTarget.value-1];

let img =  `<center><img  src="${name}.jpg"></center>`;
document.getElementById('table').innerHTML=img;
console.log(img);
let button =`<center><button  class="btn" onclick="window.location.href='${name}.html';">select</button></div></center>`;
document.getElementById('button').innerHTML=button;
console.log(button);
}
  