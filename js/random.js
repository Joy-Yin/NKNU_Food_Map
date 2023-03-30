let food = new Map(restaurantsMap);
const dateObject = new Date();
const year = dateObject.getFullYear();
const month = dateObject.getMonth() + 1;
const date = dateObject.getDate();
let recommendFood;
let recommendBeverage;
getRandomRecommendation();
loadData();
function getRandomBeverage(year, month, date){
    const beverage = {
        placeTags: {
            "燕巢": false,
            "大社": false,
            "楠梓": false,
            "里港": false,
        },
        foodTags: {
            "飲料": true
        }
    };

    const beverageIds = getSearchResultIds(beverage);
    let beverageNum = ( year + month + date ) % beverageIds.length;
    // console.log(restaurantsMap.get(beverageIds[beverageNum]));//this

    for(let element of beverageIds){//把飲料與食物分離
        for(let i of restaurantsMap.keys()){
            if(element == i){
                food.delete(i);
                break;
            }
        }
    }
    return restaurantsMap.get(beverageIds[beverageNum]);
}

function getRandomFood(year, month, date){
    let foodNum = ( year + month + date ) % food.size;
    let foodKey = food.keys();;
    for(let i = 1; i <= foodNum; i++){
        if(i == foodNum){
            // console.log(food.get(foodKey.next().value));//this
            return food.get(foodKey.next().value);
        }
        else{
            foodKey.next();
        }
    }
}

function getRandomRecommendation(){
    recommendBeverage = getRandomBeverage(year, month, date);
    recommendFood = getRandomFood(year, month, date);
}

function loadData(){
    //載入圖片
    document.getElementById("recommendFoodImage").src = recommendFood.image[0];
    document.getElementById("recommendBeverageImage").src = recommendBeverage.image[0];
    //載入店家名稱
    let foodArea = document.getElementById("foodName");
    let beverageArea = document.getElementById("beverageName");
    foodArea.appendChild(document.createTextNode(recommendFood.name));
    beverageArea.appendChild(document.createTextNode(recommendBeverage.name));
    //載入營業時間
    let foodOpeningTime = document.createElement("p");
    foodOpeningTime.appendChild(document.createTextNode("營業時間："+recommendFood.openingTime));
    foodArea.appendChild(foodOpeningTime);

    let beverageOpeningTime = document.createElement("p");
    beverageOpeningTime.appendChild(document.createTextNode("營業時間："+recommendBeverage.openingTime));
    beverageArea.appendChild(beverageOpeningTime);

    let foodWebsite = document.createElement("a");
    let foodLinkAttr = document.createAttribute("class");
    foodLinkAttr.value = "btn btn-primary py-3 px-5";
    foodWebsite.setAttributeNode(foodLinkAttr);
    foodLinkAttr = document.createAttribute("href");
    foodLinkAttr.value = recommendFood.website;
    foodWebsite.setAttributeNode(foodLinkAttr);
    foodWebsite.appendChild(document.createTextNode("GO"));
    foodArea.appendChild(foodWebsite);

    let beverageWebsite = document.createElement("a");
    let beverageLinkAttr = document.createAttribute("class");
    beverageLinkAttr.value = "btn btn-primary py-3 px-5";
    beverageWebsite.setAttributeNode(beverageLinkAttr);
    beverageLinkAttr = document.createAttribute("href");
    beverageLinkAttr.value = recommendBeverage.website;
    beverageWebsite.setAttributeNode(beverageLinkAttr);
    beverageWebsite.appendChild(document.createTextNode("GO"));
    beverageArea.appendChild(beverageWebsite);
}
