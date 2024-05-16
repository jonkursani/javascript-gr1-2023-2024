async function fetchUserAsync() {
  const url = 'https://randomuser.me/api/';

  // fetch(url).then().catch();
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  diplayUser(data.results[0]);
}

function diplayUser(user) {
  const div = document.querySelector('.container');

  if (user.gender === 'female') {
    document.body.style.backgroundColor = 'purple';
  } else {
    document.body.style.backgroundColor = 'blue';
  }

  div.innerHTML = `
        <div class="card" style="width: 18rem" id="main">
            <img src="${user.picture.large}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">
                    ${user.name.first} ${user.name.last}
                </h5>
                <p class="card-text">
                    Gender: <strong>${user.gender}</strong>
                </p>
                <p class="card-text">
                    Country: <strong>${user.location.country}</strong>
                </p>
                <p class="card-text">
                    Email: <strong>${user.email}</strong>
                </p>
            </div>
        </div>
    `;
}

document.getElementById('btn-generate').addEventListener('click', fetchUserAsync);
