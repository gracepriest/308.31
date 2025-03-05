document.write('<div class="container"><div class="card float-start"><div class="card-header"><h2>Part 1</h2></div>')
document.write('<div class="card-body">')
for(let i = 1; i < 101; i++ )
{
document.write("Number " + i + " is: ")
if(i % 5 == 0 && i % 3 == 0)
    {
        document.write("Fizz Buzz")
    }
else if(i % 3 == 0)
{
    document.write("Fizz")
}
else if(i % 5 == 0)
    {
        document.write("Buzz")
    }
    else{
        document.write("number is not divisible ")
    }
     
document.write("<br>")

}
document.write("</div>") 
 document.write("</div>")       


 document.write('<div class="container"><div class="card float-start"><div class="card-header"><h2>Part 1</h2></div>')
document.write('<div class="card-body">')
//using while loop instead
// let n = 1
// while(n < 101 )
// {

// if(n % 5 == 0 && n % 3 == 0)
//     {
//         document.write("Number " + n + " is: ")
//         document.write("Fizz Buzz")
//         document.write("<br>")
//     }
// else if(n % 3 == 0)
// {
//     document.write("Number " + n + " is: ")
//     document.write("Fizz")
//     document.write("<br>")
// }
// else if(n % 5 == 0)
//     {
//         document.write("Number " + n + " is: ")
//         document.write("Buzz")
//         document.write("<br>")
//     }
//     else{
//         //IF YOU WANT TO DISPLAY ALL NUMBERS
//         //uncomment
//         //document.write("Number " + n + " is: ")
//         //document.write("<br>")
//     }
     
//////
// n++
// }
// document.write("</div>") 
// document.write("</div>")       