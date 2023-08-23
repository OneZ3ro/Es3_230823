fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseObj) => responseObj.json())
  .then((usersObj) => {
    createCards(usersObj);
  })
  .catch((error) => console.log(error));

const createCards = (usersObj) => {
  const row = document.querySelector(".row");
  // console.log(usersObj);
  usersObj.forEach((elem) => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
        <div class="card">
        <img src="${elem.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${elem.title}</h5>
          <p class="card-text">Prezzo: ${elem.price}$</p>
          <button href="#" class="btn btn-primary" onclick="removeCol(event)">Scarta</button>
        </div>
      </div>
        `;
    // console.log(btn);

    row.appendChild(col);
  });
};

const removeCol = (event) => {
  console.log(event.target.parentElement.parentElement.parentElement);
  event.target.parentElement.parentElement.parentElement.remove();
};
