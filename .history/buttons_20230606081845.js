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
