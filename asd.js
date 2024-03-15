const a = "YouTube API";
const b = " 망 사우 가느다란  우 루 깨참 YouTube API"

const c = "망사과가느다란우루깨참YouTubeAPI"

const joker = ['가', '나', '다', '라', '마'];

function magic(array) {
  const copy = [...array]
  const kevin = [];
  for (let i = 0; i < array.length - 1; i++) {
    copy.splice(i, 1, `${array[i]} `);
    
    kevin.push([...copy]);
    copy.splice(i, 1, `${array[i]}`);
  }
  return kevin;
}


function hello(array) {
  const result = [...magic(array)];
  const array2 = [...magic(array)];

  magic(array).forEach((element, index) => {
    const copy = [...element];
    const piece = copy.splice(0, index + 1);
    magic(copy).forEach((element) => result.push([...piece, ...element]));  
  });

  return result;
}








