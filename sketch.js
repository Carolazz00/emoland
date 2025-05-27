/** @type {SVGImage[]} */
let svg = [];
/** @type {Font} */
let font;

// 角度
let angle1 = 0;
let angle2 = 0;
// G1-3 不旋转

// 速度
let speed1 = 0.01; // G1-1 慢速
let speed2 = 0.03; // G1-2 快速

function preload() {
  svg = [
    loadSVG("./assets/1-01.svg"), // 0
    loadSVG("./assets/1-02.svg"), // 1
    loadSVG("./assets/1-03.svg"), // 2
    loadSVG("./assets/1-04.svg"),
    loadSVG("./assets/1-05.svg"),
    loadSVG("./assets/1-06.svg"),
    loadSVG("./assets/1-07.svg"),
    loadSVG("./assets/1-08.svg"),
    loadSVG("./assets/1-09.svg"),
    loadSVG("./assets/1-10.svg"),
    loadSVG("./assets/1-11.svg"),
    loadSVG("./assets/1-12.svg"),
  ];

  font = loadFont("./fonts/EMOLAND REGULAR_0.TTF");
}

function setup() {
  createCanvas(600, 400, SVG);
  addDownloadButton();
  imageMode(CENTER);
}

function draw() {
  clear(); // Non cancellare!

  // 更新角度
  angle1 += speed1;
  angle2 += speed2;

  // G1-1：左侧，慢速逆时针
  push();
  translate(width / 2, height / 2);
  rotate(-angle1);
  image(svg[0], 0, 0, 150, 150);
  pop();

  // G1-2：中间，快速顺时针
  push();
  translate(width / 2, height / 2);
  rotate(angle2/5);
  image(svg[1], 0, 0, 150, 150);
  pop();

  // G1-3：右侧，不转
  push();
  translate(width / 2, height / 2);
    rotate(-angle1/2);
  image(svg[2], 0, 0, 150, 150);
  pop();
}
