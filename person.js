class person{
   constructor(name,gender,age)
   {
     this.name=name;
     this.gender=gender;
     this.age=age;
   }
   getdetails()
   {
     return "your name is" + this.name  +"your gender is" +this.gender +"your age is" +this.age;
   }

}
var p1=new person("bena","female",32);
//console.log(p1.getdetails());
console.log(p1.getdetails());