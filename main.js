// Seleciona todos os círculos e imagens
const circles = document.querySelectorAll('.circle');
const images = document.querySelectorAll('.imgbox img');

// Adiciona evento de clique em cada círculo
circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    // Remove a classe 'active' de todos os círculos e imagens
    circles.forEach((c) => c.classList.remove('active'));
    images.forEach((img) => img.classList.remove('active'));

    // Adiciona a classe 'active' ao círculo clicado e à imagem correspondente
    circle.classList.add('active');
    const colorId = circle.id; // Obtém o ID do círculo clicado
    document.querySelector(`.imgbox img#${colorId}`).classList.add('active');
  });
});



// box 2


 // Seleciona todos os círculos e imagens
const circles2 = document.querySelectorAll('.circle2');
const images2 = document.querySelectorAll('.imgbox2 img');

// Adiciona evento de clique em cada círculo
circles2.forEach((circle2) => {
  circle2.addEventListener("click", () => {
    // Remove a classe 'active' de todos os círculos e imagens
    circles2.forEach((c) => c.classList.remove('active'));
    images2.forEach((img) => img.classList.remove('active'));

    // Adiciona a classe 'active' ao círculo clicado e à imagem correspondente
    circle2.classList.add('active');
    const colorId = circle2.id; // Obtém o ID do círculo clicado
    document.querySelector(`.imgbox2 img#${colorId}`).classList.add('active');
  });
});



// box3



 // Seleciona todos os círculos e imagens
 const circles3 = document.querySelectorAll('.circle3');
 const images3 = document.querySelectorAll('.imgbox3 img');
 
 // Adiciona evento de clique em cada círculo
 circles3.forEach((circle3) => {
   circle3.addEventListener("click", () => {
     // Remove a classe 'active' de todos os círculos e imagens
     circles3.forEach((c) => c.classList.remove('active'));
     images3.forEach((img) => img.classList.remove('active'));
 
     // Adiciona a classe 'active' ao círculo clicado e à imagem correspondente
     circle3.classList.add('active');
     const colorId = circle3.id; // Obtém o ID do círculo clicado
     document.querySelector(`.imgbox3 img#${colorId}`).classList.add('active');
   });
 });

//  video sports
document.addEventListener("DOMContentLoaded", function () {
  const sportsVideos = document.querySelectorAll(".sportback video");
  sportsVideos.forEach(video => {
      video.playbackRate = .4;
  });
});

// JACKETS

 // Seleciona todos os círculos e imagens
 const circlesj = document.querySelectorAll('.circlej');
 const imagesj = document.querySelectorAll('.imgboxj img');
 
 // Adiciona evento de clique em cada círculo
 circlesj.forEach((circlej) => {
   circlej.addEventListener("click", () => {
     // Remove a classe 'active' de todos os círculos e imagens
     circlesj.forEach((c) => c.classList.remove('active'));
     imagesj.forEach((img) => img.classList.remove('active'));
 
     // Adiciona a classe 'active' ao círculo clicado e à imagem correspondente
     circlej.classList.add('active');
     const colorId = circlej.id; // Obtém o ID do círculo clicado
     document.querySelector(`.imgboxj img#${colorId}`).classList.add('active');
   });
 });


// carrinho de compras
let CartItemCount = 0

function addToCart(){
  CartItemCount++;

 document.getElementById('cartcount');

 cartcount.innerText = CartItemCount;
 if(CartItemCount > 0){
  cartcount.style.display = 'flex';
 }
cartcount.classList.add('animate');
setTimeout(() => cartcount.classList.remove('animate'),200);
 }
// abrir e fechar menu shop

const buttoncart = document.getElementById('cartbutton');
const shopmenu = document.getElementById('shopmenu');
  
buttoncart.addEventListener('click' , () =>{
 if(shopmenu.style.display === 'none'){
  shopmenu.style.display = 'flex'
 }
 else{
   shopmenu.style.display = 'none'}
 
  
});

// nav categories


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tabbtn");

  const sections = document.querySelectorAll(".wrapper");



  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      sections.forEach(section => section.classList.add("hidden"));

      

      const contentId = button.getAttribute("content-id");


      const sectionToShow = document.querySelector(`.wrapper[content-id="${contentId}"]`);

      
      if (sectionToShow) {
        sectionToShow.classList.remove("hidden");
      }
    });
  });
});

