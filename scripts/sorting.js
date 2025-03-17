let arrsizer = document.querySelector("#sizer");

arrsizer.addEventListener("input", function () {
  generateBars(parseInt(arrsizer.value));
});
generateBars();

let time = 100;

let sortSpeed = document.querySelector("#speed");
sortSpeed.addEventListener("input", function () {
  time = 245 - parseInt(sortSpeed.value);
});

// Function to generate bars with random heights
function generateBars(noBar = 60) {
  document.getElementById("bar").innerHTML = "";
  let bars = Array.from(
    { length: noBar },
    () => Math.floor(Math.random() * 400) + 1
  );

  const divs = document.querySelector("#bar");
  bars.forEach((height) => {
    const temp = document.createElement("div");
    temp.classList.add("sort", "baritem");
    temp.style.height = height + "px";
    divs.append(temp);
  });
}

document.getElementById("newarr").addEventListener("click", function () {
  generateBars(arrsizer.value);
  enableSortingBtn();
  enableSizeSlider();
});

// Function to swap heights of two elements
function swap(ele1, ele2) {
  let temp = ele1.style.height;
  ele1.style.height = ele2.style.height;
  ele2.style.height = temp;
}

function delay(milisec) {
  return new Promise((resolve) => setTimeout(resolve, milisec));
}

// Enable or disable sorting buttons
function disableSortingBtn() {
  document
    .querySelectorAll("#bubble, #insertion, #merge, #quick, #selection")
    .forEach((btn) => (btn.disabled = true));
}

function enableSortingBtn() {
  document
    .querySelectorAll("#bubble, #insertion, #merge, #quick, #selection")
    .forEach((btn) => (btn.disabled = false));
}

function disableSizeSlider() {
  document.getElementById("sizer").disabled = true;
}

function enableSizeSlider() {
  document.getElementById("sizer").disabled = false;
}
