async function query() {
    await fetch("https://nknu-food-map-server.vercel.app/api/restaurants", {
            method: 'GET',
        })
        .then(async(resJson) => {
            const r = await resJson.json();
            console.log(r);
        })
        .catch(error => {
            console.error(error);
        });
}

query();