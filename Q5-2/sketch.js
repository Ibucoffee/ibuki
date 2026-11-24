// 吹き出し
function setup(){
  createCanvas(400, 400);
  textSize(16);
}

function draw(){
  background(220);
  balloon("関数は難しい？", 100, 100);
  balloon("関数は便利？", mouseX, mouseY);
}

function balloon(t, x, y){
  const w = textWidth(t); // テキストの幅
  const h = textAscent() + textDescent(); // テキストの高さ
  const p = 4; // 余白の大きさ (padding)

  push();

    noStroke();
  fill(0, 120, 200);                       // 背景色(濃い青)。好きな濃い色でOK
  rect(x, y, w + p * 2, h + p * 2, 4);     // 左上が(x, y)、幅と高さは余白込み。最後の4は角の丸み// BLANK[1] 吹き出しの背景を先に描く

    const bx = x + (w + p * 2) / 2;    // 吹き出しの横の真ん中
  const by = y + h + p * 2;          // 吹き出しの下の辺
  triangle(bx - 6, by,               // 左の点
           bx + 6, by,               // 右の点
           bx,     by + 10);         // 下にとがった点// BLANK[2] 吹き出しの三角形を描く

  // 吹き出しのテキストを次に描く
  textAlign(LEFT, CENTER);
  fill(255);
  text(t, x + p, y + h / 2 + p);
  
  pop();
}