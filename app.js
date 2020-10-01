const add = () => {
    let eng = document.getElementById('input1').value;
    let comp = document.getElementById('input2').value;
    let chemistry = document.getElementById('input3').value;
    let maths = document.getElementById('input4').value;
    let grade = ""
    
    
    let totalMarks = parseFloat(eng) + parseFloat(comp) + parseFloat(chemistry) + parseFloat(maths);
    let percentage = (totalMarks/400) * 100;

    if(percentage <= 100 && percentage >= 80){
        grade = 'A+'
    }else if(percentage <= 79 && percentage >= 60) {
        grade = 'A'
    }else if(percentage <= 59 && percentage >= 50) {
            grade = 'C'
    }else if(percentage <= 49 && percentage >= 40) {
            grade = 'C'
    }else{
        grade = 'F'
    }   

   if(percentage >= 40){
    document.getElementById('showData').innerHTML =
    `Your Total Marks Is ${totalMarks} Out Of 400. And Your Percentage is ${percentage}%. And Your Grade is ${grade}. You Are Pass `  
   }else{
    document.getElementById('showData').innerHTML = 
   `Your Total Marks Is ${totalMarks} Out Of 400. And Your Percentage is ${percentage}%. And Your Grade is ${grade}. You Are fail `  
   }
};



