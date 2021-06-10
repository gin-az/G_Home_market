function liked() {
  console.log("like");
  var likeBtn = document.querySelector(".like-button");
  var plusBtn = document.querySelector(".plus");
  var minusBtn = document.querySelector(".minus");
  console.log("123");

  likeBtn.addEventListener("click", function () {
    if (likeBtn.classList == "like-button") {
      likeBtn.classList.remove("like-button");
      likeBtn.classList.add("like-button-active");
    } else if (likeBtn.classList == "like-button-active") {
      likeBtn.classList.remove("like-button-active");
      likeBtn.classList.add("like-button");
    }
    console.log(likeBtn.classList);
  });

  plusBtn.addEventListener("click", function () {
    this.previousElementSibling.stepUp();
  });

  minusBtn.addEventListener("click", function () {
    this.nextElementSibling.stepDown();
  });
}
