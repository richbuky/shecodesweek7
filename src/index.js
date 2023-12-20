function FormSubmit(event) {
  event.preventDefault();
  let SearchInput = document.querySelector("#search-form-input");
  let Cityelement = document.querySelector("#city");
  Cityelement.innerHTML = SearchInput.value;
}

let Searchformelement = document.querySelector("#search-form");
Searchformelement.addEventListener("submit", FormSubmit);
