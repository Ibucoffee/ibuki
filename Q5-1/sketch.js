// EUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0, 51, 153);
  noStroke();
  for(let i = 0; i < 12; i++){
    const theta = TWO_PI * i / 12;
    const x = 100 + cos(theta) * 50;
    const y = 100 + sin(theta) * 50;
    fill(255, 204, 0)
    star(x, y, 10);
  }
}



function star(cx, cy, r){
  beginShape();
  for(let i = 0; i < 10; i++){
    const theta = TWO_PI * i / 10 - HALF_PI;
    let d;
    if(i % 2 == 0){ d = r; }      // 偶数番目は外側(とがった先)
    else { d = r / 2; }           // 奇数番目は内側(くぼみ)
    vertex(cx + cos(theta) * d, cy + sin(theta) * d);
  }
  endShape(CLOSE);
}// BLANK[1] ヒント：star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう