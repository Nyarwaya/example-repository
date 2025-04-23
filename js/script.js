const postForm = document.getElementById('postForm');
const postList = document.getElementById('postList');

postForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (!title || !content) return;

  const post = document.createElement('div');
  post.classList.add('post');

  const date = new Date().toLocaleDateString();

  post.innerHTML = `
    <h3>${title}</h3>
    <small>Posted on ${date}</small>
    <p>${content}</p>
    <button class="delete-btn">Delete</button>
  `;

  post.querySelector('.delete-btn').addEventListener('click', () => {
    post.remove();
  });

  postList.prepend(post);

  postForm.reset();
});
