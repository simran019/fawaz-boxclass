class Box
{
    constructor(x,y,w,h)
    //constructor(200,200,50,50)
    {
        //function 
        this.x=x;
        //box1.x=200
        this.y=y;
        //box1.y=200
        this.w=w;
        //box1.w=50
        this.h=h;
        //box1.h=50
    }
    fawaz()
    {
        //display a rectangle or a box on screen
        rect(this.x,this.y,this.w,this.h);
        
    }
}