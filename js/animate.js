const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

// Flags
let heroActionExecuted = false;
let brandsActionExecuted = false;
let aboutUsActionExecuted = false;
let serviceActionExecuted = false;
let careerActionExecuted = false;

// Callback function
const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    switch (entry.target.id) {
      case "Hero":
        if (!heroActionExecuted && entry.isIntersecting) {
          document.querySelectorAll(".rotate").forEach((element) => {
            element.classList.add("deactive");
          });
          heroActionExecuted = true;
        }
        break;
      case "Brands":
        if (!brandsActionExecuted && entry.isIntersecting) {
          // Action for Service section
          // Add your code here
          brandsActionExecuted = true;
        }
        break;
      case "AboutUs":
        if (!aboutUsActionExecuted && entry.isIntersecting) {
          const textElement = document.querySelector(".about_txt > h3");
          document.querySelectorAll(".left_right").forEach((element) => {
            element.classList.add("deactive");
          });
          animateBlinking(textElement);
          aboutUsActionExecuted = true;
        }
        break;
      case "Service":
        if (!serviceActionExecuted && entry.isIntersecting) {
          document
            .querySelectorAll("#service_grid .grid_items")
            .forEach((element) => {
              element.classList.add("deactive");
            });
          serviceActionExecuted = true;
        }
        break;
      case "Career":
        if (!careerActionExecuted && entry.isIntersecting) {
          const element = document.querySelector(".dots > .spin");
          if (element) {
            element.classList.add("deactive");
          }
          careerActionExecuted = true;
        }
        break;
      default:
        break;
    }
  });
};

//Intersection Observers
["Hero", "Brands", "AboutUs", "Service", "Career"].forEach((sectionId) => {
  const section = document.getElementById(sectionId);
  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(section);
});

// Handles writeOn effect

function animateBlinking(textElement) {
  if (textElement) {
    const text = textElement.textContent.trim();
    const lastLetter = text.slice(-1);
    const textWithoutLastLetter = text.slice(0, -1);

    function blinkLastLetter() {
      if (textElement.textContent.endsWith(lastLetter)) {
        textElement.textContent = textWithoutLastLetter;
      } else {
        textElement.textContent = text;
      }
    }

    setInterval(blinkLastLetter, 500);
  }
}
