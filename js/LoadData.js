//依資料庫table作為變數
const restaurants = [{
        id: "00001",
        name: "丹丹",
        image: ["./img/丹丹2.jpg"],
        website: "./img/丹丹2.jpg",
        openingTime: null,
        holiday: null
    }, {
        id: "00002",
        name: "My吐司",
        image: ["./img/大社1.jpg"],
        website: "https://goo.gl/maps/FtGGfteCaApSfuyEA",
        openingTime: "每日18:00～01:30",
        holiday: null
    },
    {
        id: "00003",
        name: "旺堡",
        image: ["./img/大社2.jpg", "./img/大社3.jpg"],
        website: "https://goo.gl/maps/7X53bKGvd5PJX4ba8",
        openingTime: "每日06:00～13:30",
        holiday: null
    },
    {
        id: "00004",
        name: "大亨牛排",
        image: ["./img/大社4.jpg"],
        website: "https://goo.gl/maps/2DnRc1A1F3TgKSyo6",
        openingTime: "週二～週五10:00～14:00、16:00～21:00 <br> 週六、週日10:00～21:00",
        holiday: "週一"
    },
    {
        id: "00005",
        name: "壹顆壽司",
        image: ["./img/大社5.jpg"],
        website: "https://goo.gl/maps/xniGMBrZD1p9qHeB9",
        openingTime: "週日～週五16:00～21:00",
        holiday: "週六"
    },
    {
        id: "00006",
        name: "日十",
        image: ["./img/大社6.jfif"],
        website: "https://goo.gl/maps/GcyUQYLDxnPygLww9",
        openingTime: "週二～週五06:30～13:00、週六、週日07:00～13:30",
        holiday: "週一"
    },
    {
        id: "00007",
        name: "陳麻飯",
        image: ["./img/大社7.jpg"],
        website: "https://goo.gl/maps/Vzonw9Wc4gpUWD7bA",
        openingTime: "週一～週六10:30～14:00、16:00～20:00",
        holiday: "週日"
    },
    {
        id: "00008",
        name: "阿帕碳烤吐司",
        image: ["./img/大社8.jpg"],
        website: "https://goo.gl/maps/GqMXc6jDAEzBUf429",
        openingTime: "週日～週五16:30～02:00",
        holiday: "週六"
    },
    {
        id: "00009",
        name: "莫尼",
        image: ["./img/大社9.jpg"],
        website: "https://goo.gl/maps/g8RjxNqxDVA996gEA",
        openingTime: "每日06:00～14:00",
        holiday: "週二"
    },
    {
        id: "00010",
        name: "原塊屋",
        image: ["./img/大社10.jpg"],
        website: "https://goo.gl/maps/cycR4pekTkS54kPG7",
        openingTime: "每日11:00～14:30、17:00～21:00",
        holiday: null
    },
    {
        id: "00011",
        name: "好窩",
        image: ["./img/大社11.jpg"],
        website: "https://goo.gl/maps/j1PHPqeDtk8qjgZ19",
        openingTime: "週日～週五17:00～00:00",
        holiday: "週六"
    },
    {
        id: "00012",
        name: "牛匠太郎",
        image: ["./img/大社12.jpg"],
        website: "https://goo.gl/maps/qTKAFdYCwnRSUweLA",
        openingTime: "每日11:30～21:00",
        holiday: null
    },
    {
        id: "00013",
        name: "在地人鹽水雞",
        image: ["./img/大社13.jpg"],
        website: "https://goo.gl/maps/UySfqwfyheswAEPp9",
        openingTime: "週一～週五16:30～23:00",
        holiday: "週六、週日"
    },
    {
        id: "00014",
        name: "天香麵館",
        image: ["./img/大社14.jpg"],
        website: "https://goo.gl/maps/qgquuzobs5gf8vt48",
        openingTime: "每日10:00～21:30",
        holiday: null
    },
    {
        id: "00015",
        name: "大成館",
        image: ["./img/大社15.jpg"],
        website: "https://goo.gl/maps/54ee8fAqBcLbxqtL9",
        openingTime: "週一～週六11:00～14:00、17:00～20:30",
        holiday: "週日"
    },
    {
        id: "00016",
        name: "心喜",
        image: ["./img/心喜.jpg"],
        website: "https://www.facebook.com/sinshitea/photos/p.1562046870855489/1562046870855489",
        openingTime: "每日09:00～20:00",
        holiday: null
    },
    {
        id: "00017",
        name: "6吋盤",
        image: ["./img/楠梓1.jpg", "./img/楠梓2.jpg"],
        website: "https://goo.gl/maps/X6miTVc7cdJZYkr26",
        openingTime: "週一～週五06:30～14:00、週六、週日07:00～14:30",
        holiday: null
    },
    {
        id: "00018",
        name: "卡布",
        image: ["./img/楠梓3.jpg", "./img/楠梓4.jpg"],
        website: "https://goo.gl/maps/uEkCzrkKVkBdzrap7",
        openingTime: "每日11:00～14:00、17:00～21:00",
        holiday: null
    },
    {
        id: "00019",
        name: "來伊ㄚ麵の屋",
        image: ["./img/燕巢1.jpg"],
        website: "https://goo.gl/maps/RiXAiB8VoW4AMuMZA",
        openingTime: "營業時間:週日~週五",
        holiday: "週六"
    },
    {
        id: "00020",
        name: "豫園上海湯包",
        image: ["./img/燕巢2.jpg"],
        website: "https://goo.gl/maps/qdxEySPGUMACaRWX9",
        openingTime: "營業時間:每日11:00~19:30",
        holiday: null
    },
    {
        id: "00021",
        name: "深水早餐",
        image: ["./img/燕巢3.jpg"],
        website: "https://goo.gl/maps/1vNPeNX99CMRcoAV9",
        openingTime: "週一～週六05:00～13:30",
        holiday: "週日"
    },
    {
        id: "00022",
        name: "膳串燒",
        image: ["./img/燕巢4.jpg"],
        website: "https://goo.gl/maps/1RJb5RidWk8GCVTY6",
        openingTime: "週三20:00～00:00",
        holiday: "週日"
    },
    {
        id: "00023",
        name: "乾媽",
        image: ["./img/燕巢5.jpg"],
        website: "https://goo.gl/maps/VVv72U2UPu7UaY3h9",
        openingTime: null,
        holiday: null
    },
    {
        id: "00024",
        name: "晨間廚房",
        image: ["./img/里港1.jpg"],
        website: "https://goo.gl/maps/VbPuhDU4ttEucS9v8",
        openingTime: "每日06:00～13:00 (資訊待確認)",
        holiday: null
    },
    {
        id: "00025",
        name: "金禾日式鍋燒",
        image: ["./img/里港2.jpg"],
        website: "https://goo.gl/maps/6XEjoTt7jCM8hnb17",
        openingTime: "週日～週五10:30～14:00、16:00～19:00",
        holiday: "週六"
    },
    {
        id: "00026",
        name: "熊賀拉麺",
        image: ["./img/里港3.jpg"],
        website: "https://goo.gl/maps/pCyLmAVEZVGHh3py9",
        openingTime: "每日10:30～13:30、17:00～20:00",
        holiday: "週二"
    },
];

const tags = [{
        restaurantId: "00001",
        tag: "燕巢",
    },
    {
        restaurantId: "00001",
        tag: "大社"
    },
    {
        restaurantId: "00001",
        tag: "楠梓"
    },
    {
        restaurantId: "00001",
        tag: "早餐"
    },
    {
        restaurantId: "00001",
        tag: "午餐"
    }, {
        restaurantId: "00001",
        tag: "晚餐"
    },
    {
        restaurantId: "00001",
        tag: "麵"
    },
    {
        restaurantId: "00001",
        tag: "吐司漢堡"
    },
    {
        restaurantId: "00001",
        tag: "飲料"
    },
    {
        restaurantId: "00001",
        tag: "炸物"
    },
    {
        restaurantId: "00002",
        tag: "大社"
    },
    {
        restaurantId: "00002",
        tag: "晚餐"
    },
    {
        restaurantId: "00002",
        tag: "宵夜"
    },
    {
        restaurantId: "00002",
        tag: "麵"
    },
    {
        restaurantId: "00002",
        tag: "吐司漢堡"
    },
    {
        restaurantId: "00002",
        tag: "飲料"
    },
    {
        restaurantId: "00002",
        tag: "炸物"
    },
    {
        restaurantId: "00003",
        tag: "大社"
    },
    {
        restaurantId: "00003",
        tag: "早餐"
    },
    {
        restaurantId: "00003",
        tag: "午餐"
    },
    {
        restaurantId: "00003",
        tag: "麵"
    }, {
        restaurantId: "00003",
        tag: "飯"
    },
    {
        restaurantId: "00003",
        tag: "吐司漢堡"
    },
    {
        restaurantId: "00003",
        tag: "炸物"
    },
    {
        restaurantId: "00003",
        tag: "飲料"
    },

    {
        restaurantId: "00004",
        tag: "大社"
    },
    {
        restaurantId: "00004",
        tag: "午餐"
    },
    {
        restaurantId: "00004",
        tag: "晚餐"
    },
    {
        restaurantId: "00004",
        tag: "麵"
    },
    {
        restaurantId: "00005",
        tag: "大社"
    },
    {
        restaurantId: "00005",
        tag: "晚餐"
    },
    {
        restaurantId: "00005",
        tag: "飯"
    },
    {
        restaurantId: "00006",
        tag: "大社"
    },
    {
        restaurantId: "00006",
        tag: "早餐"
    },
    {
        restaurantId: "00006",
        tag: "午餐"
    },
    {
        restaurantId: "00006",
        tag: "麵"
    },
    {
        restaurantId: "00006",
        tag: "飯"
    },
    {
        restaurantId: "00006",
        tag: "吐司漢堡"
    },
    {
        restaurantId: "00006",
        tag: "炸物"
    },
    {
        restaurantId: "00006",
        tag: "飲料"
    },
    {
        restaurantId: "00007",
        tag: "大社"
    },
    {
        restaurantId: "00007",
        tag: "楠梓"
    },
    {
        restaurantId: "00007",
        tag: "午餐"
    },
    {
        restaurantId: "00007",
        tag: "晚餐"
    },
    {
        restaurantId: "00007",
        tag: "麵"
    },
    {
        restaurantId: "00007",
        tag: "飯"
    },
    {
        restaurantId: "00008",
        tag: "大社"
    },
    {
        restaurantId: "00008",
        tag: "晚餐"
    },
    {
        restaurantId: "00008",
        tag: "宵夜"
    },
    {
        restaurantId: "00008",
        tag: "麵"
    },
    {
        restaurantId: "00008",
        tag: "吐司漢堡"
    },
    {
        restaurantId: "00008",
        tag: "炸物"
    },
    {
        restaurantId: "00008",
        tag: "飲料"
    },
    {
        restaurantId: "00009",
        tag: "大社"
    },
    {
        restaurantId: "00009",
        tag: "早餐"
    },
    {
        restaurantId: "00009",
        tag: "午餐"
    },
    {
        restaurantId: "00009",
        tag: "麵"
    },
    {
        restaurantId: "00009",
        tag: "飯"
    },
    {
        restaurantId: "00009",
        tag: "吐司漢堡"
    },
    {
        restaurantId: "00009",
        tag: "飲料"
    },
    {
        restaurantId: "00010",
        tag: "大社"
    },
    {
        restaurantId: "00010",
        tag: "午餐"
    },
    {
        restaurantId: "00010",
        tag: "晚餐"
    },
    {
        restaurantId: "00010",
        tag: "麵"
    },
    {
        restaurantId: "00010",
        tag: "炸物"
    },
    {
        restaurantId: "00011",
        tag: "大社"
    },
    {
        restaurantId: "00011",
        tag: "晚餐"
    },
    {
        restaurantId: "00011",
        tag: "宵夜"
    },
    {
        restaurantId: "00011",
        tag: "飯"
    },
    {
        restaurantId: "00011",
        tag: "炸物"
    },
    {
        restaurantId: "00011",
        tag: "飲料"
    },
    {
        restaurantId: "00012",
        tag: "大社"
    },
    {
        restaurantId: "00012",
        tag: "午餐"
    },
    {
        restaurantId: "00012",
        tag: "晚餐"
    },
    {
        restaurantId: "00012",
        tag: "麵"
    },
    {
        restaurantId: "00012",
        tag: "飯"
    },
    {
        restaurantId: "00012",
        tag: "炸物"
    },
    {
        restaurantId: "00013",
        tag: "大社"
    },
    {
        restaurantId: "00013",
        tag: "晚餐"
    },
    {
        restaurantId: "00013",
        tag: "宵夜"
    },
    {
        restaurantId: "00013",
        tag: "其他"
    },
    {
        restaurantId: "00014",
        tag: "大社"
    },
    {
        restaurantId: "00014",
        tag: "早餐"
    },
    {
        restaurantId: "00014",
        tag: "午餐"
    },
    {
        restaurantId: "00014",
        tag: "晚餐"
    },
    {
        restaurantId: "00014",
        tag: "麵"
    },
    {
        restaurantId: "00014",
        tag: "其他"
    },
    {
        restaurantId: "00015",
        tag: "大社"
    },
    {
        restaurantId: "00015",
        tag: "午餐"
    },
    {
        restaurantId: "00015",
        tag: "晚餐"
    },
    {
        restaurantId: "00015",
        tag: "麵"
    },
    {
        restaurantId: "00015",
        tag: "飯"
    },
    {
        restaurantId: "00015",
        tag: "炸物"
    },
    {
        restaurantId: "00015",
        tag: "飲料"
    },
    {
        restaurantId: "00016",
        tag: "燕巢"
    },
    {
        restaurantId: "00016",
        tag: "大社"
    },
    {
        restaurantId: "00016",
        tag: "楠梓"
    },
    {
        restaurantId: "00016",
        tag: "早餐"
    },
    {
        restaurantId: "00016",
        tag: "午餐"
    },
    {
        restaurantId: "00016",
        tag: "晚餐"
    },
    {
        restaurantId: "00016",
        tag: "飲料"
    },
    {
        restaurantId: "00017",
        tag: "楠梓"
    },
    {
        restaurantId: "00017",
        tag: "早餐"
    },
    {
        restaurantId: "00017",
        tag: "午餐"
    },
    {
        restaurantId: "00017",
        tag: "麵"
    },
    {
        restaurantId: "00017",
        tag: "吐司漢堡"
    },
    {
        restaurantId: "00017",
        tag: "炸物"
    },
    {
        restaurantId: "00017",
        tag: "飲料"
    },
    {
        restaurantId: "00018",
        tag: "楠梓"
    },
    {
        restaurantId: "00018",
        tag: "午餐"
    },
    {
        restaurantId: "00018",
        tag: "晚餐"
    },
    {
        restaurantId: "00018",
        tag: "麵"
    },
    {
        restaurantId: "00018",
        tag: "飯"
    },
    {
        restaurantId: "00018",
        tag: "炸物"
    },
    {
        restaurantId: "00018",
        tag: "飲料"
    },
    {
        restaurantId: "00019",
        tag: "燕巢"
    },
    {
        restaurantId: "00019",
        tag: "午餐"
    },
    {
        restaurantId: "00019",
        tag: "晚餐"
    },
    {
        restaurantId: "00019",
        tag: "麵"
    },
    {
        restaurantId: "00019",
        tag: "飯"
    },
    {
        restaurantId: "00020",
        tag: "燕巢"
    },
    {
        restaurantId: "00020",
        tag: "午餐"
    },
    {
        restaurantId: "00020",
        tag: "晚餐"
    },
    {
        restaurantId: "00020",
        tag: "麵"
    },
    {
        restaurantId: "00020",
        tag: "飯"
    },
    {
        restaurantId: "00020",
        tag: "其他"
    },
    {
        restaurantId: "00021",
        tag: "燕巢"
    },
    {
        restaurantId: "00021",
        tag: "早餐"
    },
    {
        restaurantId: "00021",
        tag: "午餐"
    },
    {
        restaurantId: "00021",
        tag: "麵"
    },
    {
        restaurantId: "00021",
        tag: "飯"
    },
    {
        restaurantId: "00021",
        tag: "吐司漢堡"
    },
    {
        restaurantId: "00021",
        tag: "其他"
    },

    {
        restaurantId: "00021",
        tag: "其他"
    },
    {
        restaurantId: "00022",
        tag: "燕巢"
    },
    {
        restaurantId: "00022",
        tag: "宵夜"
    },
    {
        restaurantId: "00022",
        tag: "其他"
    },
    {
        restaurantId: "00023",
        tag: "燕巢"
    },
    {
        restaurantId: "00023",
        tag: "晚餐"
    },
    {
        restaurantId: "00023",
        tag: "麵"
    },
    {
        restaurantId: "00023",
        tag: "飯"
    },
    {
        restaurantId: "00024",
        tag: "里港"
    },
    {
        restaurantId: "00024",
        tag: "早餐"
    },
    {
        restaurantId: "00024",
        tag: "午餐"
    },
    {
        restaurantId: "00024",
        tag: "麵"
    },
    {
        restaurantId: "00024",
        tag: "飯"
    },
    {
        restaurantId: "00024",
        tag: "吐司漢堡"
    },
    {
        restaurantId: "00024",
        tag: "炸物"
    },
    {
        restaurantId: "00024",
        tag: "飲料"
    },
    {
        restaurantId: "00025",
        tag: "里港"
    },
    {
        restaurantId: "00025",
        tag: "午餐"
    },
    {
        restaurantId: "00025",
        tag: "晚餐"
    },
    {
        restaurantId: "00025",
        tag: "麵"
    },
    {
        restaurantId: "00025",
        tag: "飯"
    },
    {
        restaurantId: "00026",
        tag: "里港"
    },
    {
        restaurantId: "00026",
        tag: "午餐"
    },
    {
        restaurantId: "00026",
        tag: "晚餐"
    },
    {
        restaurantId: "00026",
        tag: "麵"
    },
    {
        restaurantId: "00026",
        tag: "飯"
    },
    {
        restaurantId: "00026",
        tag: "炸物"
    },
];


// tags : 
// 燕巢、大社、楠梓、里港、
// 早餐、午餐、晚餐、宵夜、
// 麵、飯、吐司漢堡、炸物、飲料、其他

//暫時用map來進行搜尋與儲存
const restaurantsMap = new Map();

function makeMap() {
    for (let restaurant of restaurants) {
        restaurantsMap.set(restaurant.id, restaurant);
    }
}
makeMap();

//================================================================
//搜尋範例
//Step1  進行勾選篩選項目
const checkboxesExample = {
    placeTags: {
        "燕巢": true,
        "大社": false,
        "楠梓": false,
        "里港": true,
    },
    mealTags: {
        "早餐": false,
        "午餐": false,
        "晚餐": true,
        "宵夜": true,
    },
    foodTags: {
        "麵": true,
        "飯": false,
        "吐司漢堡": true,
        "炸物": true,
        "飲料": true,
        "其他": true
    }
};

//Step2 進行搜尋並顯示結果
showSearchResult(checkboxesExample);

function showSearchResult(checkboxes) {

    //Step2-1 獲取勾選項目 => 模擬建立資料庫query字串  (tags=XXX OR tags=XXX) AND (tags=XXX OR tags=XXX)
    function getCheckboxes(tagType) {
        let arr = [];
        for (let optionName in checkboxes[tagType]) {
            if (checkboxes[tagType][optionName]) {
                arr.push(optionName);
            }
        }
        return arr;
    }
    const checkedplaceTags = getCheckboxes("placeTags");
    const checkedmealTags = getCheckboxes("mealTags");
    const checkedfoodTags = getCheckboxes("foodTags");


    //step2-2  => 模擬資料庫query 
    // SELECT DISTINCT restaurantId 
    // FROM tags
    // WHERE (tags=XXX OR tags=XXX) AND (tags=XXX OR tags=XXX)... 
    function getMatchedRestaurants() {

        let matchedRestaurantsId = [];


        let placeSearchSet = new Set();
        let mealSearchSet = new Set();
        let fooodSearchSet = new Set();

        for (let tag of tags) {
            const isMatched = (checkedTag) => tag.tag == checkedTag;

            //(tags=XXX OR tags=XXX)
            if (checkedplaceTags.findIndex(isMatched) != -1) {
                placeSearchSet.add(tag.restaurantId);
                continue;
            };

            //(tags=XXX OR tags=XXX)
            if (checkedmealTags.findIndex(isMatched) != -1) {
                mealSearchSet.add(tag.restaurantId);
                continue;
            };

            //(tags=XXX OR tags=XXX)

            if (checkedfoodTags.findIndex(isMatched) != -1) {
                fooodSearchSet.add(tag.restaurantId);
                continue;
            };
        }

        //(tags=XXX OR tags=XXX) AND (tags=XXX OR tags=XXX)
        for (const rId of restaurantsMap.keys()) {
            if (placeSearchSet.has(rId) && mealSearchSet.has(rId) && fooodSearchSet.has(rId)) {
                matchedRestaurantsId.push(rId);
            }
        }
        return matchedRestaurantsId;
    }

    const matchedRestaurantsId = getMatchedRestaurants();
    for (let restaurantId of matchedRestaurantsId) {
        console.log(restaurantsMap.get(restaurantId));
    }
}