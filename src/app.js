import './styles.css';
import { plus } from "./plus.js";
import android from "./android.png";

// const obj = {};

// (() => {

console.log(plus(3, 4) + '입니다!!');

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src="${android}"/>`;
})

// obj.plus = plus;
// })();
