class circle{
  constructor(radius,color)
  {
    this.radius=radius;
    this.color=color;
  }
  getarea()
  {
    //return PI*radius*radius;
    return Math.PI * Math.pow(this.radius,2 );
  }
}
var r=new circle(11,"red");
console.log(r.getarea());