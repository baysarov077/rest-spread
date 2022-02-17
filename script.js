// 1
const arr_1 = [101, 202, 303, 404, 505] 
const arr_2 = [606, 707, 808, 909]
const superArr = [...arr_1, ...arr_2]
// 2
const min = Math.min(...superArr)
// 3
const obj = {
    width: 300,
    heigth: 550
}

const objTwin = {
    width: 300,
    heigth: 550,
    area(){
        return this.width * this.heigth
    }
}
// 4
const sum = (...argument) => argument.reduce((accum, item) => accum += item)
