// alert('hello')
let color = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F']
let colorname =  document.querySelector('.colorname')

let generaterandom = () =>{
    let random = Math.random() * color.length
    let floor = Math.floor(random)
    return floor
}
// console.log(generaterandom());
let generatecolor = () => {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += color[generaterandom()];

    }
    return hex;
};
// console.log(generatecolor());

window.addEventListener('click',()=>{
    document.body.style.background = generatecolor()

    colorname.innerHTML = generatecolor()
})