// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;
let jumpCount = 0;   // ① ジャンプした回数
const maxJump = 2;   // ① 何回までジャンプできるか(1にすると空中ジャンプ不可)

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
  if(keyIsDown(LEFT_ARROW)){
    if(keyIsDown("k")){ x -= 10; }
    x -= 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(keyIsDown("k")){ x += 10; }
    x += 5;
  }

  // BLANK[2] 重力とジャンプ
  vy += g;
  if(y + size / 2 >= groundY && vy > 0){   // ③ 落ちているときだけ着地判定
    y = groundY - size / 2;
    vy = 0;
    jumpCount = 0;                         // ④ 着地したら回数をリセット
  }

  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}

// ⑤ キーを押した瞬間に1回だけ呼ばれる
function keyPressed(){
  if(key === " " && jumpCount < maxJump){
    vy = -20;
    jumpCount++;
  }
}
