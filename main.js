let c=0;

function incre(){
    c++;
    document.getElementById('result').textContent= c;
}
function decre(){
    c--;
    document.getElementById('result').textContent=c;
}
function reset(){
    c=0;
    document.getElementById('result').textContent=c;
}