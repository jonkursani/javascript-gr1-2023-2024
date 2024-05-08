// Promise object i JS
// Promise statuses: pending, resolved (fulfilled), rejected

new Promise((resolve, reject) => {
  console.log(1);

  resolve(2); // resolve e dergon kodin te metoda then
  // reject('Rejected'); // reject e dergon kodin te metoda catch
})
  .then((num) => {
    console.log(num);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(3);

// window.document
// window.fetch

const fetchValue = fetch('./posts.json');
// console.log(fetchValue);

fetchValue
  .then((response) => {
    //   console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

function fetchPosts() {
  // fetch na kthen promise, duhet me handle me then edhe catch
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      // json() i kthen te dhenat ne json
      // return i bon pass te dhenat si parameter
      // ne then-in tjeter
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      displayPosts(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function fetchPostsAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  displayPosts(data);
}

async function fetchPhotosAsync() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos/1');
  const data = await response.json();
  //   console.log(data);
  displayPhotos(data);
}

function displayPosts(posts) {
  const ulPosts = document.getElementById('posts');
  posts.forEach((post) => {
    ulPosts.innerHTML += `<li>${post.id}: ${post.title}</li>`;
  });
}

function displayPhotos(photo) {
  const div = document.getElementById('photos');
  div.innerHTML += `<img src="${photo.thumbnailUrl}"/> ${photo.title}`;
}

// fetchPosts();
// fetchPostsAsync();
fetchPhotosAsync();
