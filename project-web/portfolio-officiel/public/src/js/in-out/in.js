export let user = document.getElementById('user')
export let input = document.getElementById('input')

user.innerText = ''


function saisi (value){
    input.addEventListener('change', function () {
        user.innerText = this.value
        if (saisi.value != null) {
            user.innerText = null
        }else {
            user.innerText = this.value
            input.value = ''
        }
    })
}


export {saisi}