

function cookie () {
    let date = new Date(Date.now() + 86400000)
    date = date.toUTCString()

    document.cookie = 'user=sofie; path=/; domaine=http://127.0.0.1:5500; max-agd=86400000; samesite=lax' + date
    
}

export {cookie}