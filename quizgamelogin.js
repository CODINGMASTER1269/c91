function send() {

    number1 = document.getElementById("number1").value;
    number1 = document.getElementById("number1").value;
    actual_answer = parseInt(number1)* parseInt(Number2);
}

question_number="<h4>"+number1+"x"+number2+"</h4>";
input_box="<br>Answer : <input type='text' id='input_check_box'>";
check_box="<br><br><button class='btn-btn-info' onclick='check()'>check</button>";
row= question_number+input_box+check_box;

document.getElementById("output").innerHTML=row;

document.getElementById("number1").value="";
document.getElementById("number2").value="";