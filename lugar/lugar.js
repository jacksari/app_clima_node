var unirest = require("unirest");

getLugarLatLng = (direccion) => {
    return new Promise((resolve, reject) => {
        var req = unirest("GET", "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php");
        console.log('Lugar:', direccion);

        req.query({
            "location": `${ direccion }`
        });

        req.headers({
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "10aec21ca0mshaeb125f25fb2ca2p1af10ejsn0ae7cfda8613"
        });

        req.end(function(res) {
            if (res.error) {
                reject(new Error(res.error));
            };
            //console.log(res.body);
            const data = res.body.Results[0];
            //console.log('RES BODY: ', data.name);
            //console.log('DATA: ', res.body);
            if (!data) {
                //console.log(data);
                reject(`No hay resultados para ${ direccion }`)
            } else {
                //console.log('HOLISSSSSSSSSSSSSSSS');
                resolve({
                    direccion: data.name,
                    lat: data.lat,
                    lng: data.lon
                });
            }
        });


    });
}

module.exports = {
    getLugarLatLng
}