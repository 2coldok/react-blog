// // ['가', '나', '다'] -> 
// // [
// //   ['가 ', '나', '다'],
// //   ['가', '나 ', '다'],
// //   ['가', '나', '다 '],
// // ]
// function getAddBlankCase(array) {
//   const copy = [...array]
//   const result = [];
//   for (let i = 0; i < array.length - 1; i++) {
//     copy.splice(i, 1, `${array[i]} `);
    
//     result.push([...copy]);
//     copy.splice(i, 1, `${array[i]}`);
//   }
//   return result;
// }


// export default function getAllBlankCase(str) {
//   const array = str.split('');
//   const result = [...getAddBlankCase(array)];
  
//   getAddBlankCase(array).forEach((element, index) => {
//     const copy = [...element];
//     const piece = copy.splice(0, index + 1);
//     getAddBlankCase(copy).forEach((element) => result.push([...piece, ...element]));  
//   });

//   return result.map((element) => element.join(''));
// }

const BLANK = ' ';

// make this
// [
//   [ '0', '0', '1' ],
//   [ '0', '1', '0' ],
//   [ '0', '1', '1' ],
//   [ '1', '0', '0' ],
//   [ '1', '0', '1' ],
//   [ '1', '1', '0' ],
//   [ '1', '1', '1' ]
// ]
// number? : 'abcd' 문자열의 경우 공백이 위치할 수 있는 곳이 3곳이므로 number = 3
// 1일경우 공백을주고 0일경우 공백을 부여하지 않는 전략을 취함.
// 이는 마치 2진수와 비슷한 형태임으로 2진수를 이용함
// 'abcd'의 경우 2^3 의 공백 경우의 수가 있음 (공백이 없는 경우를 제외하면 2^3 - 1)
// getAllBlankPosition 은 0 초과 2^number - 1 이하의 2진수를 split('')하여 각각을 배열형태로 담은 배열을 반환한다.


// function getAllBlankPosition(number) {
//   const result = [];
//   const max = Math.pow(2, number);
//   // i = 0 일 경우는 공백이 없는 경우 임으로 제외함
//   for (let i = 1; i < max; i++) {
//     const element  = i.toString(2).padStart(number, '0').split('');
//     result.push(element); 
//   }
//   return result;
// }

// // str = 'abcdefg'
// export function getAllBlackCase(str) {
//   const array = str.split('');
//   const result = [];
  
//   getAllBlankPosition(str.length - 1).forEach((position) => {
//     const copy = [...array];
//     position.forEach((element, index) => {
//       if (element === '1') {
//         copy.splice(index, 1, `${array[index]}${BLANK}`);
//       }
//     });
//     result.push(copy.join(''));
//   });
//   return result;
// }

// export class SearchEngine {
//   cook;

//   constructor(text, title) {
//     this.hardText = text;
//     this.text = text;
//     this.title = title;
//     this.lowTitle = this.title.toLowerCase().trim();
//     this.lowText = text.toLowerCase().trim();
//   }

//   getPartBadCase() {
//     const singleLowText = this.lowText.split(' ').join('');
//     this.cook = singleLowText;
//     console.log(`singleLowText : ${singleLowText}`);
    
//     const lowTitleSplit = this.lowTitle.split(' ');
//     console.log(`lowTitleSplit : ${lowTitleSplit}`);
//     lowTitleSplit.forEach((word) => {
//       if (singleLowText.includes(word)) { 
//         this.cook = this.cook.replace(word, `${word} `);
//         console.log(`cook : ${this.cook}`);
//       }
//     });
    

//     // const startIndex = this.lowTitle.indexOf(this.cook);
//     // const length = this.cook.length;
    
    
//     // const samePart = this.title.substr(startIndex, length);
//     // return samePart;
//     return this.cook;
    

    
//   }

//   getPartGoodCase() {
//     const startIndex = this.lowTitle.indexOf(this.lowText);
//     const length = this.lowText.length;
//     const samePart = this.title.substr(startIndex, length);

//     return samePart;
//   }

//   textValidate() {
//     const singleTitle = this.lowTitle.split(' ').join('');
//     const singleText = this.lowText.split(' ').join('');
    
//     if (singleTitle.includes(singleText)) {
//       return true;
//     }
//     return false;
//   }

//   getReplacePart() {
//     if (!this.textValidate()) {
//       return null;
//     }
//     if (this.lowTitle.includes(this.lowText)) {
//       return this.getPartGoodCase();
//     }

//     return this.getPartBadCase();
//   }
// }