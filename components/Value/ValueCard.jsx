import Image from "next/image";
import React from "react";

const ValueCard = ({ header, text, icon }) => {
	return (
		<div className='w-[160px] h-[190px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] bg-white rounded-[5px] p-3 flex flex-col gap-3 '>
			<div>
				<Image
					src={`/${icon}`}
					width={35}
					height={35}
					className='w-[25px] sm:w-[30px] lg:w-[35px]'
				/>
			</div>
			<h3 className='font-[700] text-[10px] sm:text-[12px] lg:text-[14px]'>
				{header}
			</h3>
			<p className='text-[8px] sm:text-[12px] lg:text-[14px] text-[#A1A1A1]'>
				{text}
			</p>
		</div>
	);
};

export default ValueCard;
