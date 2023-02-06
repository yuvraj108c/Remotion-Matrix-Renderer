import {Composition} from 'remotion';
import {Main} from './Main';

export const RemotionRoot = () => {
	const fps = 30;
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={300 * fps} // 5 minutes
				fps={fps}
				width={1920}
				height={1080}
			/>
		</>
	);
};
