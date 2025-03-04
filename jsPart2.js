
document.write("Default number is 20. Number can be changed")
document.write("<br>")
let n = 20
let isFound = false

//start at 2 we know 1 is good
while(isFound != true)
{
    n++
    let isPrime = true
    for(let i = 2; i < n; i++)
    {

        if(n %  i == 0)
        {
            isPrime = false
            break;
        }
        
    }
    if(isPrime)
    {
        isFound = true
        document.write("Number: " + n + " is prime")  
        
                
    }
}
    

 





document.write("</div>") 
document.write("</div>")       

function promptNumber(){
let n = parseInt(prompt("Enter a number to find prime","20"))
let isFound = false

//start at 2 we know 1 is good
while(isFound != true)
{
    n++
    let isPrime = true
    for(let i = 2; i < n; i++)
    {

        if(n %  i == 0)
        {
            isPrime = false
            break;
        }
        
    }
    if(isPrime)
    {
        isFound = true
        let newContent = document.createElement("p");
        newContent.textContent = "Number: " + n + " is prime"
        newContent.style.marginLeft = "1em"
        document.getElementById("mainCard").appendChild(newContent)
        
    }
}

 

}