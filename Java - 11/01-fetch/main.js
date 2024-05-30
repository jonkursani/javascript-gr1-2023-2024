async function fetchPostsAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error('Error while fetching posts');
    }

    const data = await response.json();
    // console.log(data);
    // displayPostsWithTable(data);
    diplayPostsWithCard(data);
  } catch (e) {
    console.log(e);
  } finally {
  }
}

function displayPostsWithTable(posts) {
  const tblPosts = document.getElementById('tbl-posts');

  // for (const post of posts) {}

  // array methods
  // posts.forEach(function (post) {});

  // arrow function
  posts.forEach((post) => {
    // tblPosts.innerHTML += `
    //     <tr>
    //         <td>${post.id}</td>
    //         <td>${post.title}</td>
    //         <td>${post.body}</td>
    //         <td>${post.userId}</td>
    //     </tr>
    // `;

    const tr = document.createElement('tr');
    // <tr></tr>
    const td1 = document.createElement('td');
    // <td></td>
    td1.textContent = post.id;
    // <td>1</td>
    const td2 = document.createElement('td');
    td2.textContent = post.title;
    const td3 = document.createElement('td');
    td3.textContent = post.body;
    const td4 = document.createElement('td');
    td4.textContent = post.userId;

    tr.append(td1, td2, td3, td4);
    tblPosts.appendChild(tr);
  });
}

function diplayPostsWithCard(posts) {
  const postsDiv = document.getElementById('posts');

  posts.forEach((post) => {
    postsDiv.innerHTML += `
        <div class="card d-inline-block" style="width: 20rem;">
            <div class="card-body">
                <h5 class="card-title">
                    ${post.id} - ${post.title}
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                    <strong>User id:</strong> ${post.userId}
                </h6>
                <p class="card-text">${post.body}</p>
            </div>
        </div>
    `;
  });
}

fetchPostsAsync();
