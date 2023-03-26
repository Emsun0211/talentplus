import Image from "next/image";
import React from "react";
import ValueCard from "./ValueCard";

const Value = () => {
	return (
		<div className='bg-[#F8F9FC] p-[2rem]'>
			<div className='flex justify-between items-center flex-col sm:flex-row w-[100%] sm:w-[90%] mx-auto'>
				<div className='flex flex-col gap-4 w-[100%] sm:w-[60%] text-center sm:text-left'>
					<h2 className=' text-[2rem] sm:text-[3.5rem] font-[900] leading-tight'>
						This is why we are best from others
					</h2>
					<p className='text-[12px] sm:text-[1rem] text-[#A1A1A1]'>
						High-defination video is video of higher resolution and quality than
						standard <br /> definition. while there’s no standard meaning for
						high definition, generally <br /> any standard video image
					</p>
					<div>
						<Image src={"/value1.png"} width={500} height={400} />
					</div>
				</div>
				<div className='grid grid-cols-2 gap-5 mt-[2rem]'>
					<ValueCard />
					<ValueCard />
					<ValueCard />
					<ValueCard />
				</div>
			</div>
		</div>
	);
};

export default Value;
