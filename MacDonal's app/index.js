function orderFood() {
  let select = document.querySelectorAll(".selectFood");

  let selectedArr = [];
  for (let i = 0; select[i]; i++) {
    if (select[i].checked) {
      selectedArr.push(select[i].value);
    }
  }
  //console.log(selectedArr)

  function checkSatus() {
    if (selectedArr.length !== 0) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }

  let myPromise = new Promise(function (resolve, reject) {
    let checkedStatus = checkSatus();

    if (checkedStatus) {
      let time = Math.floor(Math.random() * 6000);
      setTimeout(function () {
        resolve();
      }, time);
    } else {
      reject("Please Select some food Before Passing your ORDER.");
    }
  });

  let box = document.querySelector("#container");
  let subBox = document.createElement("div");
  myPromise.then(function () {
    for (let i = 0; i < selectedArr.length; i++) {
      if (selectedArr[i] === "Beverage") {
        let sub = document.createElement("img");
        sub.src =
          "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-hot-tea:1-4-product-tile-desktop";

        subBox.append(sub);
        box.append(subBox);
      }

      if (selectedArr[i] === "Breakfast") {
        let sub = document.createElement("img");
        sub.src =
          "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Breakfast-with-Hotcakes-Regular-Size-Biscuit-1:1-4-product-tile-desktop";
        subBox.append(sub);
        box.append(subBox);
      }

      if (selectedArr[i] === "Burgers") {
        let sub = document.createElement("img");
        sub.src =
          "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Double-Quarter-Pounder-with-Cheese-1:1-4-product-tile-desktop";
        subBox.append(sub);
        box.append(subBox);
      }

      if (selectedArr[i] === "Combo Meal") {
        let sub = document.createElement("img");
        sub.src =
          "https://s7d1.scene7.com/is/image/mcdonalds/h-mcdonalds-2-Cheeseburger-Extra-Value-Meals:1-4-product-tile-desktop";
        subBox.append(sub);
        box.append(subBox);
      }
    }
    let orderId = Math.floor(Math.random() * 500000);
    document.querySelector("#orderId").append(`Your orderId is- '${orderId}'`);
  });
  box.innerHTML = null;

  myPromise.catch(function (err) {
    alert(err);
  });
}
