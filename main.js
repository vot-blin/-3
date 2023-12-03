const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
    menuList.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenuVisibility);

const portfolioOpenButton = document.querySelector(".portfolio__btn")
const portfolioContent = document.querySelector(".portfolio_content")

function togglePortfolioContent() {
    portfolioContent.classList.toggle("hide")
}

portfolioOpenButton.addEventListener("click", togglePortfolioContent)