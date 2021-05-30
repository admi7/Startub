
import { input, user } from "../main.module.js";

export const saisi = input.addEventListener('change', function (value) {
    console.log(this.value)
})