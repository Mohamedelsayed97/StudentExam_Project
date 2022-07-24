let name = (location.search.substring(1).split("&")[0].split("=")[1]);
let pass = (location.search.substring(1).split("&")[1].split("=")[1]);
console.log(name);
console.log(pass);

let unm = document.getElementById("unm");
let ups = document.getElementById("ups");

console.log(unm.value);
console.log(ups.value);

// register submit event
this.document.forms[0].addEventListener('submit', function (data) {

    if(unm.value != name || unm.value=="") {
        alert("Sorry your username not correct");
        data.preventDefault();
    }
    if( ups.value != pass || ups.value=="") {
        alert("sorry your password not correct");
        data.preventDefault();
    }
    
}); // end of submit

// register reset event
this.document.forms[0].addEventListener('reset', function (data) {
    if (!confirm("Are You Sure To Clear Form ?")) {
        data.preventDefault();
    }

});//end of reset