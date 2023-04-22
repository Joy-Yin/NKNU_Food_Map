setInitView();

function setInitView() {

    const yanchaoCnt = getCountSearchResultIds({
        queryString: "燕巢"
    });
    document.getElementById("yanchaoCounter").innerText = yanchaoCnt;

    const dasheCnt = getCountSearchResultIds({
        queryString: "大社"
    });
    document.getElementById("dasheCounter").innerText = dasheCnt;


    const nanziCnt = getCountSearchResultIds({
        queryString: "楠梓"
    });
    document.getElementById("nanziCounter").innerText = nanziCnt;


    const ligangCnt = getCountSearchResultIds({
        queryString: "里港"
    });
    document.getElementById("ligangCounter").innerText = ligangCnt;

}