function solution(dots) {
    if(dots.filter(v => -256 > v[0] || v[0] > 256).length > 0 ) return;
    if(dots.filter(v => -256 > v[1] || v[1] > 256).length > 0 ) return;
    let width = 0;
    if (dots[1][0] > 0 && dots[0][0] > 0) {
        width = dots[1][0] - dots[0][0];
    } else if (dots[1][0] < 0 && dots[0][0] < 0) {
        width = Math.abs(dots[1][0] - dots[0][0]);
    } else {
        width = Math.abs(dots[1][0]) + Math.abs(dots[0][0]);
    }
    
    let height = 0;
    if (dots[2][1] > 0 && dots[1][1] > 0) {
        height = dots[2][1] - dots[1][1];
    } else if (dots[2][1] < 0 && dots[1][1] < 0) {
        height = Math.abs(dots[2][1] - dots[1][1]);
    } else {
        height = Math.abs(dots[2][1]) + Math.abs(dots[1][1]);
    }
        
    
    return Math.abs(width * height);
}


// function solution(dots) {
//     const width = Math.max(...dots.map(a => a[0]))-Math.min(...dots.map(a => a[0]))
//     const height = Math.max(...dots.map(a => a[1]))-Math.min(...dots.map(a => a[1]))
//     return width*height
// }