// Initially Votes for party is zero
var congress1=0;
var bj=0;
var tdp1=0;
var ysr1=0;
var loksatha1=0;
var cpm1=0;
var trs1=0;
var prp1=0;
var nota1=0;


// Vote for congress
function congress(){
    document.getElementById('congress').style.visibility='hidden';
    document.getElementById('cong1').style.visibility='hidden';
    document.getElementById('cong').style.backgroundColor='white';
    document.getElementById('con').style.visibility='visible';
    document.getElementById('con').src='congress.png';
    congress1=congress1+1;
}
document.getElementById('congress').addEventListener('click',congress);
// Vote for bjp
function bjp(){
    document.getElementById('bjp').style.visibility='hidden';
    document.getElementById('bjp1').style.visibility='hidden';
    document.getElementById('cong2').style.backgroundColor='white';
    document.getElementById('con').style.visibility='visible';
    document.getElementById('con').src='BJP.png';  
    bj=bj+1;
}
document.getElementById('bjp').addEventListener('click',bjp);
function bjp30(){
    document.getElementById('bjp').style.visibility='visible';
    document.getElementById('bjp1').style.visibility='visible';
    document.getElementById('cong2').style.backgroundColor='#acbacb';
    document.getElementById('con').style.visibility='visible';   
}
document.getElementById('yes').addEventListener('click',bjp30);
// Vote for tdp
function tdp(){
    document.getElementById('tdp').style.visibility='hidden';
    document.getElementById('tdp1').style.visibility='hidden';
    document.getElementById('cong10').style.backgroundColor='white';
    document.getElementById('con').style.visibility='visible';
    document.getElementById('con').src='tdp.jpg';
    tdp1=tdp1+1;   
}
document.getElementById('tdp').addEventListener('click',tdp);
function tdp30(){
    document.getElementById('tdp').style.visibility='visible';
    document.getElementById('tdp1').style.visibility='visible';
    document.getElementById('cong10').style.backgroundColor='#acbacb';
    document.getElementById('con').style.visibility='visible';   
}
document.getElementById('yes').addEventListener('click',tdp30);
// vote for ysr
function ysr(){
    document.getElementById('ysr').style.visibility='hidden';
    document.getElementById('ysr1').style.visibility='hidden';
    document.getElementById('cong3').style.backgroundColor='white';
    document.getElementById('con').style.visibility='visible';
    document.getElementById('con').src='ysr.png';
    ysr1=ysr1+1;   
}
document.getElementById('ysr').addEventListener('click',ysr);
function ysr0(){
    document.getElementById('ysr').style.visibility='visible';
    document.getElementById('ysr1').style.visibility='visible';
    document.getElementById('cong3').style.backgroundColor='#acbacb';
    document.getElementById('con').style.visibility='visible';   
}
document.getElementById('yes').addEventListener('click',ysr0);
// Vote for loksatha
function lok(){
    document.getElementById('lok').style.visibility='hidden';
    document.getElementById('lok1').style.visibility='hidden';
    document.getElementById('cong4').style.backgroundColor='white';
    document.getElementById('con').style.visibility='visible';
    document.getElementById('con').src='download.png'; 
    loksatha1=loksatha1+1;  
}
document.getElementById('lok').addEventListener('click',lok);
function lok0(){
    document.getElementById('lok').style.visibility='visible';
    document.getElementById('lok1').style.visibility='visible';
    document.getElementById('cong4').style.backgroundColor='#acbacb';
    document.getElementById('con').style.visibility='visible';   
}
document.getElementById('yes').addEventListener('click',lok0);
  bjp1=bjp1+1;
// Vote for  cpm
function cpm(){
    document.getElementById('cpm').style.visibility='hidden';
    document.getElementById('cpm1').style.visibility='hidden';
    document.getElementById('cong5').style.backgroundColor='white';
    document.getElementById('con').style.visibility='visible';
    document.getElementById('con').src='cpm.png';   
    cpm1=cpm1+1;
}
document.getElementById('cpm').addEventListener('click',cpm);
function cpm0(){
    document.getElementById('cpm').style.visibility='visible';
    document.getElementById('cpm1').style.visibility='visible';
    document.getElementById('cong5').style.backgroundColor='#acbacb';
    document.getElementById('con').style.visibility='visible';   
}
document.getElementById('yes').addEventListener('click',cpm0);
// voter for trs
function trs(){
    document.getElementById('trs').style.visibility='hidden';
    document.getElementById('trs1').style.visibility='hidden';
    document.getElementById('cong6').style.backgroundColor='white';
    document.getElementById('con').style.visibility='visible';
    document.getElementById('con').src='trs.png';   
    trs1=trs1+1;
}
document.getElementById('trs').addEventListener('click',trs);
function trs0(){
    document.getElementById('trs').style.visibility='visible';
    document.getElementById('trs1').style.visibility='visible';
    document.getElementById('cong6').style.backgroundColor='#acbacb';
    document.getElementById('con').style.visibility='visible';   
}
document.getElementById('yes').addEventListener('click',trs0);
// vote for prp
function prp(){
    document.getElementById('prp').style.visibility='hidden';
    document.getElementById('prp1').style.visibility='hidden';
    document.getElementById('cong7').style.backgroundColor='white';
    document.getElementById('con').style.visibility='visible';
    document.getElementById('con').src='prp.png';  
    prp1=prp1+1; 
}
document.getElementById('prp').addEventListener('click',prp);
function prp0(){
    document.getElementById('prp').style.visibility='visible';
    document.getElementById('prp1').style.visibility='visible';
    document.getElementById('cong7').style.backgroundColor='#acbacb';
    document.getElementById('con').style.visibility='visible';   
}
document.getElementById('yes').addEventListener('click',prp0);
// Voting for nota
function not(){
    document.getElementById('none').style.visibility='hidden';
    document.getElementById('nota').style.visibility='hidden';
    document.getElementById('cong8').style.backgroundColor='white';
    document.getElementById('con').style.visibility='visible';
    document.getElementById('con').src='nota.png';   
    nota1=nota1+1;
}
document.getElementById('none').addEventListener('click',not);
function not0(){
    document.getElementById('none').style.visibility='visible';
    document.getElementById('nota').style.visibility='visible';
    document.getElementById('cong8').style.backgroundColor='#acbacb';
    document.getElementById('con').style.visibility='visible';   
}
document.getElementById('yes').addEventListener('click',not0);
// off ballot box
function power(){
    document.getElementById('ballot').style.visibility='hidden';
    document.getElementById('power').style.backgroundColor='red';
    document.getElementById('poweroff').style.color='red';
}
document.getElementById('poweroff').addEventListener("click",power);
// confirmation from user
// counting votes for congress
function confirmation(){
    document.getElementById('con').style.visibility='hidden';
    document.getElementById('congress').style.visibility='visible';
    document.getElementById('cong1').style.visibility='visible';
    document.getElementById('cong').style.backgroundColor='#acbacb';
}
document.getElementById('yes').addEventListener('click',confirmation);
function wrong(){
    document.getElementById('con').style.visibility='hidden';
    document.getElementById('congress').style.visibility='visible';
    document.getElementById('cong1').style.visibility='visible';
    document.getElementById('cong').style.backgroundColor='#acbacb';
}
document.getElementById('wrong').addEventListener('click',wrong);
function wrong1(){
    document.getElementById('bjp1').style.visibility='visible';
    document.getElementById('bjp').style.visibility='visible';
    document.getElementById('cong').style.visibility='hidden';
    document.getElementById('cong2').style.backgroundColor='#acbacb';
}
document.getElementById('wrong').addEventListener('click',wrong1);

//display new window
function set(){
    var mywindow=window.open();
    mywindow.document.write("<table border='2px' width='500px' align='center' style='margin-top:10%;font-size: 27px;border:2px solid orchid;text-align: center;color:rgba(244, 17, 244, 0.931);'><tr><th colspan='2' style='color:blueviolet;font-family: Arial, Helvetica, sans-serif;'>Votes for parties</th></tr><tr><td style='font-family:Arial, Helvetica, sans-serif ;color: slategray;'>Party</td><td style='font-family:Arial, Helvetica, sans-serif;color:slategray;'>Votes</td></tr><tr><td>Congress</td><td>"+congress1+"</td></tr><tr><td>BJP</td><td>"+bjp1+"</td></tr><tr><td>TDP</td><td>"+tdp1+"</td></tr><tr><td>YSR</td><td>"+ysr1+"</td></tr><tr><td>LOKSATHA</td><td>"+loksatha1+"</td></tr><tr><td>CPM</td><td>"+cpm1+"</td></tr><tr><td>TRS</td><td>"+trs1+"</td></tr><tr><td>PRP</td><td>"+prp1+"</td></tr></table>");
}
document.getElementById('right').addEventListener('click',set);
function cancel(){
    window.close();
}
document.getElementById('wrong2').addEventListener('click',cancel);
var reset=()=>{
congress1=0;
bj=0;
tdp1=0;
ysr1=0;
loksatha1=0;
cpm1=0;
trs1=0;
prp1=0;
nota1=0;
}
document.getElementById('res').addEventListener('click',reset);
var count=()=>{
    var total=congress1+bj+tdp1+ysr1+loksatha1+cpm1+trs1+prp1+nota1;
    var wi=window.open();
    wi.document.write("<table border='2px' width='500px' align='center' style='margin-top:10%;font-size: 27px;border:2px solid orchid;text-align: center;color:rgba(244, 17, 244, 0.931);'><tr><th colspan='2' style='color:blueviolet;font-family: Arial, Helvetica, sans-serif;'>Total Votes on the Day</th></tr><tr><td style='font-family:Arial, Helvetica, sans-serif ;color: slategray;'>"+total+"</td></tr></table>")
}
document.getElementById('count').addEventListener('click',count);