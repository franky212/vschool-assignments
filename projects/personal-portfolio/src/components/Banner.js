import React from "react";
import $ from "jquery";

export default function Banner() {
  $(document).ready(function() {
      const canvas = document.querySelector("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const c = canvas.getContext("2d");

      const mouse = {
        x: undefined,
        y: undefined
      }

      const maxRadius = 40;
      // const minRadius = 2;

      const colorArray = [
        "#0F9AB7",
        "#095A6B",
        "#337684",
        "#46A4B7",
        "#052F38"
      ]

      window.addEventListener("mousemove", function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
      })

      window.addEventListener("resize", function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        init();
      })

      function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

        this.draw = function() {
          c.beginPath();
          c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          c.fillStyle = this.color;
          c.fill();
        }

        this.update = function() {
          if(this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
          }

          if(this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
          }

          this.x += this.dx;
          this.y += this.dy;

          // Interactivity
          if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if(this.radius < maxRadius) {
              this.radius += 1;
            }
          } else if(this.radius > this.minRadius) {
            this.radius -= 1;
          }

          this.draw();
        }
      }

      let circleArray = [];

      function init() {

        circleArray = [];

        for(let i = 0; i < 800; i++) {
          let radius = (Math.random() * 3) + 1;
          let x = Math.random() * (window.innerWidth - radius * 2) + radius;
          let y = Math.random() * (window.innerHeight - radius * 2) + radius;
          let dy = (Math.random() - 0.5) * 6;
          let dx = (Math.random() - 0.5) * 6;
          circleArray.push(new Circle(x, y, dx, dy, radius));
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for(let i = 0; i < circleArray.length; i++) {
          circleArray[i].update();
        }
      }

      init();
      animate();
    })
  return (
    <div id="banner-height" className="banner">
      <canvas></canvas>
      <div className="container">
      <div className="banner-text">
          <h1>Web Designer and Developer</h1>
          <h3>Let's take your business online!</h3>
        </div>
      </div>
    </div>
    
  )
}
