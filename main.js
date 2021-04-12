// Задание 1 Создать html-страницу с формой для логина пользователя и галочкой «Запомнить меня». После заполнения формы вывести на экран: «Привет, Имя! Я тебя запомнил/не запомнил».
sub.addEventListener("click", () => {
  if (task1.Login.value.trim() == "") {
    alert("Enter Your Login");
  } else {
    task1.Rem.checked
      ? alert(`Привет ${task1.Login.value} я вас запомнил`)
      : alert(`Привет ${task1.Login.value} я вас ne запомнил`);
  }
});
// Задание 2 Создать html-страницу с формой для регистрации пользователя. Форма должна состоять из указания почты, логина, пароля (2 раза). После заполнения формы вывести на экран: «На почту такую-то отправлено письмо с подтверждением». 
signup.addEventListener("click", (event) => {
  //   event.preventDefault();
  if (
    task2.Login.value.trim() == "" ||
    task2.Pass.value.trim() == "" ||
    task2.Email.value.trim() == ""
  ) {
    alert("Enter Data!!");
  } else if (
    task2.Pass.value.trim() < 8 &&
    task2.Pass.value.trim() !== task2.Pass_confirm.value.trim()
  ) {
    alert("Wrong Password");
  } else {
    alert(`На почту ${task2.Email.value} отправленно письмо с подтверждением`);
  }
});
// Задание 3 Создать html-страницу с формой для заполнения информации о пользователе. После заполнения формы вывести всю введенную информацию в текстовом виде. 
function person(firstname, lastname, birthday, gender, country, city, skills) {
  return {
    firstname: firstname,
    lastname: lastname,
    birthday: birthday,
    gender: gender,
    country: country,
    city: city,
    skills: skills,
  };
}
save.addEventListener("click", (event) => {
  event.preventDefault();
  skillValue = new Array();
  for (let i = 0; i < task3.skills.length; i++) {
    if (task3.skills[i].checked) {
      skillValue.push(task3.skills[i].value);
    }
  }
  let inputData = person(
    task3.firstname.value,
    task3.lastname.value,
    task3.birthday.value,
    task3.gender.value,
    task3.country.value,
    task3.city.value,
    skillValue
  );
  Firstname.textContent = `${inputData.firstname}`;
  Lastname.textContent = `${inputData.lastname}`;
  Birthday.textContent = `${inputData.birthday}`;
  Gender.textContent = `${inputData.gender}`;
  Country.textContent = `${inputData.country}`;
  City.textContent = `${inputData.city}`;
  Skills.textContent = `${skillValue.join(", ")}`;

  console.log(skillValue);
});

// Задание 4 Создать html-страницу с палитрой цветов и формой для добавления нового цвета. После заполнения формы новый цвет должен добавиться в палитру.
AddColor.addEventListener("click", () => {
  console.log(task4.red.value.length);
  if (
    parseInt(task4.red.value) < 0 ||
    parseInt(task4.red.value) > 255 ||
    parseInt(task4.green.value) < 0 ||
    parseInt(task4.green.value) > 255 ||
    parseInt(task4.blue.value) < 0 ||
    parseInt(task4.blue.value) > 255 ||
    task4.red.value === "" ||
    task4.green.value === "" ||
    task4.blue.value === "" ||
    task4.red.value.length > 3 ||
    task4.green.value.length > 3 ||
    task4.blue.value.length > 3
  ) {
    alert("Wrong DATA");
  } else {
    colorCreate(task4.red.value, task4.green.value, task4.blue.value);
  }
});

function colorCreate(red, green, blue) {
  (red = task4.red.value),
    (green = task4.green.value),
    (blue = task4.blue.value);

  $mainResult = document.createElement("div");
  resultColor.appendChild($mainResult);
  $mainResult.classList.add("col-3", "row", "so", 'justify-content-center"');
  $color = document.createElement("div");
  $color.classList.add("col-6");
  $tempText = document.createElement("P");
  $tempText.textContent = "aa";
  $tempText.style.color = "#ff000000";
  $color.appendChild($tempText);
  $text = document.createElement("P");
  $text.classList.add("col-6");
  $text.textContent = `RGB(${task4.red.value},${task4.green.value},${task4.blue.value})`;
  $text.style.color = "black";
  $mainResult.appendChild($color);
  $mainResult.appendChild($text);
  $color.style.backgroundColor = `rgb(${parseInt(task4.red.value)},${parseInt(
    task4.green.value
  )},${parseInt(task4.blue.value)})`;
}

// Задание 5
// Написать html-страницу для создания теста из любого количества вопросов. К вопросу можно добавлять один верный и один
// неверный ответ. При добавлении каждого вопроса отображать его
// в списке над формой.
addQues.addEventListener("click", (event) => {
  event.preventDefault();
  if(task5.question.value === ''){
    alert('Enter question!!!!')
  } else if (task5.corAnswer.value === ''){
    alert('Enter Correct Answer!!!!')
  } else{
    createQuestion(task5.question.value,task5.corAnswer.value,task5.wroAnswer.value)

  }
});


function createQuestion(question,corAnswer,wroAnswer){
  $newQues = document.createElement("div");
  $textQues = document.createElement("p");
  $corAnswer = document.createElement("p");
  $wroAnswer = document.createElement("p");
  $hr = document.createElement("hr");

  $textQues.textContent = `${question}?`;
  $textQues.style.textDecoration = "underline";
  $corAnswer.textContent = `Correct Answer:  ${corAnswer}`;
  $wroAnswer.textContent = `Wrong Answer:  ${wroAnswer}`;

  $newQues.appendChild($textQues);
  $newQues.appendChild($corAnswer);
  $newQues.appendChild($wroAnswer);
  $newQues.appendChild($hr)
  qContent.insertAdjacentElement("afterend", $newQues);

}