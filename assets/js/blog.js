const backBtn = document.querySelector("#back-button");
const postsContainer = document.getElementById('posts-container');
backBtn.addEventListener("click", (err) => {
  localStorage.clear();
    window.location.href = "index.html";
});
function loadFromLocalStorage() {
  console.log("logged");
  const storedData = JSON.parse(localStorage.getItem("posts-container"));
  if (storedData) {
    processData(storedData[0]);
  }
}
function processData (blogData) {
  console.log(blogData)
  const postEl = document.createElement('div');
  postEl.innerHTML = `
  <h3>by ${blogData.username}</h3>
  <p>${blogData.content}</p>`
  postsContainer.appendChild(postEl);
}

loadFromLocalStorage();