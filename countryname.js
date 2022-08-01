const myLocation = () => {
    const country = document.getElementById('country');

    const success = (position) => {
        // console.log(position)
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const countryApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?
        latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

        
        fetch(countryApi)
        .then(res => res.json())
        .then(data => {
            countryNames = data.countryName
            
            country.innerHTML = countryNames
        })
    }

    const error = () => {
        console.log("error")
    }
    console.log(country.innerHTML)

    navigator.geolocation.getCurrentPosition(success, error);
}

document.addEventListener('DOMContentLoaded', myLocation);


