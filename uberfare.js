class uber{
  constructor(basefare,distancefare)
  {
    this.basefare=basefare;
    this.distancefare=distancefare;
  }
  gettotalfare()
{
  var fare= this.basefare*this.distancefare;
  return "your fare="+fare;
}

}
var c=new uber(800,12);
console.log(c.gettotalfare());