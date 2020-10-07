var a=0,a1=0,r=0,rr=0,ctx=0,ca=0,x=0,z2=0,z=0,ca2=0,mxl=0,zz=0,gt2=0,gt3=0,gt4=0,gt5=0,gt6=0,z=0,z2=0,ty=0,kk=0,kk2=0,max4=0,mx4=0,kk3=0,z23=0,CurX=0,CurY=0,z2=0,val2=5,z4=0,z24=0,z3=0,vl2=0,gt=0;
function gh() {
    //grafica
    var rl=Math.round(Math.random());
    var lr=Math.round(Math.random());
    var r=lr-(-rl);
    if (r == 1) {
        xx=document.getElementById("r2").value;
        rr=xx;
    }
    if (r == 0) {
        xxl=document.getElementById("r3").value;
        rr=xxl;
    }
    if (r == 2) {
        xx=document.getElementById("r4").value;
        rr=xx;
    }
    var cc=document.getElementById("r5").value;
    var x=cc*1;
    document.getElementById("h").innerHTML=x;
    a1+=x;
    if (a1 == 1000) {
        a1=0;
        a+=x;
    }
    if (a == 1000) {
        a=0;
    }
    var ca = document.getElementById("cxl");
    var ctx = ca.getContext("2d");
    ctx.fillStyle = rr;
    ctx.fillRect(a1,a,x,x);
    //grafica
    //segunda grafica
    var k=Math.round(Math.random());
    if (k == 1) {
        kk++;
    }
    if (k == 0) {
        kk--;
    }
    var kc=kk-(-0);
    if (kc > 15) {
        kk=15;
    }
    if (kc < 0) {
        kk=0;
    }
    var k2=Math.round(Math.random());
    if (k2 == 1) {
        kk2++;
    }
    if (k2 == 0) {
        kk2--;
    }
    var kc2=kk2-(-0);
    if (kc2 > 15) {
        kk2=15;
    }
    if (kc2 < 0) {
        kk2=0;
    }
    var k3=Math.round(Math.random());
    if (k3 == 1) {
        kk3++;
    }
    if (k3 == 0) {
        kk3--;
    }
    var kc3=kk3-(-0);
    if (kc3 > 15) {
        kk3=15;
    }
    if (kc3 < 0) {
        kk3=0;
    }
    var kcc = kc.toString(16);
    var kcc2 = kc2.toString(16);
    var kcc3 = kc3.toString(16);
    var color3="#"+kcc+"f"+kcc2+"f"+kcc3+"f";
    var ty=x;
    z+=ty;
    if (z == 1000) {
        z=0;
        z2+=ty;
    }
    if (z2 == 1000) {
        z2=0;
    }
    var ca2 = document.getElementById("cxl2");
    var ctx5 = ca2.getContext("2d");
    ctx5.fillStyle = color3;
    ctx5.fillRect(z,z2,ty,ty);
    //segunda grafica
    //tersera grafica
    var ran=Math.round(Math.random());
    if (ran == 1) {
        vl2++;
    }
    if (ran == 0) {
        vl2--;
    }
    var xcz=vl2-(-0);
    if (xcz > 15) {
        vl2=15;
    }
    if (xcz < 0) {
        vl2=0;
    }
    var xcz2 = xcz.toString(16);
    var xm="#00"+xcz2+"f00";
    var ty2=x;
    z3+=ty2;
    if (z3 == 1000) {
        z3=0;
        z23+=ty2;
    }
    if (z23 == 1000) {
        z23=0;
    }
    var ca3 = document.getElementById("cxl3");
    var ctx53 = ca3.getContext("2d");
    ctx53.fillStyle = xm;
    ctx53.fillRect(z3,z23,ty2,ty2);
    //tercera grafica
    //cuarta grafica
    var ty4=x;
    z4+=ty4;
    if (z4 == 1000) {
        z4=0;
        z24+=ty4;
    }
    if (z24 == 1000) {
        z24=0;
    }
    var jk=1.5;
    var gt=Math.round(jk/Math.random())
    var gt2=Math.round(jk/Math.random())
    var gt3=Math.round(jk/Math.random())
    var gt4=Math.round(jk/Math.random())
    var gt5=Math.round(jk/Math.random())
    var gt6=Math.round(jk/Math.random())
    console.log(gt,gt2,gt3,gt4,gt5,gt6);
    
    if (gt > 15) {
        gt=15;
    }
    if (gt < 0) {
        gt=0;
    }
    if (gt2 < 15) {
        gt2=15;
    }
    if (gt2 > 0) {
        gt2=15;
    }
    if (gt3 > 15) {
        gt3=15;
    }
    if (gt3 < 0) {
        gt3=0;
    }
    if (gt4 < 15) {
        gt4=15;
    }
    if (gt4 > 0) {
        gt4=15;
    }
    if (gt5 > 15) {
        gt5=15;
    }
    if (gt5 < 0) {
        gt5=0;
    }
    if (gt6 < 15) {
        gt6=15;
    }
    if (gt6 > 0) {
        gt6=15;
    }
    var xc = gt.toString(16);
    var xc2 = gt2.toString(16);
    var xc3 = gt3.toString(16); 
    var xc4 = gt4.toString(16);
    var xc5 = gt5.toString(16);
    var xc6 = gt6.toString(16);
    var ca4 = document.getElementById("cxl4");
    var ctx54 = ca4.getContext("2d");
    ctx54.fillStyle = "#"+xc+xc2+xc3+xc4+xc5+xc6;
    ctx54.fillRect(z4,z24,ty4,ty4);
    //cuarta grafica
    var xx=document.getElementById("r").value;
    setTimeout(gh,xx);
}
window.onload=function() {
    gh();
}