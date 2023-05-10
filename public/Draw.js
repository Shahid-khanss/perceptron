export default class Draw {
    constructor(ctx){
        
        this.ctx = ctx;
       
    }

    line = function (a,b,c,d) {
        this.ctx.strokeStyle = 'black'
        this.ctx.beginPath(0, 0)
        this.ctx.moveTo(a, b)
        this.ctx.lineTo(c, d)
        this.ctx.stroke()
    }

    dots = function (a,b,no){
        
        for(let i = 0 ; i<no;i++){
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0)
            this.ctx.arc(Math.random()*a, Math.random()*b, 5, 0, 2 * Math.PI);
            this.ctx.fill();
        }
        
        
    }
     
}