btnDarkModeToggle.addEventListener("click", function (e) {
  e.preventDefault();
  if (darkMode === false) {
    darkModeToggle();
  } else {
    lightModeToggle();
  }
});

btnAddStudentOpen.addEventListener("click", function (e) {
  e.preventDefault();
  addStudentContainer.style.display = "block";
  mainContainer.style.filter = "blur(3px)";
});

btnAddStudentClose.addEventListener("click", function (e) {
  e.preventDefault();
  addStudentContainer.style.display = "none";
  mainContainer.style.filter = "blur(0px)";
});

btnLoginHeader.addEventListener("click", function (e) {
  e.preventDefault();
  login();
  studentInformation.forEach((e) => {
    e.style.display = "block";
  });
});

btnLoginModalOpen.addEventListener("click", function (e) {
  e.preventDefault();
  loginContainer.style.display = "block";
  mainContainer.style.filter = "blur(3px)";
});

btnLoginModalClose.addEventListener("click", function (e) {
  e.preventDefault();
  loginContainer.style.display = "none";
  mainContainer.style.filter = "blur(0px)";
});
