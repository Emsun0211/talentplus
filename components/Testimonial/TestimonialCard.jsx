import Image from "next/image";
import React from "react";

export const TestimonialCard = ({ items }) => {
	return (
		<div className='w-[200px] h-[200px] sm:w-[380px] sm:h-[200px] lg:w-[620px] lg:h-[280px] bg-[#ffffff] px-[1rem] py-[1rem] lg:py-[2rem] rounded-[10px]'>
			<p className='text-[7px] sm:text-[10px] lg:text-[15px] text-[#A1A1A1]'>
				{items.text}
			</p>
			<div className='flex mt-[1rem] gap-x-[1rem] items-center'>
				<div>
					<Image
						src={"/Frame176.png"}
						width={40}
						height={40}
						className='w-[20px] sm:w-[30px] lg:w-[40px]'
					/>
				</div>
				<div className='text-[#A1A1A1] text-[7px] sm:text-[10px] lg:text-[15px]'>
					<h3>{items.user}</h3>
					<p>{items.role}</p>
				</div>
			</div>
		</div>
	);
};
