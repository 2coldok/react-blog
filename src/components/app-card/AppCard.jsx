export default function AppCard({ love }) {
  const { id, name, img, path } = love;

  // const imgURL = `https://내아이디.github.io/리포지토리명/app-image/${path}.png`;
  
  return (
    <>
      <div>appcard 에용</div>
      <img src={`https://2coldok.github.io/react-blog/image/${path}.png`} alt="oh"/> 
    </>
  );
}
