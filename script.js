 function calculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    if (name1 === "" || name2 === ""){
        alert("Please enter both names");
    }
    else{
        const lovePercentage = Math.floor(Math.random()* 101);
         
        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2} 's love Percentage: ${lovePercentage}`;
        if (lovePercentage < 30){
            result.innerHTML += "<br> Not a great Match. keep Looking!";
        }
        else if (lovePercentage > 30 && lovePercentage < 70){
            result.innerHTML += "<br> Not a great Match. Keep Looking!";
        }
        else{
            result.innerHTML += "<br> Great match I am Happy for You";
        }

    }

 }
