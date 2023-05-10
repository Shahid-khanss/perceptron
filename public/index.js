// import percept from './perceptron.js'

import Draw from './Draw.js'
const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d')
const draw = new Draw(ctx)

draw.line(0,30,500,400) // line(a,b,c,d) line from (a,b) ----> (c,d)
    draw.dots(500,500,100) // dots(a,b,no)  means dots will fill a rectangle a x b with no. of dots as nos


function myfunc(){
    console.log("button clicked")
}
    
