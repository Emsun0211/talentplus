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
		<div className='bg-[#CCDBF0] py-[2rem]'>
			<div className='flex  justify-between items-center sm:w-[60%] w-[80%] mx-auto '>
				{images.map((image) => (
					<Image
						src={`/${image}`}
						width={120}
						height={100}
						className='w-[80px] sm:w-[120px]'
					/>
				))}
			</div>
		</div>
	);
};

export default Partner;
