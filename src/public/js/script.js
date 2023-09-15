const themeDark  = () => {
  document.querySelector("body").setAttribute("data-bs-theme", "dark");
  document.getElementById("dl-icon").setAttribute("class", "bi bi-sun");
} 
const themeLight  = () => {
  document.querySelector('body').setAttribute('data-bs-theme', 'light');
  document.getElementById('dl-icon').setAttribute('class', 'bi bi-moon');
} 
const cambiarTheme = ( ) =>{
  document.querySelector('body').getAttribute('data-bs-theme')  === 'light'?
  themeDark() : themeLight() ;
}
