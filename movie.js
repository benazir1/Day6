a)class Movie{
     constructor(title,studio,rating)
     {
       this.title=title;
       this.studio=studio;
       this.rating=rating;
     }

}

b)class Movie{
     constructor(title,studio,rating)
     {
       this.title=title;
       this.studio=studio;
       this.rating="PG";
     }
     
c) getPG(Movie[] mov) {
 Movie[] pgMov = new Movie[mov.length];
 int newArrayIndex = 0;
 for (int i = 0; i < mov.length; i++) {
 if (mov[i].rating.equals(“PG”)) {
 pgMov[newArrayIndex] = mov[i];
 newArrayIndex++;
 }
 }
 return pgMov;
}
}
}
d) var c=new Movie("Casino Royal", "Eon Productions", "PG13");