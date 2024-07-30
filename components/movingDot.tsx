'use client'
import TweenOne from 'rc-tween-one'
import { useState } from 'react'

const MovingDot: React.FC = () => {
	const [position, setPosition] = useState(0)
	const [speed, setSpeed] = useState(1)
	const [reverse, setReverse] = useState(false)

	const handleAnimationEnd = () => {
		setPosition(0)
		setSpeed(1)
	}

	const handleSpeedUp = () => {
		setSpeed(prevSpeed => prevSpeed * 2)
	}

	const handleReverse = () => {
		setReverse(prevReverse => !prevReverse)
	}

	const animationConfig = {
		left: reverse ? '0%' : '91%',
		duration: 10000 / speed, // 10 seconds base duration, modified by speed
		onComplete: handleAnimationEnd,
	}

	return (
		<div className='relative w-full h-screen overflow-hidden flex flex-col items-center justify-center mr-5 ml-5'>
			<TweenOne
				animation={animationConfig}
				className='absolute bg-blue-500 rounded-full w-10 h-10'
				style={{
					left: position === 0 ? '0%' : undefined,
					top: '50%',
					transform: 'translateY(-50%)',
				}}
				paused={false}
			/>
			<button
				onClick={handleSpeedUp}
				className='absolute bottom-20 px-4 py-2 bg-blue-500 text-white rounded'
			>
				Speed Up
			</button>
			<button
				onClick={handleReverse}
				className='absolute bottom-10 px-4 py-2 bg-green-500 text-white rounded'
			>
				Reverse
			</button>
		</div>
	)
}

export default MovingDot
