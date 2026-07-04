document.addEventListener("DOMContentLoaded", function () {
  var grid = document.getElementById("student-grid");

  if (!grid) {
    return;
  }

  var components = [
    "components/student-01.html",
    "components/student-02.html",
    "components/student-03.html",
    "components/student-04.html",
    "components/student-05.html",
    "components/student-06.html",
    "components/student-07.html"
  ];

  loadComponents();

  async function loadComponents() {
    for (var i = 0; i < components.length; i++) {
      var componentPath = components[i];

      try {
        var response = await fetch(componentPath);

        if (!response.ok) {
          throw new Error("No se pudo cargar " + componentPath + ".");
        }

        var html = await response.text();
        grid.insertAdjacentHTML("beforeend", html);
      } catch (error) {
        var message = document.createElement("article");
        message.className = "student-card";
        message.innerHTML =
          '<p class="error-message">Error: no se pudo cargar el componente ' +
          componentPath +
          ".</p>";
        grid.appendChild(message);
      }
    }
  }
});
