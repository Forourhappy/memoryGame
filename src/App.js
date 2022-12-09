import './App.css';
import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';

// 게임 초기화
// 라이언 목록이 랜덤으로 섞인 한 쌍의 배열 필요

function App() {
	// 라이언 사진들이 들어가는 곳
	const [ryon, setRyon] = useState([]);

	const initGame = () => {
		const ryonList = [...ryon, ...ryon];
	};

	return (
		<>
			<h1>라이언 맞추기 게임</h1>
			{ryon.length == 0 ? <button>게임 시작</button> : <button>리셋</button>}
		</>
	);
}

export default App;
