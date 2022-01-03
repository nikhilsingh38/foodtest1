async function MealUser() {
  let Cont = document.getElementById("cont").value;

  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${Cont}`;

  try {
    let res = await fetch(url);

    let data = await res.json();

    //console.log(data);

    addCart(data);
  } catch (err) {
    console.log(err);
  }
}
//var arr = JSON.parse(localStorage.getItem("fooddata")) || [];

function addCart(data) {
  for (var i = 0; i < data.meals.length; i++) {
    var arr = JSON.parse(localStorage.getItem("fooddata")) || [];
    var obj = {
      strMeal: data.meals[i].strMeal,
      img: data.meals[i].strMealThumb,
      id: data.meals[i].idMeal,
    };

    arr.push(obj);
    console.log(arr);

    localStorage.setItem("fooddata", JSON.stringify(arr));
  }
}

//document.getElementById("btn").addEventListener("click", somenu)
document.getElementById("f3").addEventListener("click", somenu);

function somenu() {
    window.location.href = "menu.html"
    console.log("go")
}