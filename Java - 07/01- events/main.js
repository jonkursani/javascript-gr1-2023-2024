const main = document.getElementById('main');

window.addEventListener('keypress', (event) => {
  //   console.log(event.target);
  main.innerHTML = '';

  const pressedKey = {
    key: event.key === ' ' ? 'Space' : event.key,
    keyCode: event.keyCode,
    code: event.code,
  };

  for (const key in pressedKey) {
    const div = document.createElement('div');
    div.className = 'key';
    // <div class='key'></div>
    const p = document.createElement('p');
    // <p></p>
    const pText = document.createTextNode(key);
    p.appendChild(pText);
    // <p>key</p>

    const h1 = document.createElement('h1');
    const h1Text = document.createTextNode(pressedKey[key]);
    h1.appendChild(h1Text);

    // div.appendChild(p);
    // div.appendChild(h1);
    div.append(p, h1);

    main.appendChild(div);
  }
});
