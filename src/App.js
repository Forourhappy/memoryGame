import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import ryanList from './ryanList.json';

// 게임 시작버튼 / 리셋버튼
// 카드리스트
// 점수
// 남은 생명

// 게임 초기화
// 라이언 목록이 랜덤으로 섞인 한 쌍의 배열 필요

const shuffle = array => {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

function App() {
	// 라이언 사진들이 들어가는 곳
	const [ryan, setRyan] = useState([]);
	const initGame = () => {
		const shuffleRyan = shuffle([...ryanList, ...ryanList]);
		setRyan(shuffleRyan);
	};

	return (
		<>
			<h1>라이언 맞추기 게임</h1>
			{ryan ? (
				<button className='gameStart' onClick={initGame}>
					게임 시작
				</button>
			) : (
				<button className='reset'>리셋</button>
			)}
			<div className='gameBlock'>
				{ryan.map(i => (
					<Card ryan={i} />
				))}
			</div>
		</>
	);
}

export default App;
