let x,y //キャラの位置
let size //キャラの大きさ
let groundY //地面の高さ
let vy=0 //縦のはやさ
const g=1 //重力
let boarX //イノシシｘ
let gameOver=false
let timeLeft =15
let started=false
function setup(){
　createCanvas(windowWidth, windowHeight); // キャンバスの大きさをウィンドウの大きさと同じにする
size=height*0.1
groundY=height*0.8
x=width*0.2
y=groundY-size/2
  boarX=[width,width*1.5,width*2]
}
function draw(){
  background(160,192,255)
  fill(64,192,64)
  noStroke()
  rect(0,groundY,width,height-groundY)
  if(started==false){
    drawStartScreen()
    return
  }

  if(gameOver==false&&timeLeft>0){
  vy +=g
  y +=vy
  if(frameCount%60==0){
    timeLeft--
  }
  if(y>groundY-size/2){
    y=groundY-size/2
    vy=0
  }
}
   // 残り7秒からスピードアップ
  let speed = 8
  if(timeLeft <= 7){
    speed = 11
  }
for(let i=0;i<boarX.length;i++){
  if(gameOver==false&&timeLeft>0){
    boarX[i]-=speed
  if(boarX[i]<0){
    boarX[i]=width*1.5
  }
}

if(dist(x,y,boarX[i],groundY-size/2)<size*0.8){
  gameOver=true
}
 drawBoar(boarX[i], groundY - size / 2)
 }
drawStudent(x, y)
if(gameOver){
    fill(0)
    textSize(30)
    text("衝突! Rキーでやり直し",width/3,height/2)
  }
  fill(0)
  textSize(30)
  text("講義開始まであと"+timeLeft+"秒",20,40)
  if(gameOver==false&&timeLeft<=0){
    text("講義に間に合った！ Rキーでもう一回",width/3,height/2)
  }
}
function keyPressed(){
   if(started==false){
    if(key==" "){
      started=true
    }
    return
  }
  if(key==" "&&y==groundY - size/2){
    vy=-20
  }
   if((key=="r" || key=="R")&&(gameOver==true || timeLeft<=0)){
    y = groundY-size/2
    vy = 0
    boarX = [width,width*1.5,width*2]
    gameOver = false
    timeLeft = 15
   }
}
 function drawStudent(cx,cy){
   stroke(40,40,60)
  strokeWeight(size*0.12)
   line(cx, cy+size*0.1, cx+size*0.12, cy+size*0.5)
  line(cx, cy+size*0.1, cx-size*0.12, cy+size*0.5)
  noStroke()

  // リュック（体より先に描いて、後ろに隠す）
  fill(200,50,50)
  rect(cx-size*0.38, cy-size*0.35, size*0.22, size*0.4, size*0.05)

  // 体（パーカー）
  fill(50,80,200)
  rect(cx-size*0.18, cy-size*0.38, size*0.36, size*0.5, size*0.1)

  // うで
  stroke(35,55,160)
  strokeWeight(size*0.1)
   line(cx, cy-size*0.25, cx-size*0.1, cy+size*0.05)
  noStroke()

  // 顔
  fill(255,220,180)
  ellipse(cx+size*0.03, cy-size*0.62, size*0.42)

  // 髪（上半分の半円）
  fill(40,30,20)
  arc(cx+size*0.03, cy-size*0.62, size*0.44, size*0.44, PI, TWO_PI)

  // 目
  fill(0)
  ellipse(cx+size*0.15, cy-size*0.55, size*0.06)
 } 
function drawBoar(cx,cy){
  fill(130,80,40)
  ellipse(cx,cy,size*1.3,size)
  fill(0)
  ellipse(cx-size*0.35,cy-size*0.15,size*0.1)
}

// スタート画面を描く
function drawStartScreen(){
  drawStudent(x, y)
  drawBoar(width*0.7, groundY-size/2)

  // 説明の白い板
  fill(255)
  rect(width*0.15, height*0.12, width*0.7, height*0.5, 20)

  fill(0)
  textSize(48)
  text("六甲台・坂道ラン", width*0.2, height*0.22)
  textSize(24)
  text("講義に遅刻しそう！", width*0.2, height*0.31)
  text("イノシシをよけて15秒逃げ切れば間に合う", width*0.2, height*0.36)
  text("残り7秒からイノシシがスピードアップ", width*0.2, height*0.41)
  text("スペースキー：ジャンプ　Rキー：やり直し", width*0.2, height*0.48)
  textSize(30)
  text("スペースキーでスタート", width*0.2, height*0.57)
}
