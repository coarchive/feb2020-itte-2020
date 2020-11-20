/** @type {HTMLCanvasElement} */
const c = document.getElementById("c");
/** @type {CanvasRenderingContext2D} */
const ctx = c.getContext("2d", { alpha: false });

const font = "20px Cascadia Mono";

function calibrateCanvas() {
   const { clientWidth, clientHeight } = document.documentElement;
   c.style.width = `${clientWidth - 1 | 0}px`;
   c.style.height = `${clientHeight - 1 | 0}px`;
   console.log(`HTMLCanvasElement[${clientWidth}, ${clientHeight}]`);

   const dpr = window.devicePixelRatio || 0;
   c.width = dpr * clientWidth;
   c.height = dpr * clientHeight;

   console.log(`CanvasRenderingContext2D[${c.width}, ${c.height}]`);

   ctx.font = font;
   ctx.fillStyle = "white";
   ctx.imageSmoothingEnabled = false;
}

calibrateCanvas();

function textDebug(what, x, y) {
   ctx.textBaseline = "top";
   ctx.fillStyle = "white";
   ctx.fillText(what, x, y);
   const m = ctx.measureText(what);
   window.m = m;
   ctx.strokeStyle = "cyan";
   let l = m.actualBoundingBoxLeft + x;
   let t = y - m.actualBoundingBoxAscent;
   let w = m.actualBoundingBoxRight;
   let h = m.actualBoundingBoxDescent;
   l = ~~l + .5;
   t = ~~t + .5;
   w = Math.round(w);
   h = Math.round(h);
   ctx.strokeRect(l, t, w, h);
   ctx.fillStyle = "yellow";
   ctx.fillRect(x - 4, y, 9, 1);
   ctx.fillRect(x, y - 4, 1, 9);
}

void async function init() {
   await document.fonts.load(font);
   textDebug("gamer", 100, 100);
   window.addEventListener("resize", () => {
      calibrateCanvas();
      textDebug("foobar", 300, 100);
   });
}();
