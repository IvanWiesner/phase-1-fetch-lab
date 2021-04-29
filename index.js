function fetchBooks(){
fetch('https://anapioficeandfire.com/api/books')
  .then(function(response){
    return response.json()
})
  .then((result) => {
    console.log(renderBooks(result))
  })
}
//console.log(result)
const showCharacter = character => {
  let p = document.createElement('p')
  p.innerText = character.name
  document.body.append(p)
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

