// function findLongestWord(string) {

//     let array = string.split(" ");
//     let longestWord = array[0];

//     for (let i = 0; i < array.length; i += 1) {
//         let word = array[i];

//         if (array[i].length > longestWord.length) {
//             return longestWord = word[i];
//         }
//     }
// }
// console.log(findLongestWord);

// const findLongestWord = function(str) {
//     let arrStr = str.split(' ');
//     let wordLength = 0;
//     let longestWord;

//     for (let i = 0; i < arrStr.length; i += 1) {
//         wordLength = arrStr[1].length;

//         if (arrStr[i].length > wordLength) {
//             longestWord = arrStr[i];

//             return longestWord;
//         }

//     }
// };


// function calculateMeanTemperature(forecast) {
//     // const todayLow = forecast.today.low;
//     // const todayHigh = forecast.today.high;
//     // const tomorrowLow = forecast.tomorrow.low;
//     // const tomorrowHigh = forecast.tomorrow.high;

//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;

//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }



// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками.Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         if (this.potions.includes(newPotion)) {
//             return `Error! Potion ${newPotion} is already in your inventory!`;
//         }

//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         const potionIndex = this.potions.indexOf(potionName);

//         if (potionIndex === -1) {
//             return `Potion ${potionName} is not in inventory!`;
//         }

//         this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//         const potionIndex = this.potions.indexOf(oldName);

//         if (potionIndex === -1) {
//             return `Potion ${oldName} is not in inventory!`;
//         }

//         this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
// };

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const item of this.potions) {
//             if (item.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         const newProduct = {
//             ...newPotion,
//         };
//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             const potion = this.potions[i];
//             if (potionName === potion.name) {
//                 this.potions.splice(i, 1);
//             }
//         }
//     },
//     updatePotionName(oldName, newName) {
//         let resalt = `Potion ${oldName} is not in inventory`;
//         for (let i = 0; i < this.potions.length; i += 1) {
//             const potion = this.potions[i];
//             if (oldName === potion.name) {
//                 potion.name = newName;
//                 resalt = `Found ${oldName} change to ${newName} `;
//             }
//         }
//         return console.log(resalt);
//     },
//     // Change code above this line
// };

users = [{
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
]
const sortByName = users => {
    console.log([...users].sort((a, b) => a.name.length - b.name.length));
};