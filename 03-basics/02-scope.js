// var c = 300
let a = 300
if (true) { 
    let a = 10 
    const b = 20
    // console.log("INNER: ", a);
    
}


// console.log(a);
//console.log(b);
// console.log(c);

function one(){
    const username = "faizal"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "faizal"
    if (username === "faizal"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// *******************intresting**************


function addone(num){
    return num + 1
}

addone(5)


const addtwo = function(num){
    return num + 2 
}

addtwo(5)