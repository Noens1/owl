const textLine = document.querySelector('.textLine');
let obj = [
   "11111111",
   "2222222222",
   "3333333"
]
let index = 0;
function newTextLine() {
   if (index == obj.length) {
      return
   }
   let newArr = obj[index].split("");
   let j = 0;

   const interval = setInterval(() => {

      textLine.innerHTML += newArr[j];
      j += 1
      if (j == newArr.length) {
         clearInterval(interval)


         // Фраза загрузилась
         textLine.innerHTML = "";
         index++;
         newTextLine()
      }
   }, 200)
}
newTextLine()
