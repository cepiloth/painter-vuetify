<template>
  <v-container>
      <v-layout row wrap align-center>
      <h1>Drawing with mousemove event</h1>
      <h1>{{x}} , {{y}}</h1>
      <canvas id="drawCanvas" width="500" height="500" @mousedown="beginDrawing" @mouseup="stopDrawing" @mousemove="draw">
      						Canvas not supported
      </canvas>


    </v-layout>
    <br>
    <button id="btnPrev" class="button" @click="prev">Undo</button>
    <button id="btnClea" class="button" @click="clear">Clear</button>
    <button id="btnSave" class="button" @click="upload">Save</button>
  </v-container>
</template>

<script>
export default {
  name: 'Painter',
  data () {
    return {
      isDrawing: false,
      x: 0,
      y: 0,
      canvas: null,
    };
  },
  methods: {
    drawLine(x1, y1, x2, y2) {
      let ctx = this.canvas;
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 10;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    },
    draw(e) {
      if(this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
    },
    beginDrawing(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
      console.log(this.isDrawing);
    },
    stopDrawing(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
        console.log(this.isDrawing);
      }
    },
    showCoordinates(e) {
      x = e.offsetX;
      y = e.offsetY;
    },
    prev(){
      alert('prev');
    },
    clear(){
      let ctx = this.canvas;
      ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, drawCanvas.width, drawCanvas.height);
    },
    upload() {
      alert('upload')
    }
  },
  mounted() {
    var c = document.getElementById("drawCanvas");
    this.canvas = c.getContext('2d');
    this.canvas.lineCap = 'round';
    this.canvas.lineJoin= "round";
  },
}
</script>

<style scoped>
  #drawCanvas {
    border:1px solid #000000;
  }
</style>
