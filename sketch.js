/** @type {SVGImage[]} */
let svg = [];
/** @type {Font} */
let font;

// 角度
let angle1 = 0;
let angle2 = 0;


// 速度
let speed1 = 0.01; // 速度1
let speed2 = 0.03; // 速度2

function preload() {
  svg = [
    loadSVG("./assets/1-01.svg"), // 0
    loadSVG("./assets/1-02.svg"), // 1
    loadSVG("./assets/1-03.svg"), // 2
    loadSVG("./assets/1-04.svg"),//3
    loadSVG("./assets/1-05.svg"),//4
    loadSVG("./assets/1-06.svg"),//5
    loadSVG("./assets/1-07.svg"),//6
    loadSVG("./assets/1-08.svg"),//7
    loadSVG("./assets/1-09.svg"),//8
    loadSVG("./assets/1-10.svg"),//9
    loadSVG("./assets/1-11.svg"),//10
    loadSVG("./assets/1-12.svg"),//11
  ];

  font = loadFont("./fonts/EMOLAND REGULAR_0.TTF");
}

function setup() {
  createCanvas(400, 600, SVG);
  addDownloadButton();
  imageMode(CENTER);
}

function draw() {
  clear();
  background("black");

  angle1 += speed1;
  angle2 += speed2;

 
  
  let imageX=[
  width*1/6,
  width*3/6,
  width*5/6,
];

  let imageY = [
    height * 1 / 8,  // 第0组y= 600 * 1 / 8 = 75
    height * 3 / 8,  // 第1组y=600 * 3 / 8 = 225
    height * 5 / 8,  // 第2组y= 600 * 5 / 8 = 375
    height * 7 / 8   // 第3组y= 600 * 7 / 8 = 525
  ];


  let lettereX=[
  width*2/6,//0
  width*4/6,//1
];
  let lettereY=[
  height * 2/ 8,//0
  height * 4/ 8,//1
  height * 6/ 8,//2
];

 textFont(font);
textSize(200);
fill("GOLD");  // 白色
textAlign(CENTER, CENTER);

// 显示 GIOIA
text("G", lettereX[0], lettereY[0])
text("I", lettereX[1], lettereY[0])
text("O", lettereX[0], lettereY[1])
text("I", lettereX[0], lettereY[2])
text("A", lettereX[1]+20, lettereY[2]);

  //1
  //第一排左边图形
 push();
  translate(imageX[0], imageY[0]);
  rotate(-angle1 / 2);
  image(svg[5], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[0], imageY[0]);
  rotate(angle1);
  image(svg[4], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[0], imageY[0]);
  rotate(angle1);
  image(svg[3], 0, 0, 100, 100);
  pop();
// 第一排中间图形
  push();
  translate(imageX[1], imageY[0]);
  rotate(-angle1);
  image(svg[2], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[1], imageY[0]);
  rotate(angle2 / 5);
  image(svg[1], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[1], imageY[0]);
  rotate(-angle1 / 2);
  image(svg[0], 0, 0, 100, 100);
  pop();
//第一排右边图形
push();
  translate(imageX[2], imageY[0]);
  rotate(-angle1 / 2);
  image(svg[8], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[2], imageY[0]);
  rotate(angle1);
  image(svg[7], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[2], imageY[0]);
  rotate(-angle1);
  image(svg[6], 0, 0, 100, 100);
  pop();




 //2
  // 第二排左边图形
  push();
  translate(imageX[0], imageY[1]);
  rotate(-angle1 / 2);
  image(svg[8], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[0], imageY[1]);
  rotate(angle1);
  image(svg[7], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[0], imageY[1]);
  rotate(-angle1);
  image(svg[6], 0, 0, 100, 100);
  pop();
// 第二排中间图形
  push();
  translate(imageX[1], imageY[1]);
  rotate(-angle1 / 2);
  image(svg[5], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[1], imageY[1]);
  rotate(angle1);
  image(svg[4], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[1], imageY[1]);
  rotate(-angle1);
  image(svg[3], 0, 0, 100, 100);
  pop();
// 第二排右边图形
  push();
  translate(imageX[2], imageY[1]);
  rotate(-angle1 / 2);
  image(svg[11], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[2], imageY[1]);
  rotate(angle1);
  image(svg[9], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[2], imageY[1]);
  rotate(-angle1);
  image(svg[10], 0, 0, 100, 100);
  pop();



//3
  //第三排左边图形
push();
  translate(imageX[0], imageY[2]);
  rotate(angle1);
  image(svg[11], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[0], imageY[2]);
  rotate(-angle2 / 3);
  image(svg[9], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[0], imageY[2]);
  rotate(angle1 / 2);
  image(svg[10], 0, 0, 100, 100);
  pop();
// 第三排中间图形
  push();
  translate(imageX[1],imageY[2]);
  rotate(angle1);
  image(svg[0], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[1], imageY[2]);
  rotate(-angle2 / 3);
  image(svg[1], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[1], imageY[2]);
  rotate(angle1 / 2);
  image(svg[2], 0, 0, 100, 100);
  pop();
// 第三排右边图形
push();
  translate(imageX[2], imageY[2]);
  rotate(-angle1 / 2);
  image(svg[5], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[2], imageY[2]);
  rotate(angle1);
  image(svg[4], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[2], imageY[2]);
  rotate(angle1);
  image(svg[3], 0, 0, 100, 100);
  pop();




  //第四排左边图形
push();
  translate(imageX[0], imageY[3]);
  rotate(-angle1);
  image(svg[2], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[0], imageY[3]);
  rotate(angle2 / 5);
  image(svg[1], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[0], imageY[3]);
  rotate(-angle1 / 2);
  image(svg[0], 0, 0, 100, 100);
  pop();
// 第四排中间图形
  push();
  translate(width / 2, imageY[3]);
  rotate(angle1);
  image(svg[11], 0, 0, 100, 100);
  pop();

  push();
  translate(width / 2, imageY[3]);
  rotate(-angle2 / 3);
  image(svg[9], 0, 0, 100, 100);
  pop();

  push();
  translate(width / 2, imageY[3]);
  rotate(angle1 / 2);
  image(svg[10], 0, 0, 100, 100);
  pop();
//第四排右边图形
   push();
  translate(imageX[2], imageY[3]);
  rotate(angle1);
  image(svg[8], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[2], imageY[3]);
  rotate(-angle2 / 3);
  image(svg[7], 0, 0, 100, 100);
  pop();

  push();
  translate(imageX[2], imageY[3]);
  rotate(angle1 / 2);
  image(svg[6], 0, 0, 100, 100);
  pop();

  //字
 

} 