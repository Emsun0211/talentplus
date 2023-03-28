import Image from "next/image";
import React from "react";

const Partner = () => {
	const images = [
		"zoom.png",
		"stripe.png",
		"monday.png",
		"slack1.png",
		"Dropbox.png",
	];
	// #AAC4E6 #CCDBF0
	return (
		<div className='bg-[#CCDBF0] py-[2rem] px-[1rem]'>
			<div className='flex  justify-between items-center sm:w-[80%] w-[100%] lg:w-[70%] mx-auto gap-x-2 '>
				{images.map((image) => (
					<Image
						src={`/${image}`}
						width={120}
						height={100}
						className='w-[60px] sm:w-[100px]'
					/>
				))}
			</div>
		</div>
	);
};

export default Partner;
