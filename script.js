// var image=[];
// var j=0;
// var k=0;
// image[0]="<img src='/img/rock.png' width=250px height=250px>";
// image[1]="<img src='/img/paper.png' width=250px height=250px>";
// image[2]="<img src='/img/scissor.png' width=250px height=250px>";

var winc=0,losec=0,tie=0;

document.getElementById('sein').addEventListener("click",proc);
document.getElementById('seinp').addEventListener("click",procp);
document.getElementById('seins').addEventListener("click",procs);
document.getElementById('res').innerHTML="Select";

document.getElementById('reset').addEventListener("click",reset);

function reset(){
    document.getElementById('tiec').innerHTML=0;
    document.getElementById('losec').innerHTML=0;
    document.getElementById('winc').innerHTML=0;
    winc=0;
    losec=0;
    tie=0;
}

// function resetById(id){
//     document.getElementById(id).innerHTML=0;
// }


function proc(){
    document.getElementById("imag").innerHTML="<img src='img/rock.png' width=250px height=250px>";
    let a=1;
    pr(a);
}
function procp(){
    document.getElementById("imag").innerHTML="<img src='img/paper.png' width=250px height=250px>";
    let a=2;
    pr(a);
}

function procs(){
    document.getElementById("imag").innerHTML="<img src='img/scissor.png' width=250px height=250px>";
    let a=3;
    pr(a);
}

function pr(p){
    // slide();

    let c = Math.floor(Math.random() * (3) + 1);
    if (c==1){
        document.getElementById("imgc").innerHTML="<img src='img/rock.png' width=250px height=250px>";
    }
    if(c==2){
        document.getElementById("imgc").innerHTML="<img src='img/paper.png' width=250px height=250px>";
    }
    if(c==3){
        document.getElementById("imgc").innerHTML="<img src='img/scissor.png' width=250px height=250px>";
    }
    if (p==c){
        document.getElementById('res').innerHTML="Tie";
        tie+=1;
        document.getElementById('tiec').innerHTML=tie;
    }
    else if((p==1 && c==3) || (p==2 && c==1) || (p==3 && c==2) ){
        document.getElementById('res').innerHTML="You Won";
        winc+=1;
        document.getElementById('winc').innerHTML=winc;
    }
    else{
        document.getElementById('res').innerHTML="You Lose";
        losec+=1;
        document.getElementById('losec').innerHTML=losec;
    }
}




// function slide(){
//     document.getElementById("imgc").innerHTML=image[j];
//     if(j<3 && k<10){
//         j++;
//         k++;
//     }
//     else if(k<20){
//         j=0;
//         k++;
//     }
//     else{
//         k=0;
//         return true;
//     }
//     setTimeout("slide()",70);
// }