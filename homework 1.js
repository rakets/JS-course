//-----------------------------1

var a;
var b;
function proverka (a,b){
    if (a>b){
        alert("true");
        }
    else    {
        alert("false");
        }
    }
console.log();


//-----------------------------2

var k="";
function stroka(){
    alert ("Вы ввели: " + k );
}
console.log();

//-----------------------------3

var a;
    function checkIt () {
        if (a === undefined){
             return "undefined";
        }
        else if (a === null){
            return "null";
        }
        else return "not null andn't undefined";
      }
       
      console.log();
	  

//------------------4

 var a = {
    name:"John",
    age: 25,
    checked:false};
function check() {
    a.checked = true
}
console.log();

/* Начальное значение console.log(a.checked)        / {name: "John", age: 25, checked: false}
   После запуска функции,значение console.log(a.checked)     /{name: "John", age: 25, checked: true} */
                                                                                                                

//------------------5

var k;
function str(){
    for(var i=0; i<=k; i++){
    document.write(i- "<br/>");
    }
    for(var j=k; j>=0; j--){

    document.write(j+"<br/>");
    }
  }
console.log();
