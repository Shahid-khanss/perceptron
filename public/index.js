import perceptron from './perceptron.js'

import Draw from './Draw.js'
const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d')
const draw = new Draw(ctx)

    draw.line(0,30,500,400) // line(a,b,c,d) line from (a,b) ----> (c,d)
    draw.dots(500,500,100) // dots(a,b,no)  means dots will fill a rectangle a x b with no. of dots as nos

/* 
    pereceptron
*/

const ptron = new perceptron(2,.00001)


// for (let j = 0; j < 10000; j++) {
for(let i=0;i<100;i++){
    console.log(draw.dotTotal[i].x)
    console.log(draw.dotTotal[i].y)
    console.log(draw.desired[i])

    ptron.train([draw.dotTotal[i].x,draw.dotTotal[i].y],draw.desired[i])
}
// }

for (let i = 0; i < 100; i++) {
    const x = draw.dotTotal[i].x;
    const y = draw.dotTotal[i].y;
    let guess = ptron.activate([x, y, ptron.bias]);
    // const value = draw.desired[i]-guess
    console.log(guess)
    ctx.beginPath()
    
    if(guess!=0){
           ctx.fillStyle = "green"
            
    }else{
           
            ctx.fillStyle = "red"
           
    }
    ctx.moveTo(0,0)
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
    
  }


