let hs=0
let as=0
function one(){
    hs+=1
    document.getElementById("s1").innerText=hs
}
function two(){
    hs+=2
    document.getElementById("s1").innerText=hs

}
function three(){
    hs+=3
    document.getElementById("s1").innerText=hs

}
function one1(){
    as+=1
    document.getElementById("s2").innerText=as
}
function two2(){
    as+=2
    document.getElementById("s2").innerText=as

}
function three3(){
    as+=3
    document.getElementById("s2").innerText=as

}
function rr(){
    hs=0
    as=0
    document.getElementById("s1").innerText=hs
    document.getElementById("s2").innerText=as
    document.getElementById("wi").innerText=""
}
function w(){
    if(hs>as){
        document.getElementById("wi").innerText="Home Team"
    }else{
        document.getElementById("wi").innerText="Away Team"
    }
}
