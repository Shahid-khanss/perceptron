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
        
        const dotTotal = []
        const dotDesired = []
        for(let i = 0 ; i<no;i++){
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0)
            const x = Math.ceil(Math.random()*a)
            const y = Math.ceil(Math.random()*b)
            dotTotal.push({x:x,y:y}) // array of points location.
            if(y<30+37*x/50){      // equation of line based on inequality.
                this.ctx.fillStyle = "green"
                dotDesired.push({x:x,y:y})
            }
            else{
                this.ctx.fillStyle = "red"
            }
            
            this.ctx.arc(x, y, 5, 0, 2 * Math.PI);
            this.ctx.fill();
        }
        
        // console.log(dotDesired)
    }
     
}