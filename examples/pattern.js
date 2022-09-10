// document.write("hello");
// let n =3;
// for(let i = 1; i <= n; i++)
// {
//   for(let j = 1; j <= 2*n-1; j++)
//   {
//     if(i < j && i < 2*n-j)
//     {
//       document.write("_");
//     }
//     else {
//       document.write(i);
//     }

//   }
//     document.write("<br>")
// }

for(let i = 5; i >= 1; i--){
  for(let j = 1; j <=5; j++) {
    if(i == 5 || i ==1) {
      document.write(j);
    }

    else if( i <= j && i % j == 0) {
      document.write(j);
      // document.write("_");
    }
    else {
      document.write("_");
      // document.write(j);
    }
  }
  document.write(" <br> ");
}


let str = "PAHNAPLSIIGYIR";

for(let i = 1; i <= 3;i++){
  for(let j = 1; j <= 7; j++){
    if((i % 2 == 1) && (j % 2 == 0)){
      document.write( " _" )
    }
    else {
      document.write( "*" )
    }
  }
  document.write("<br>")
}