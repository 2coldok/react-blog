const joker = ['가', '나', '다', '라', '마'];
const joker2 = 'abc';
const joker3 = 'You';

function getAddBlankCase(array) {
  const copy = [...array]
  const result = [];
  for (let i = 0; i < array.length - 1; i++) {
    copy.splice(i, 1, `${array[i]} `);
    
    result.push([...copy]);
    copy.splice(i, 1, `${array[i]}`);
  }
  return result;
}


export default function getAllBlankCase(str) {
  const array = str.split('');
  const result = [...getAddBlankCase(array)];
  
  getAddBlankCase(array).forEach((element, index) => {
    const copy = [...element];
    const piece = copy.splice(0, index + 1);
    getAddBlankCase(copy).forEach((element) => result.push([...piece, ...element]));  
  });

  return result.map((element) => element.join(''));
}
