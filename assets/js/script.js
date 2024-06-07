const newPost = document.querySelector("#submit");
const toggleSwitch = document.querySelector("#toggle-switch");
const saveToLocalStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key)) || [];

let tempStorageObject = {
  username: [],
  content: [],
};
const message = document.getElementById("content");
newPost.addEventListener('submit', (event) => {
  event.preventDefault();
  const blogData = {
    username: username,
    content: content,
  };
  localStorage.setItem('posts-container', JSON.stringify(blogData));
  window.location.href = 'blog.html';
})
newPost.addEventListener('click', (err) => {
  const username = document.getElementById('username').value.trim();
  const content = document.getElementById('content').value.trim();
  if (username && content) {
    const posts = getFromLocalStorage('posts-container');
    posts.push({username, content});
    saveToLocalStorage('posts-container', posts);
    window.location.href = 'blog.html';
  }
})

function updateLocalStorage() {
  localStorage.setItem("posts-container", JSON.stringify(tempStorageObject));
}



toggleSwitch.addEventListener("click", () => {
  const toggleButton = document.getElementById("toggle-switch");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
window.onload = loadFromLocalStorage;