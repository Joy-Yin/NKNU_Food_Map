let food = new Map(restaurantsMap);
let matchedRestaurantsId = [];
for (let key of food.keys()) { //儲存所有key值 => 用來初始化
    matchedRestaurantsId.push(key);
}

showResult(matchedRestaurantsId); //初始化
//要和品蓉說：好像有些資料圖片沒看到（？

function loadTag() {
}

function showResult(matchedRestaurantsId) { //呈現結果
    for (let num of matchedRestaurantsId) {
        if (food.has(num)) {
            var area = document.getElementById("showArea");

            let foodData = document.createElement("div");  //第一層
            foodData.className = "col-lg-4 col-md-6 portfolio-item";

            let foodV2 = document.createElement("div"); //第二層
            foodV2.className = "portfolio-img rounded overflow-hidden";

            let foodV3 = document.createElement("img"); //第三層
            let foodWid = document.createAttribute("width");
            foodV3.className = "img-fluid";
            foodV3.src = food.get(num).image;; //food.get(foodKey).image;
            foodV3.style.width = "100%";

            let foodV4 = document.createElement("div"); //第四層
            foodV4.className = "portfolio-btn";

            let foodMenu = document.createElement("a"); //第五層-1: 菜單
            foodMenu.className = "btn btn-lg-square btn-outline-light rounded-circle mx-1";
            foodMenu.href = food.get(num).image;//food.get(foodKey).image;
            let foodMenuAtt = document.createAttribute("data-lightbox");
            foodMenuAtt.value = "portfolio";
            foodMenu.setAttributeNode(foodMenuAtt);
            

            let menuIcon = document.createElement("i"); //第六層-1: icon
            menuIcon.className = "fa fa-eye";

            let foodAdd = document.createElement("a"); //第五層-2: 菜單
            foodAdd.className = "btn btn-lg-square btn-outline-light rounded-circle mx-1";
            foodAdd.href = food.get(num).website;;//food.get(foodKey).website;
            foodAdd.target = "_blank";

            let addIcon = document.createElement("i"); //第六層-2: icon
            addIcon.className = "fa fa-link";

            foodAdd.appendChild(addIcon);
            foodMenu.appendChild(menuIcon);
            foodV4.appendChild(foodMenu);
            foodV4.appendChild(foodAdd);
            foodV2.appendChild(foodV3);
            foodV2.appendChild(foodV4);
            foodData.appendChild(foodV2);

            area.appendChild(foodData);
        }
    }
}