import Image from "next/image";
import React from "react";
import ValueCard from "./ValueCard";

const Value = () => {
	return (
		<div className='bg-[#F8F9FC] p-[1rem] pt-[2rem] sm:p-[0px] lg:p-[1.5rem]'>
			<div className='flex justify-between items-center flex-col sm:flex-row w-[100%] sm:w-[95%] mx-auto'>
				<div className='flex flex-col gap-4 w-[100%] sm:w-[40%] lg:w-[60%] text-center items-center sm:items-start sm:text-left'>
					<h2 className=' text-[1.4rem] sm:text-[1.5rem] lg:text-[3rem] font-[900] leading-tight'>
						This is why we are best from others
					</h2>
					<p className='text-[8px] sm:text-[10px] lg:text-[1rem] text-[#A1A1A1]'>
						High-defination video is video of higher resolution and quality than
						standard <br /> definition. while there’s no standard meaning for
						high definition, generally <br /> any standard video image
					</p>
					<div>
						<Image
							src={"/value1.png"}
							width={500}
							height={400}
							className='w-[300px] sm:w-[400px] lg:w-[600px]'
						/>
					</div>
				</div>
				<div className='grid grid-cols-2 gap-5 mt-[2rem] place-items-center'>
					<ValueCard
						icon={"frame131.png"}
						header={"Experienced Mentors"}
						text={
							"high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition."
						}
					/>
					<ValueCard
						icon={"Frame221.png"}
						header={"Affordable Prices"}
						text={
							"high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. "
						}
					/>
					<ValueCard
						icon={"Frame1311.png"}
						header={"Affordable Prices"}
						text={
							"high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. "
						}
					/>
					<ValueCard
						icon={"Frame138.png"}
						header={"Flexible Learning"}
						text={
							"high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. "
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Value;
