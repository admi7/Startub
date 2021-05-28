
import { clients } from "./datebase.js";

export var app = new Vue({
     el: '#app',
     data: {
          message: 'Hello Vue !',
          clients,
     }
})
