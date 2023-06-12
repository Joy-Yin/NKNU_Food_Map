// const restaurantIds = [...restaurantsMap.keys()]; //儲存所有key值 => 用來初始化
const placeTags = ["燕巢", "大社", "楠梓", "里港"];
const foodTags = ["早餐", "午餐", "晚餐", "宵夜", "麵", "飯", "吐司漢堡", "炸物", "飲料", "其他"];
reset(); //初始化

function loadTag() {


    let checkBoxPla = [];
    let checkBoxFod = [];
    for (let place = 0; place < 4; place++) {
        let tagLabel = document.getElementById(placeTags[place]);
        if (tagLabel.checked) {
            // console.log(placeTags[place]);
            checkBoxPla.push(placeTags[place]);
        }
    }
    for (let food = 0; food < 10; food++) {
        let tagLabel = document.getElementById(foodTags[food]);
        if (tagLabel.checked) {
            // console.log(foodTags[food]);
            checkBoxFod.push(foodTags[food]);
        }
    }
    let checkBoxList = [checkBoxPla, checkBoxFod];
    return checkBoxList;
}

async function query(url) {
    let result ;
    await fetch(url, {
            method: 'GET',
        })
        .then(async(resJson) => {
            const r = await resJson.json();
            result =  r;
        })
        .catch(error => {
            console.error(error);
        });
    return result;
}

async function getResult() {
    let checkBoxes = loadTag();
    let checkBoxPla = checkBoxes[0];
    let checkBoxFod = checkBoxes[1];

    let searchStr = "?";
    for (let i = 0; i < checkBoxPla.length; i++) {
        searchStr += "place[]=";
        searchStr += checkBoxPla[i];
        searchStr += "&";
    }

    for (let j = 0; j < checkBoxFod.length; j++) {
        searchStr += "food[]=";
        searchStr += checkBoxFod[j];
        searchStr += "&";
    }

    const url = "https://nknu-food-map-server.vercel.app/api/restaurants/search" + searchStr;
    const resultData = await query(url);

    // let queryObj = {};

    // if (checkBoxPla.length > 0) {
    //     Object.assign(queryObj, { placeTags: {} })
    //     for (let box of checkBoxPla) {
    //         Object.assign(queryObj.placeTags, {
    //             [box]: true
    //         })
    //     }
    // }

    // if (checkBoxFod.length > 0) {
    //     Object.assign(queryObj, { placeTags: {} })
    //     for (let box of checkBoxFod) {
    //         Object.assign(queryObj.placeTags, {
    //             [box]: true
    //         })
    //     }
    // }

    // let result = getSearchResultIds(queryObj);
    showResult(resultData);
}

async function searchName() {
    let target = document.getElementById("searchByName").value;

    let searchStr = "?query=" + target;
    const url = "https://nknu-food-map-server.vercel.app/api/restaurants/search" + searchStr;
    const resultData = await query(url);
    // let result = getSearchResultIds({ queryString: target });
    // for (let id of matchedRestaurantsId) {
    //     foodStore = food.get(id);
    //     if (foodStore.name == target) {
    //         result = [id];
    //         // console.log(result[0]);
    //         break;
    //     }
    // }
    showResult(resultData);
}

async function reset() {


    for (let box of placeTags) {
        let tag = document.getElementById(box);
        tag.checked = false;
    }

    for (let box of foodTags) {
        let tag = document.getElementById(box);
        tag.checked = false;
    }


    document.getElementById("searchByName").value = "";

    const url = "https://nknu-food-map-server.vercel.app/api/restaurants/search";
    const resultData = await query(url);

    showResult(resultData);
}

function showResult(resultData) { //呈現結果
    var newArea = document.createElement("div"); //準備好新東東
    newArea.className = "row g-4 portfolio-container wow fadeInUp";
    newArea.setAttribute("data-wow-delay", "0.5s");
    newArea.id = "showArea";

    var area = document.getElementById("showArea");

    for (let num = 0; num < resultData.length ; num++) {

        let foodData = document.createElement("div"); //第一層
        foodData.className = "col-lg-4 col-md-6 portfolio-item";

        let foodV2 = document.createElement("div"); //第二層
        foodV2.className = "portfolio-img rounded overflow-hidden";

        let foodV3 = document.createElement("img"); //第三層-1
        foodV3.className = "img-fluid";
        foodV3.src = resultData[num].image[0]; //food.get(foodKey).image;
        foodV3.style.width = "100%";

        let foodName = document.createElement("div"); //第三層-2
        foodName.className = "pt-3";
        foodName.appendChild(document.createTextNode(resultData[num].name));

        let foodName2 = document.createElement("p");
        foodName2.className = "text-primary mb-0";
        let foodName3 = document.createElement("hr");
        foodName3.className = "text-primary w-25 my-2";

        let foodV4 = document.createElement("div"); //第四層
        foodV4.className = "portfolio-btn";


        let foodMenus = [];
        for (let menuImg of resultData[num].image) {
            let foodMenu = document.createElement("a"); //第五層-1: 菜單
            foodMenu.href = menuImg; //restaurantsMap.get(foodKey).image;
            let foodMenuAtt = document.createAttribute("data-lightbox");
            foodMenuAtt.value = resultData[num].name;
            foodMenu.setAttributeNode(foodMenuAtt);
            foodMenus.push(foodMenu);
        }
        foodMenus[0].className = "btn btn-lg-square btn-outline-light rounded-circle mx-1";



        let menuIcon = document.createElement("i"); //第六層-1: icon
        menuIcon.className = "fa fa-eye";

        let foodAdd = document.createElement("a"); //第五層-2: 菜單
        foodAdd.className = "btn btn-lg-square btn-outline-light rounded-circle mx-1";
        foodAdd.href = resultData[num].website;; //food.get(foodKey).website;
        foodAdd.target = "_blank";

        let addIcon = document.createElement("i"); //第六層-2: icon
        addIcon.className = "fa fa-link";

        foodAdd.appendChild(addIcon);
        foodMenus[0].appendChild(menuIcon);
        for (let menuComponent of foodMenus) {
            foodV4.appendChild(menuComponent);
        }
        foodV4.appendChild(foodAdd);
        foodName.appendChild(foodName2);
        foodName.appendChild(foodName3);
        foodV2.appendChild(foodV3);
        foodV2.appendChild(foodV4);
        foodData.appendChild(foodV2);
        foodData.appendChild(foodName);

        newArea.appendChild(foodData);
    }
    area.parentNode.replaceChild(newArea, area);
}


document.getElementById("searchByName")
    .addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            searchName();
        }
    });