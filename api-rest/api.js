const btnGerar = document.getElementById('fetchCats')

API_KEY = "live_UUnX6fiC0KoQLuk1s3OvqIwyzUt3jxahTwqYJjd2L2TPMVvlh5hKas32TnXjCFjd"
URL = "https://api.thecatapi.com/v1/images"

const header = {
    "x-api-key": API_KEY
}

const requestOptions = {
    method: 'GET',
    headers: header
}

btnGerar.onclick = async ()=>{
    const divContent = document.getElementById('content')
    const response = await fetch(URL, requestOptions)
    let imagesDatas = response

    console.log(imagesDatas);
}

