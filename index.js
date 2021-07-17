	var pass = unescape("unescape%28%22String.fromCharCode%2528104%252C68%252C117%252C102%252C106%252C100%252C107%252C105%252C49%252C53%252C54%2529%22%29");
    var pass1 = unescape('%28%22')
    var pass2 = unescape('%2528104%252C68%252C117%252C102%252C106%252C100%252C107%252C105%252C49%252C53%252C54%2529%22%29')

        var rPass = unescape(pass1) + unescape(pass2)

console.log(unescape(rPass))