function animate() {
  var animateList = document.querySelectorAll(".animate__animated");

  for (var i = 0; i < animateList.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animateList[i].getBoundingClientRect().top;
    var elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      animateList[i].classList.add("animate__fadeInUp");
    }
  }
}
animate();

window.addEventListener("scroll", animate);
