document.querySelector(".btnaddress").addEventListener("click", function () {
  alert("Your order is accepted");
  testFun();
 
 
});

document.querySelector(".btncancel").addEventListener("click", function () {
  window.location.href = "cart.html";
});

function testFun() {
  function test() {
    alert("Your order is being cooked");
  }
  setTimeout(test, 3000);

  function test1() {
    alert("Your order is ready");
  }
  setTimeout(test1, 8000);

  function test2() {
    alert("Order out for delivery");
  }
    setTimeout(test2, 10000);
    
    
  function test3() {
    alert("Your order is delieverd");
  }
    setTimeout(test3, 12000);
    
}


