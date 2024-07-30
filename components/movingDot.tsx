'use client'
import { useEffect, useState } from 'react'

const MovingDot: React.FC = () => {
	const [position, setPosition] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setPosition(prev => (prev < 100 ? prev + 1 : 0))
		}, 16) // примерно 60 кадров в секунду

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='relative w-full h-screen overflow-hidden'>
			<div
				className='absolute bg-blue-500 rounded-full w-10 h-10'
				style={{
					left: `${position}%`,
					top: '50%',
					transform: 'translateY(-50%)',
				}}
			/>
		</div>
	)
}

export default MovingDot
