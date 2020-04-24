// Change color of shirt when color is selected
function updateGarment(e) {
  let garment = document.querySelector('#proof');
  let garmenturl = e.dataset.im; //image URL
  let colortext = document.getElementById('colortext');
  garment.style.backgroundImage = `url(\" ${garmenturl} \")`;
  colortext.innerHTML = e.dataset.color.toUpperCase(); }

// Load an image that a user loads
// .inpfileLoad #proof #design
const inpFileLoad = document.getElementById("inpFileLoad");
const divDesign = document.getElementById("divDesign");
const imgDesign = document.getElementById("imgDesign");

inpFileLoad.addEventListener("change", function() {
  const file = this.files[0];
  if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", function() {
        imgDesign.setAttribute("src", this.result);
      });
      reader.readAsDataURL(file);
  }
});




// garment = document.querySelector('#proof');
// function updateGarment(e) {
//  garment.style.backgroundImage = "url(" +  e.dataset.im + ")";
// }


// garment = document.querySelector('#garment');
// function updateGarment(e) {
//   garment.src=e.dataset.im; }
