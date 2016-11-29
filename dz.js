/*
 1. Составить предложение из вышестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 25, 1, команда"
 */

let numbers = [25 , 1];
let project = " проект ";
let team = ` команда `;
let howMuch = " Сколько ";
let sentence = ' нужно программистов чтобы сделать проект  ? ';
let dz= howMuch+sentence+numbers+team;
alert (dz);

/*
2. Составьте предложение из представленного массива и выведите предложение
 в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью. Он не был больше ни телом, к которому рано или поздно ..."
 */
let array = ['Он не был больше ни телом , к которому рано или поздно ',
  ' он обнаружил ', ' Так, когда Будда достиг Просветления, ',
  ' ... ', ' что больше не ощущает себя мишенью. '];

alert(array[2]+array[1]+array[4]+array[0]+array[3]) 


// 3. Добавьте свойста 4 новых свойства в объект используя квадратные скобки и точку.

let myObj = {};
myObj.test=5;
myObj['test2']="Test";
myObj.test3=true;
myObj['test4']=2.34;
alert(myObj.test+"\n"+ myObj['test2']+"\n"+myObj.test3+'\n'+myObj['test4']);


/*
 4. Используя метод .slice, добавте в недостающие символы в строку
 */

let sliceString = 'Ytube'; //

 alert(sliceString.slice(0,-4)+'ouTube'); // YouTube


/*
 5. Преобразуйте строку x, в максимально удобно читаемый вид
 */
let frameworks = [2, 'Angular', 'Angular2', 'React/Redux'];
let x = "Google released " + 'new version ' + frameworks[2]+ ". But real speed is " + frameworks[3];


alert (x)