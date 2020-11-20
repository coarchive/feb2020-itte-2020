class Tile {
   constructor(char, color) {
      const c = document.createElement("canvas");
      c.height = 100;
      c.width = 100;
      const ctx = c.getContext("2d");
      ctx.font = ""
      ctx.fillStyle = color;
      ctx.fillText(char, 0, 0, )
      this.idata = c.getImageData();
   }
}
