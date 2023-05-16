export default class Draw {
    constructor(ctx){
        
       this.ctx = ctx
        this.dotTotal = []
        this.desired = []
    }

    line = function (a,b,c,d) {
        this.ctx.strokeStyle = 'black'
        this.ctx.beginPath(0, 0)
        this.ctx.moveTo(a, b)
        this.ctx.lineTo(c, d)
        this.ctx.stroke()
    }

    dots = function (a,b,no){
        
        this.dotTotal = []
        this.desired = []
        for(let i = 0 ; i<no;i++){
            
            const x = Math.ceil(Math.random()*a)
            const y = Math.ceil(Math.random()*b)
             // array of points location.
            if(y<30+37*x/50){      // equation of line based on inequality.
                // this.ctx.fillStyle = "green"
                
                this.dotTotal[i] = {x:x,y:y}
                this.desired[i] = 1
            }
            else{
                // this.ctx.fillStyle = "red"
                this.dotTotal[i] = {x:x,y:y}
                this.desired[i] = 0
            }
            
            
        }

            
        // for(let i=0;i<no;i++){
        //     console.log(dotTotal[i])
        //     console.log(desired[i])
        // }
    }
     
}