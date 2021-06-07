var secretNum = Math.floor((Math.random()*100)+1);
var chance=1;

function start(){
	document.getElementById("start").style.display = "none";
	document.getElementById("game").style.display = "block";
	document.getElementById("num").focus();
}

//if user presses the enter key to submit the number
function enter(e){
	//alert("Key pressed");
	if(e.keyCode == 13){
		check();
	}
}


function check()
{
	//alert("calling function check");
	userNum = document.getElementById("num").value;
	//alert(userNum);
	if(userNum >= 1 && userNum <= 100)
	{
		//alert("Valid num");
		if(userNum == secretNum)
		{
			//alert("You win");
			document.getElementById("num").style.display = "none";
			document.getElementById("numMsg").style.display = "block";
			document.getElementById("numMsg").innerHTML = userNum;
			document.getElementById("btn").style.visibility = "hidden";
			document.getElementById("close").innerHTML = "";
			document.getElementById("msg1").innerHTML = "Congratulations!!! You win. The secret number is "+secretNum;
			document.getElementById("msg1").style.background = "red";
			document.getElementById("msg1").style.padding = "10px";
			return;
		}
		else
		{
			//alert("try again");
			
			/*
			step 1
			******
			try for next number 
			*/
			//hide text box so user knows for sure what num they have entered
			document.getElementById("num").style.display = "none";

			//display non-editable block with userNum
			document.getElementById("numMsg").style.display = "block";
			document.getElementById("numMsg").innerHTML = userNum;

			// change btn text and function
			document.getElementById("btn").innerHTML = "Try Again";
			document.getElementById("btn").setAttribute("onclick","next()");

			// Check if secretNum is > or < then userNum,
			// check if difference if 5 or less
			if(userNum > secretNum)
			{
				document.getElementById("msg1").innerHTML = "Secret number is less then your number";
				if(userNum-secretNum <= 5)
				{
					document.getElementById("close").innerHTML = "You are so close!!! ";
				}
				else
				{
					// In case "close" already has some text
					document.getElementById("close").innerHTML = "";
				}
			}
			else
			{
				document.getElementById("msg1").innerHTML = "Secret number is greater then your number";
				if(secretNum-userNum <= 5)
				{
					document.getElementById("close").innerHTML = "You are so close!!! ";
				}
				else
				{
					// In case "close" already has some text
					document.getElementById("close").innerHTML = "";
				}
			}
		}
	} // end of checking if num is valid
	else
	{
		alert("Invalid num");
		/*
		step 2
		******
		if num entered is invalid, 
		only the if condition to check num's will not take place,
		rest all will be same as above, with an error msg
		*/

		//hide text box so user knows for sure what num they have entered
		document.getElementById("num").style.display = "none";

		//display non-editable block with userNum
		document.getElementById("numMsg").style.display = "block";
		document.getElementById("numMsg").innerHTML = userNum;

		//change btn text and function
		document.getElementById("btn").innerHTML = "Try Again";
		document.getElementById("btn").setAttribute("onclick","next()");

		//Error message
		document.getElementById("msg1").innerHTML = "Invalid Entry!!! Enter a number between 1 - 100";
	}
	chance++;
	if(chance == 6)
	{
		document.getElementById("msg1").innerHTML = "Sorry!!! You lose. The secret number is "+secretNum;
		document.getElementById("msg1").style.background = "red";
		document.getElementById("msg1").style.padding = "10px";
		document.getElementById("close").innerHTML = "";
		document.getElementById("btn").style.visibility = "hidden";
	}


}

/*
step 3
******
we call function next,
change a bunch of html settings & increase chance by 1
*/
function next()
{
	//alert("calling function next()");
	//add lastest userNum to list of numbers entered
	document.getElementById("nos").innerHTML = 
	document.getElementById("nos").innerHTML+ userNum + ", ";

	//change btn text and function to check()
	document.getElementById("btn").innerHTML = "Submit";
	document.getElementById("btn").setAttribute("onclick","check()");

	//hide non-editable block
	document.getElementById("numMsg").style.display = "none";

	//display, empty and focus on input field
	document.getElementById("num").style.display = "inline";
	document.getElementById("num").value = "";
	document.getElementById("num").focus();

	//change the value of chance
	document.getElementById("chance").innerHTML = chance;
	

}