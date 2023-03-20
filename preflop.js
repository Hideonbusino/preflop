
//
function os(id){
    const image = document.getElementById(id);
    const s = document.getElementById(id+"_s");
    const b = document.getElementById(id+"_b");
    const f = document.getElementById(id+"_f");
    const p = document.getElementById(id+"_p");
    if (image.style.display == "inline-block") {
        image.style.display = "none";
        b.style.display = "none";
        f.style.display = "none";
        p.style.display = "none";
        s.innerHTML = "SHOW";
        } else {
        image.style.display = "inline-block";
        b.style.display = "inline-block";
        f.style.display = "inline-block";
        p.style.display = "block";
        s.innerHTML = "HIDE";
        }
}
function check_count(count,l){
    if (count < 0){count = 0;}
    else if (count >= l.length){count = l.length-1;}
    return count;
}
function f(count,l){
    count++;
    count = check_count(count,l);
    return count;
}
function b(count,l){
    count--;
    count = check_count(count,l);
    return count;
}
function show(count,l,id, str1, str2, str3, str4){
    let pos = l[count];
    document.getElementById(id+"_p").innerHTML = str1+pos+" "+str2;
    document.getElementById(id).src = str3+pos+str4;
}


let open_count = 0;
function f_open(){
    let l = ['UTG','HJ','CO','BTN','SB'];
    open_count = f(open_count,l);
    show(open_count,l,"open","","Open","preflop/","-open.png");
}
function b_open(){
    let l = ['UTG','HJ','CO','BTN','SB'];
    open_count = b(open_count,l);
    show(open_count,l,"open","","Open","preflop/","-open.png");
}

let def_count = 0;
function f_def(){
    let l = ['UTG-BB','HJ-BB','CO-BB','BTN-BB','SB-BB',
            'UTG-SB','HJ-SB','CO-SB','BTN-SB'];
    def_count = f(def_count,l);
    show(def_count,l,"def","","","preflop/",".png");
}
function b_def(){
    let l = ['UTG-BB','HJ-BB','CO-BB','BTN-BB','SB-BB',
            'UTG-SB','HJ-SB','CO-SB','BTN-SB'];
    def_count = b(def_count,l);
    show(def_count,l,"def","","","preflop/",".png");
}
let def2_count = 0;
function f_def2(){
    let l = ['UTG-HJ','UTG-CO','HJ-CO','UTG-BTN','HJ-BTN',
            'CO-BTN'];
    def2_count = f(def2_count,l);
    show(def2_count,l,"def2","","","preflop/",".png");
}
function b_def2(){
    let l = ['UTG-HJ','UTG-CO','HJ-CO','UTG-BTN','HJ-BTN',
            'CO-BTN'];
    def2_count = b(def2_count,l);
    show(def2_count,l,"def2","","","preflop/",".png");
}
let BB3_count = 0;
function f_BB3(){
    let l = ['BB-3B-UTG','BB-3B-HJ','BB-3B-CO','BB-3B-BTN','BB-3B-SB'];
    BB3_count = f(BB3_count,l);
    show(BB3_count,l,"BB3","","","preflop/",".png");
}
function b_BB3(){
    let l = ['BB-3B-UTG','BB-3B-HJ','BB-3B-CO','BB-3B-BTN','BB-3B-SB'];
    BB3_count = b(BB3_count,l);
    show(BB3_count,l,"BB3","","","preflop/",".png");
}
let SB3_count = 0;
function f_SB3(){
    let l = ['SB-3B-UTG','SB-3B-HJ','SB-3B-CO','SB-3B-BTN'];
    SB3_count = f(SB3_count,l);
    show(SB3_count,l,"SB3","","","preflop/",".png");
}
function b_SB3(){
    let l = ['SB-3B-UTG','SB-3B-HJ','SB-3B-CO','SB-3B-BTN'];
    SB3_count = b(SB3_count,l);
    show(SB3_count,l,"SB3","","","preflop/",".png");
}
let BTN3_count = 0;
function f_BTN3(){
    let l = ['BTN-3B-UTG','BTN-3B-HJ','BTN-3B-CO','CO-3B-UTG','CO-3B-HJ','HJ-3B-UTG'];
    BTN3_count = f(BTN3_count,l);
    show(BTN3_count,l,"BTN3","","","preflop/",".png");
}
function b_BTN3(){
    let l = ['BTN-3B-UTG','BTN-3B-HJ','BTN-3B-CO','CO-3B-UTG','CO-3B-HJ','HJ-3B-UTG'];
    BTN3_count = b(BTN3_count,l);
    show(BTN3_count,l,"BTN3","","","preflop/",".png");
}