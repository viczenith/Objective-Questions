function objectiveQuestion(){
    let score = 0;

    // Question 1
    var selectedOption = document.querySelector('input[name="president"]:checked');
    if (selectedOption && selectedOption.value === 'Emmerson Mnengagwa'){
        score++;
    }

    // Question 2
    var selectedOption = document.querySelector('input[name="q2_city"]:checked');
    if (selectedOption && selectedOption.value === 'Johannesburg'){
        score++;
    }

    // Question 3
    var selectedOption = document.querySelector('input[name="q3"]:checked');
    if (selectedOption && selectedOption.value === 'Mars'){
        score++;
    }
    // Question 4
    var selectedOption = document.querySelector('input[name="rectangle"]:checked');
    if (selectedOption && selectedOption.value === 'Length × Width'){
        score++;
    }
    // Question 5
    var selectedOption = document.querySelector('input[name="War"]:checked');
    if (selectedOption && selectedOption.value === '1945'){
        score++;
    }
    // Question 6
    var selectedOption = document.querySelector('input[name="water"]:checked');
    if (selectedOption && selectedOption.value === 'H2O'){
        score++;
    }
    // Question 7
    var selectedOption = document.querySelector('input[name="Lisa"]:checked');
    if (selectedOption && selectedOption.value === 'Leonardo da Vinci'){
        score++;
    }
    // Question 8
    var selectedOption = document.querySelector('input[name="solar"]:checked');
    if (selectedOption && selectedOption.value === 'Jupiter'){
        score++;
    }
    // Question 9
    var selectedOption = document.querySelector('input[name="play"]:checked');
    if (selectedOption && selectedOption.value === 'William Shakespeare'){
        score++;
    }
    // Question 10
    var selectedOption = document.querySelector('input[name="modern"]:checked');
    if (selectedOption && selectedOption.value === 'Albert Einstein'){
        score++;
    }

    // Set your display
    let resultDisplay = document.getElementById('result');
    resultDisplay.textContent = 'Your score is ' + score + ' out of 10.';
   
}

// Assignment: Write for 10 questions and let the users see their scores at the end of the assesment. Design an appealing interface like the JAMB OBJ interface.

