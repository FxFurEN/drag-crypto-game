'use client'

import { animated, useSpring } from '@react-spring/web'

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
		<div>
			<div className='flex-container'>
				<animated.div
					onClick={handleClick}
					style={{
						width: 80,
						height: 80,
						background: '#ff6d6d',
						borderRadius: 8,
						...springs,
					}}
				/>
			</div>
		</div>
	)
}

export default MovingDot
