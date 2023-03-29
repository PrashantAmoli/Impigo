import Image from 'next/image';
import { TbAugmentedReality } from 'react-icons/tb';

export default function ModelViewer({ src }) {
	return (
		<div className="w-full min-h-[77vh] flex justify-center cursor-grab  bg-black/20 rounded-3xl">
			{/* <button
				className="absolute z-10 w-11 h-11 bottom-1 right-1"
				onClick={() => (skybox === '' ? setSkybox('/models/venice_sunset_1k.hdr') : setSkybox(''))}
			>
				<Image src={'/icons/icon.png'} width={44} height={44} alt="Background" />
			</button> */}
			<model-viewer
				src={src}
				skybox-image={''}
				ios-src=""
				poster="/woodblocks.gif"
				alt="Asian Shoes 3D"
				style={{
					width: '100%',
					minHeight: '50vh',
					outline: 'none',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				className="overflow-y-visible bg-scroll border-none outline-none focus-within:outline-none focus:outline-none focus-visible:outline-none peer-focus-within:outline-none peer-focus:outline-none peer-focus-visible:outline-none bg-[#171035]"
				ar-modes="webxr scene-viewer quick-look"
				shadow-intensity="2"
				touch-action="pan-y"
				shadow-softness="0"
				exposure="0.52"
				camera-controls
				auto-rotate
				outline="none"
				ar
			>
				<button
					slot="ar-button"
					className="bg-gray-900 hover:bg-gray-800 hover:scale-x-105 border-white/70 text-white border font-semibold text-sm rounded-md px-1.5 py-0.5 absolute top-1 right-1 sm:right-4 z-20 inline-flex items-center gap-1"
				>
					<TbAugmentedReality />
					AR View
				</button>
			</model-viewer>
		</div>
	);
}
