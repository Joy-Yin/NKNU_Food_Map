setInitView();

function setInitView() {

    const yanchaoCnt = getCountSearchResultIds({
        placeTags: { "燕巢": true }
    });
    document.getElementById("yanchaoCounter").innerText = yanchaoCnt;

    const dasheCnt = getCountSearchResultIds({
        placeTags: { "大社": true }
    });
    document.getElementById("dasheCounter").innerText = dasheCnt;


    const nanziCnt = getCountSearchResultIds({
        placeTags: { "楠梓": true }
    });
    document.getElementById("nanziCounter").innerText = nanziCnt;


    const ligangCnt = getCountSearchResultIds({
        placeTags: { "里港": true }
    });
    document.getElementById("ligangCounter").innerText = ligangCnt;

}