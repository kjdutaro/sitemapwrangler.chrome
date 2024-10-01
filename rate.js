let stars = Array.from(document.querySelectorAll("i"));
let selectedRating = -1;

stars.forEach((element, index) => {
    element.addEventListener("mouseover", () => {
        highlightStars(index);
    });

    element.addEventListener("click", () => {
        selectedRating = index;
    });

    element.addEventListener("mouseleave", () => {
        resetStars();
    });
});

function highlightStars(index) {
    stars.forEach((el, i) => {
        if (i <= index) {
            el.classList.add("selected");
        } else {
            el.classList.remove("selected");
        }
    });
}

function resetStars() {
    stars.forEach((el, i) => {
        if (i <= selectedRating) {
            el.classList.add("selected");
        } else {
            el.classList.remove("selected");
        }
    });
}
