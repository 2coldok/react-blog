import { useNavigate } from "react-router-dom";

export default function Navbar({issues}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/temp')
  }
  

  return (
    <div>
      navbar 컴포넌트 자리
      <button onClick={handleClick}>눌러봐용</button>
    </div>
  );
}

