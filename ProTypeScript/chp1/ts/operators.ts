/** Increment/Decrement Operators */
enum Week {
  Sun,
  Mon, 
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

let size = Week.Sun;
while(size <= Week.Sat) {
  console.log(Week[size]);
  size++;
}