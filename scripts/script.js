// JavaScript Document

// Notification js https://www.youtube.com/watch?v=pbg6uLXm5gc&ab_channel=AngelaDesign
const addButton = document.getElementById("add-button");
const addNotification = document.getElementById("added-article-notifcation");

addButton.addEventListener("click", () => {
  addNotification.classList.add("added-article-show");
  setTimeout(function () {
    // hide the block after 2000ms
    addNotification.classList.remove("added-article-show");

    // add visibility back after 2000ms
    setTimeout(function () {
      addNotification.classList.add(".added-article-show");
    }, 3000);
  }, 3000);
});

// Accordion js https://www.youtube.com/watch?v=4w2bcqb25VQ&t=6s&ab_channel=HeyItzaMi
const accordionTitles = document.querySelectorAll(".accordion");

accordionTitles.forEach((accordionTitle) =>
  accordionTitle.addEventListener("click", () => {
    accordionTitle.classList.toggle("accordion-selected");

    const arrowDown = accordionTitle.querySelector(".arrow-down");
    const arrowUp = accordionTitle.querySelector(".arrow-up");

    if (arrowDown.style.display === "none") {
      arrowDown.style.display = "flex";
      arrowUp.style.display = "none";
    } else {
      arrowDown.style.display = "none";
      arrowUp.style.display = "flex";
    }
  })
);
