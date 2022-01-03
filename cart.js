var cartarr = JSON.parse(localStorage.getItem("datas")) || [];

document.getElementById("count").innerHTML = `Total Cart Items - ${cartarr.length}. Please go back and add more items`
console.log(cartarr);

//document.getElementById("count").textContent = cartarr.length;

showItems(cartarr);

function showItems(arr) {
  arr.forEach(function (el) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.src = el.img;

    var h1 = document.createElement("h2");
    h1.textContent = el.strMeal;

    var h2 = document.createElement("h2");
    h2.textContent = el.id;

    var price = document.createElement("h2");
    price.textContent = `₹${Math.floor(Math.random() * 500)}`;

    var btn = document.createElement("button");
    btn.setAttribute("class", "btnremove");
    btn.textContent = "Remove";
    btn.addEventListener("click", function () {
      remove(el);
    });

    div.append(img, h1, h2, price, btn);

    document.getElementById("container").append(div);
  });
}

function remove(el) {
  cartarr.splice(cartarr.indexOf(el), 1);
  localStorage.setItem("datas", JSON.stringify(cartarr));
  window.location.reload(true);
}
