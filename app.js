const questions = [
    {
        que: "Which of the following is a markup Language?",
        a: "HTML",
        b: "CSS",
        c: "JS",
        d: "PHP",
        correct: "a",
    },
    {
        que: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        que: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        que: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;

const loadQuestion = () => {
    reset();
    const data = questions[index];
    const optionInputs = document.querySelectorAll('.options');
    const queBox = document.getElementById("quebox");

    queBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerHTML = data.a;
    optionInputs[1].nextElementSibling.innerHTML = data.b;
    optionInputs[2].nextElementSibling.innerHTML = data.c;
    optionInputs[3].nextElementSibling.innerHTML = data.d;
};

const getSelectedOption = () => {
    const optionInputs = document.querySelectorAll('.options');
    let selectedOption;
    optionInputs.forEach((input) => {
        if (input.checked) {
            selectedOption = input.value;
        }
    });
    return selectedOption;
};

const deselectAll = () => {
    const optionInputs = document.querySelectorAll('.options');
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};

const handleSubmit = () => {
    const selectedOption = getSelectedOption();
    if (selectedOption === questions[index].correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    if (index < total) {
        loadQuestion();
    } else {
        document.querySelector('.box').innerHTML = `<h2>Your Score: ${right}/${total}</h2>`;
    }
};

const reset = () => {
    deselectAll();
};

document.querySelector('.btn').addEventListener('click', handleSubmit);

loadQuestion();
