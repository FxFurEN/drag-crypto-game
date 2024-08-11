'use client'

import { animated, useSpring } from '@react-spring/web'
import { Button } from './ui/button'

const MovingDot = () => {
	const [springs, api] = useSpring(() => ({
		from: { x: 0 },
	}))

	const handleClick = () => {
		api.start({
			to: {
				x:
					springs.x.get() >= window.innerWidth - 80
						? 0
						: window.innerWidth - 80,
			},
		})
	}

	return (
		<div className='flex flex-col justify-between h-screen'>
			<div className='flex items-center flex-grow'>
				<animated.div
					style={{
						width: 80,
						height: 80,
						background: '#ff6d6d',
						borderRadius: 8,
						...springs,
					}}
				/>
			</div>
			<div className='flex justify-center mb-4'>
				<Button className='px-4 py-2 rounded' onClick={handleClick}>
					Move Dot
				</Button>
			</div>
		</div>
	)
}

export default MovingDot
