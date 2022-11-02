function rdm(max){
    return Math.floor(Math.random()*(max +1));
};
function random( min, max, floor){
    if(floor) return Math.floor((Math.random()*(max - min + 1)) + min);
    return(Math.random()*(max - min)) + min;
};
function rdmAround(x, floor){
    if(floor) return Math.floor( Math.random()* x * 2 - x )
    return Math.random()* x * 2 - x
}
function write(input){
    console.log('%c' +  JSON.stringify(input), 'color: #8BF');
    return void 0;
};
function error(input){
    console.log('%c' + JSON.stringify(input), 'color: #F54;');
    return void 0;
};
function $(id){
    return document.getElementById(id);
};
function randomColor(){
    return `hsl( ${rdm(360)}, ${random( 20, 70, true)}%, 50%)`
};
function lerp(a, b, k){
    return a + (b - a) * k
}
function getLine( x1, y1, x2, y2){
    let line = []
    if( x1 - x2 == 0 && y1 - y2 == 0) return line
    let dx = Math.abs(x1 - x2)
    let dy = Math.abs(y1 - y2)
    let m = dy / dx
    let steps = m > 1 ? dy : dx;
    let xincrement = dx / steps * (x1-x2 >= 0 ? -1 : 1)
    let yincrement = dy / steps * (y1-y2 >= 0 ? -1 : 1)
    for( let i = 0 ; i < steps+1 ; i++ ){
        line.push({x:Math.floor(x1+xincrement*i), y:Math.floor(y1+yincrement*i)})
    }
    return line
};
function getCircle( x, y, r){
    let circle = []
    for( let x1 = -r-1 ; x1 < r+1 ; x1++){
        for( let y1 = -r-1 ; y1 < r+1 ; y1++){
            if(Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2))<=r) circle.push({x:x+x1, y:y+y1})
        }
    }
    return circle
};
default_brightness = 0.08
brightness = default_brightness
mouse = {x: window.innerWidth/2, y: window.innerHeight/2}
active = false
x = window.innerWidth/2
y = window.innerHeight/2
speed = 0.5

window.addEventListener('mousemove', (event)=>{
    active = true
    mouse.x = event.x
    mouse.y = event.y
})
window.addEventListener('mouseout', ()=>{
    active = false
})
window.addEventListener('click', ()=>{
    brightness = 0.12
})

function desktop(){
    setTimeout(()=>{
        requestAnimationFrame(desktop)
    }, 1000/50)
    $('interactive-background').style.background = `
    radial-gradient(
    500px circle at ${x}px ${y}px,
    rgba(255, 255, 255, ${brightness}),
    transparent
    )`
    if (active){
        x = lerp(x, mouse.x, .2)
        y = lerp(y, mouse.y, .2)
    } else {
        if (x > 2*window.innerWidth/3) x -= .4
        else x += .4
        if (y > window.innerHeight/2) y -= .4
        else y += .4
    }
    brightness = lerp(brightness, default_brightness, 0.1)
}
function mobile() {
    requestAnimationFrame(mobile)
    $('interactive-background').style.background = `
    radial-gradient(
    50px circle at ${x}px ${y}px,
    rgba(255, 255, 255, ${brightness}),
    transparent
    )`
    // animate the thing
}

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        mobile()
} else {
    desktop()
}