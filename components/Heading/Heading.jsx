import React from "react";

const Heading = ({ title }) => {
	return (
		<div className='w-[100%] mx-auto flex flex-col items-center'>
			<h2 className='text-[22px] sm:text-[2rem] lg:text-[3rem] font-[900] text-center'>
				{title}
			</h2>
			<p className='hidden sm:block text-center text-[8px] sm:text-[12px] lg:text-[1rem] mb-[3rem] mt-[0.7rem] text-[#A1A1A1]'>
				High-definition Video is Video of Higher Resolution and Quality than
				Standard Definition. While <br /> there’s no Standard Meaning for High
				Definition, Generally any Standard Video Image
			</p>
			{/* Smaller screen */}
			<p className='block sm:hidden text-center text-[10px] sm:text-[12px] lg:text-[1rem] mb-[3rem] mt-[0.7rem] text-[#A1A1A1] px-[2rem]'>
				High-definition Video is Video of Higher Resolution and Quality than
				Standard Definition. While there’s no Standard Meaning for High
				Definition, Generally any Standard Video Image
			</p>
		</div>
	);
};

export default Heading;
