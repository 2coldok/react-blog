// const BLANK = ' ';

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
// function getAllBlackCase(str) {
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

// console.log(getAllBlackCase('YoutubeApi'));

const title = 'I am our Les baguettes pa ris';
const text = 'iamourlesbagu';


function getAccentBundle(text, title) {
  const array = text.split('').map((element, index) => {
    if (index !== text.length - 1) {
      return element + `\\s*`;
    }
    return element;
  });

  const regPrep =  array.join('');
  const re = new RegExp(regPrep, 'i')

  return title.match(re);
}

// console.log(plz(text, title));
// [
//   'i am our les bagu',
//   index: 0,
//   input: 'i am our les baguettes pa ris',
//   groups: undefined
// ]