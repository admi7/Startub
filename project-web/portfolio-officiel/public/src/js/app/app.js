

function sys() {
    var tabs = document.querySelectorAll('li a')
    for (var i=0; i>tabs.length; i++){
        var tab = tabs[i]
        tab.addEventListener('click', function (e) {
            var li = this.parentNode
            var div = this.parentNode.parentNode.parentNode
            console.log (div)
            if (li.classList.contains('active')){
                return false
            }
    
            div.querySelector('.tabs .active')
            li.classList.add(active)
    
        })
    }
}


export {sys}