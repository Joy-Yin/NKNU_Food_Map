
const dateObject = new Date();
const year = dateObject.getFullYear();
const month = dateObject.getMonth() + 1;
const date = dateObject.getDate();
let recommendFood;
let recommendBeverage;
load();

async function getRandomBeverage(year, month, date){
    const url = "https://nknu-food-map-server.vercel.app/api/restaurants/search?food[]=飲料";
    const beverageIds = await query(url);
    let beverageNum = ( year + month + date ) % beverageIds.length;
    return beverageIds[beverageNum];
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

async function getRandomFood(year, month, date){
    const foodIds = await query("https://nknu-food-map-server.vercel.app/api/restaurants/search/exclude?food[]=飲料");
    let foodNum = ( year + month + date ) % foodIds.length;
    return foodIds[foodNum];
}

async function getRandomRecommendation(){
    recommendBeverage = await getRandomBeverage(year, month, date);
    recommendFood = await getRandomFood(year, month, date);
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
    if(recommendFood.openingTime != null){
        foodOpeningTime.appendChild(document.createTextNode("營業時間："+recommendFood.openingTime));
    }
    else {
        foodOpeningTime.appendChild(document.createTextNode("營業時間：無資料"));
    }
    foodArea.appendChild(foodOpeningTime);

    let beverageOpeningTime = document.createElement("p");
    if(recommendBeverage.openingTime != null){
        beverageOpeningTime.appendChild(document.createTextNode("營業時間："+recommendBeverage.openingTime));
    }
    else {
        beverageOpeningTime.appendChild(document.createTextNode("營業時間：無資料"));
    }
    beverageArea.appendChild(beverageOpeningTime);

    //載入公休日
    let foodHoliday = document.createElement("p");
    if(recommendFood.holiday != null){
        foodHoliday.appendChild(document.createTextNode("公休日："+recommendFood.holiday));
    }
    else {
        foodHoliday.appendChild(document.createTextNode("公休日：無"));
    }
    foodArea.appendChild(foodHoliday);

    let beverageHoliday = document.createElement("p");
    if(recommendBeverage.holiday != null){
        beverageHoliday.appendChild(document.createTextNode("公休日："+recommendBeverage.holiday));
    }
    else {
        beverageHoliday.appendChild(document.createTextNode("公休日：無"));
    }
    beverageArea.appendChild(beverageHoliday);

    let foodWebsite = document.createElement("a");
    let foodLinkAttr = document.createAttribute("class");
    foodLinkAttr.value = "btn btn-primary py-3 px-5";
    foodWebsite.setAttributeNode(foodLinkAttr);
    foodLinkAttr = document.createAttribute("href");
    foodLinkAttr.value = recommendFood.website;
    foodWebsite.setAttributeNode(foodLinkAttr);
    foodWebsite.target = "_blank";
    foodWebsite.appendChild(document.createTextNode("GO"));
    foodArea.appendChild(foodWebsite);

    let beverageWebsite = document.createElement("a");
    let beverageLinkAttr = document.createAttribute("class");
    beverageLinkAttr.value = "btn btn-primary py-3 px-5";
    beverageWebsite.setAttributeNode(beverageLinkAttr);
    beverageLinkAttr = document.createAttribute("href");
    beverageLinkAttr.value = recommendBeverage.website;
    beverageWebsite.setAttributeNode(beverageLinkAttr);
    beverageWebsite.target = "_blank";
    beverageWebsite.appendChild(document.createTextNode("GO"));
    beverageArea.appendChild(beverageWebsite);
}

async function load(){
    await getRandomRecommendation();
    loadData();
}
