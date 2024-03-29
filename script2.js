// Check the scroll position and toggle the visibility of the scroll-up button
window.addEventListener("scroll", function () {
    var scrollUpButton = document.querySelector(".scroll-up-button");
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      scrollUpButton.style.opacity = "1";
    } else {
      scrollUpButton.style.opacity = "0";
    }
  });
  
  // Smooth scroll to the top when the button is clicked
  document
    .querySelector(".scroll-up-button")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      scrollToElement("home", 0); // Scroll to the top with an offset of 0
    });
  
  function scrollToElement(elementId, offset) {
    var element = document.getElementById(elementId);
    if (element) {
      var elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }
  