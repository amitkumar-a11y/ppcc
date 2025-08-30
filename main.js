const header = document.getElementById("mainHeader");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});
// Smooth scroll using JS
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const header = document.getElementById('mainHeader');
        const headerHeight = header.offsetHeight;

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            history.pushState(null, null, `#${targetId}`);
        }
    });
});


const toggleBtn = document.querySelector('.button_container');
const menuWrap = document.querySelector('.overlay');
const menuLink = document.querySelectorAll(".scroll-link");
// const scrollLinks = document.querySelectorAll('.scroll-link'); 

toggleBtn.addEventListener('click', function () {

    if (menuWrap.classList.contains("open")) {
        menuWrap.classList.remove("open");
        toggleBtn.classList.remove("active");
        menuLink.classList.remove("open");
    } else {
        menuWrap.classList.add("open");
        toggleBtn.classList.add("active");
    }

});
menuLink.forEach(link => {
  link.addEventListener('click', function () {
    menuWrap.classList.remove("open");
    toggleBtn.classList.remove("active");
  });
});

  function formTitleFunction(elem){
    event.preventDefault(); 
    const newButton = elem.innerHTML.trim();
    document.getElementById("form-title-name").innerHTML = newButton;
    document.getElementById("myModalMasterPlan").style.display = "block"
  
  }

  function closeFn(){
    document.getElementById("myModalMasterPlan").style.display = "none"
  }


