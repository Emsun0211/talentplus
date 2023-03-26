import Image from "next/image";
import React from "react";

const ValueCard = () => {
	return (
		<div className='w-[250px] h-[250px] bg-white rounded-[5px] p-3 flex flex-col gap-3'>
			<div>
				<Image src={"/frame131.png"} width={35} height={35} />
			</div>
			<h3 className='font-[700]'>Experienced Mentors</h3>
			<p className='text-[0.9rem] text-[#A1A1A1]'>
				High-defination video is video of higher resolution and quality than
				standard definition. high-defination video is video of higher resolution
				and quality than standard definition.
			</p>
		</div>
	);
};

export default ValueCard;
