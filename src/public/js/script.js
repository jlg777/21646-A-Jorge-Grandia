const themeDark  = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "dark");
  document.getElementById("dl-icon").setAttribute("class", "bi bi-sun");
} 
const themeLight  = () => {
  document.querySelector('body').setAttribute('data-bs-theme', 'light');
  document.getElementById('dl-icon').setAttribute('class', 'bi bi-moon-fill');
} 
const cambiarTheme = ( ) =>{
  document.querySelector('body').getAttribute('data-bs-theme')  === 'light'?
  themeDark() : themeLight() ;
}


const contenedor = document.getElementById("container-row");
const btnCrear = document.getElementById("btn-new");
const myModal = new bootstrap.Modal(document.getElementById("myModal"));
const btnSave = document.getElementById("btn-save");
const form = document.getElementById("formulario");

let html = "";
let option = "";
let idForm = "";

const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const inputPoster = document.getElementById("inputPoster");

btnCrear.addEventListener("click", () => {
  option = "new";
  btnSave.textContent = "new";
  inputTitle.value = "";
  inputDescription.value = "";
  inputPoster.value = "";
  myModal.show();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("submit");

  if (option === "new") {
    const newTask = {
      title: inputTitle.value,
      description: inputDescription.value,
      poster: inputPoster.value,
    };

    fetch('http://localhost:3000/crear', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    }).then(res => {
      console.log(res)
        if (res.ok) {
          alert("Task created successfully");
          myModal.hide();
          location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

 
});

document.addEventListener('click', (event) => {
  if (event.target.matches('#btn-delete')) {
      const article = event.target.closest('.col-4')
      const idArticle = article.dataset.id

      fetch(`http://localhost:3000/foros/${idArticle}`, {
          method: 'DELETE'
      }).then(res => {
          if (res.ok) {
              article.remove()
          }
      }).catch(err => {
          console.error(err)
      })
  }
})