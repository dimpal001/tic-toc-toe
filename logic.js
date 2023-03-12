var buttons = document.querySelectorAll(".box");
var value = "X";
var noOfBox = 0;
buttons.forEach(function(box){
    box.addEventListener('click', function(){
        if(value == "X"){
            this.innerHTML = "O";
            value = "O";
            this.style.pointerEvents = "none";
            noOfBox += 1;
            if(noOfBox == 9){
                document.querySelector(".board").style.pointerEvents = "none";
                document.querySelector(".mainFrame").style.opacity = "0.4";
                document.querySelector("#winner").innerHTML = "Draw ! no one";
                document.querySelector(".result").classList.remove("removeClass");
            }
            checkresult();
        }
        else if(value == "O"){
            this.innerHTML = "X";
            value = "X";
            this.style.pointerEvents = "none";
            noOfBox += 1;
            if(noOfBox == 9){
                document.querySelector(".board").style.pointerEvents = "none";
                document.querySelector(".mainFrame").style.opacity = "0.4";
                document.querySelector("#winner").innerHTML = "Draw ! no one";
                document.querySelector(".result").classList.remove("removeClass");
            }
            checkresult();
        }
        else{
            this.innerHTML = "X";
            value = "O";
            this.style.pointerEvents = "none";
            noOfBox += 1;
            if(noOfBox == 9){
                
            }
            checkresult();
        }
    })
});

function checkresult(){
    var box1 = document.querySelector(".box1").innerHTML;
    var box2 = document.querySelector(".box2").innerHTML;
    var box3 = document.querySelector(".box3").innerHTML;

    var box4 = document.querySelector(".box4").innerHTML;
    var box5 = document.querySelector(".box5").innerHTML;
    var box6 = document.querySelector(".box6").innerHTML;

    var box7 = document.querySelector(".box7").innerHTML;
    var box8 = document.querySelector(".box8").innerHTML;
    var box9 = document.querySelector(".box9").innerHTML;

    if(box1 == "X" && box2 == "X" && box3 =="X" || box1 == "O" && box2 == "O" && box3 =="O"){
        console.log(box1);
        if(box1 == "X"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player2").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
        else if(box1 == "O"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player1").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
    }
    else if(box1 == "X" && box5 == "X" && box9 =="X" || box1 == "O" && box5 == "O" && box9 =="O"){
        if(box1 == "X"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player2").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
        else if(box1 == "O"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player1").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
    }
    else if(box1 == "X" && box4 == "X" && box7 =="X" || box1 == "O" && box4 == "O" && box7 =="O"){
        if(box1 == "X"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player2").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
        else if(box1 == "O"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player1").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
    }
    else if(box2 == "X" && box5 == "X" && box8 =="X" || box2 == "O" && box5 == "O" && box8 =="O"){
        if(box2 == "X"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player2").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
        else if(box2 == "O"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player1").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
    }
    else if(box3 == "X" && box5 == "X" && box7 =="X" || box3 == "O" && box5 == "O" && box7 =="O"){
        if(box3 == "X"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player2").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
        else if(box3 == "O"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player1").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
    }
    else if(box3 == "X" && box6 == "X" && box9 =="X" || box3 == "X" && box6 == "X" && box9 =="X"){
        if(box3 == "X"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player2").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
        else if(box3 == "O"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player1").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
    }
    else if(box4 == "X" && box5 == "X" && box6 =="X" || box4 == "O" && box5 == "O" && box6 =="O"){
        if(box4 == "X"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player2").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
        else if(box4 == "O"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player1").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
    }
    else if(box7 == "X" && box8 == "X" && box9 =="X" || box7 == "O" && box8 == "O" && box9 =="O"){
        if(box7 == "X"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player2").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
        else if(box7 == "O"){
            document.querySelector(".board").style.pointerEvents = "none";
            document.querySelector(".mainFrame").style.opacity = "0.4";
            document.querySelector("#winner").innerHTML = document.querySelector(".player1").innerHTML;
            document.querySelector(".result").classList.remove("removeClass");
        }
    }

}

document.getElementById("letsPlay").addEventListener("click", function(){
    if(document.querySelector("#player1").value == "" || document.querySelector("#player2").value == ""){

    }
    else{
        document.querySelector(".player1").innerHTML = document.querySelector("#player1").value;
    document.querySelector(".player2").innerHTML = document.querySelector("#player2").value;
    document.querySelector(".popup").remove();
    }
});
