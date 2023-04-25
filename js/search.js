let food = new Map(restaurantsMap);
let matchedRestaurantsId = [];
for (let key of food.keys()) { //儲存所有key值 => 用來初始化
    matchedRestaurantsId.push(key);
}

showResult(matchedRestaurantsId); //初始化
//要和品蓉說：部分字體未能統一（？

function loadTag() {
    let placeTags = ["燕巢", "大社", "楠梓", "里港"];
    let foodTags = ["早餐", "午餐", "晚餐", "宵夜", "麵", "飯", "吐司漢堡", "炸物", "飲料", "其他"];

    let checkBoxPla = [];
    let checkBoxFod = [];
    for (let place = 0; place < 4; place++) {
        let tag = document.getElementById(placeTags[place]);
        if (tag.checked) {
            // console.log(placeTags[place]);
            checkBoxPla.push(placeTags[place]);
        }
    }
    for (let food = 0; food < 10; food++) {
        let tag = document.getElementById(foodTags[food]);
        if (tag.checked) {
            // console.log(foodTags[food]);
            checkBoxFod.push(foodTags[food]);
        }
    }
    let checkBox = [checkBoxPla, checkBoxFod];
    return checkBox;
}

function getResult() {
    let checkBoxPla = loadTag()[0];
    let checkBoxFod = loadTag()[1];

    let placeSearchSet = new Set();
    let fooodSearchSet = new Set();
    let resultSet = new Set();

    let result = [];

    for (let tag of tags) {

        const isMatched = (checkedTag) => tag.tag == checkedTag;
        //(tags=XXX OR tags=XXX)
        if (checkBoxPla.findIndex(isMatched) != -1) {
            placeSearchSet.add(tag.restaurantId);
            continue;
        }

        //(tags=XXX OR tags=XXX)
        if (checkBoxFod.findIndex(isMatched) != -1) {
            fooodSearchSet.add(tag.restaurantId);
            continue;
        };

        for (const rId of food.keys()) {
            if ((checkBoxPla.length == 0 || placeSearchSet.has(rId)) &&
                (checkBoxFod.length == 0 || fooodSearchSet.has(rId))) {
                resultSet.add(rId);
            }

        }
    }

    for (let rId of resultSet) {
        result.push(rId);
    }

    showResult(result);
}

function searchName() {
    var target = document.getElementById("searchByName").value;
    var foodStore;
    // console.log(target);

    var result = [];
    for (let id of matchedRestaurantsId) {
        foodStore = food.get(id);
        if (foodStore.name == target) {
            result = [id];
            // console.log(result[0]);
            break;
        }
    }
    showResult(result);
}

function reset() {
    let matchedRestaurantsId = [];
    let checkBox = ["燕巢", "大社", "楠梓", "里港", "早餐", "午餐", "晩餐", "宵夜", "麵", "飯", "吐司漢堡", "炸物", "飲料", "其他"];
    for (let key of food.keys()) {
        matchedRestaurantsId.push(key);
    }

    for (let box of checkBox){
        let tag = document.getElementById(box);
        tag.checked = false;
    }

    showResult(matchedRestaurantsId);
    document.getElementById("searchByName").value = "";
}

function showResult(matchedRestaurantsId) { //呈現結果
    var newArea = document.createElement("div"); //準備好新東東
    newArea.className = "row g-4 portfolio-container wow fadeInUp";
    newArea.setAttribute("data-wow-delay", "0.5s");
    newArea.id = "showArea";

    var area = document.getElementById("showArea");

    for (let num of matchedRestaurantsId) {
        if (food.has(num)) {
            let foodData = document.createElement("div");  //第一層
            foodData.className = "col-lg-4 col-md-6 portfolio-item";

            let foodV2 = document.createElement("div"); //第二層
            foodV2.className = "portfolio-img rounded overflow-hidden";

            let foodV3 = document.createElement("img"); //第三層-1
            foodV3.className = "img-fluid";
            foodV3.src = food.get(num).image[0]; //food.get(foodKey).image;
            foodV3.style.width = "100%";

            let foodName = document.createElement("div"); //第三層-2
            foodName.className = "pt-3";
            foodName.appendChild(document.createTextNode(food.get(num).name));

            let foodName2 = document.createElement("p");
            foodName2.className = "text-primary mb-0";
            let foodName3 = document.createElement("hr");
            foodName3.className = "text-primary w-25 my-2";

            let foodV4 = document.createElement("div"); //第四層
            foodV4.className = "portfolio-btn";

            let foodMenu = document.createElement("a"); //第五層-1: 菜單
            foodMenu.className = "btn btn-lg-square btn-outline-light rounded-circle mx-1";
            foodMenu.href = food.get(num).image[0];//food.get(foodKey).image;
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
            foodName.appendChild(foodName2);
            foodName.appendChild(foodName3);
            foodV2.appendChild(foodV3);
            foodV2.appendChild(foodV4);
            foodData.appendChild(foodV2);
            foodData.appendChild(foodName);

            newArea.appendChild(foodData);
        }
    }
    area.parentNode.replaceChild(newArea, area);
}


document.getElementById("searchByName")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            searchName();
        }
    });