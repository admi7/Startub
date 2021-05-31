
import { colors } from "./jquery/style.js";
console.log(colors)


//              ********************    LIBRERIE INTEGRE DANS LE SITE    ************************

import {cookie} from "../../log/cookie.js";

cookie()


import {sys} from "./app/app.js";
sys()


    
var tabs = document.querySelectorAll('li a')
for (var i=0; i>tabs.length; i++){
    tabs[i].addEventListener('click', function (e) {
        var li = this.parentNode
        var div = this.parentNode.parentNode.parentNode

        if (li.classList.contains('active')){
            return false
        }

        div.querySelector('.tabs .active')
        li.classList.add(active)

    })
}


//              ********************    PORTE ENTRER    ************************

import { saisi } from './in-out/in.js'

saisi('hello')

//              ********************    PORTE SORTIE    ************************

import {logUser} from './in-out/out.js'

logUser()

//              ********************    FIN    ************************

//              ********************    TEST DE MES FUNCTIONS    ************************





