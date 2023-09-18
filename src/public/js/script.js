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



const form = document.getElementById("formulario");
const btnCrear = document.getElementById("btn-edit");



const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const inputPoster = 'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg';

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const newTask = {
    title: inputTitle.value,
    description: inputDescription.value,
    poster: 'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg',
  };
  fetch('http://localhost:3000/crear', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    .then(res => {
      console.log(res)
        if (res.ok) {
          alert("Task created successfully");
          document.getElementById("formulario").reset();
          location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
      });

})

btnCrear.addEventListener("click", () => {
  const myModal = new bootstrap.Modal(document.getElementById("myModal"));
  myModal.show();
  });

  document.addEventListener('click', (event) => {
    if (event.target.matches('#btn-delete')) {
        const article = event.target.closest('.col-4')
        const idArticle = article.dataset.id

        fetch(`http://localhost:3000/tasks/${idArticle}`, {
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
