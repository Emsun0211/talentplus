import Image from "next/image";
import React from "react";

const CoursesCard = () => {
	return (
		<div className='flex flex-col bg-white p-1 sm:p-3 lg:p-4 w-[170px] sm:w-[220px] lg:w-[370px] '>
			<div>
				<Image
					src={"/courses1.png"}
					width={300}
					height={200}
					alt='courses1'
					className='w-[160px] sm:w-[210px] lg:w-[380px]'
				/>
			</div>
			<div className='flex justify-between mt-2'>
				<p className='bg-[#1E5DCE]/20 py-1 px-3 text-[6px] sm:text-[10px] lg:text-[12px] text-[#1E5DCE] font-[500] rounded-[50px]'>
					Design
				</p>
				<div className='flex items-center gap-x-1 text-[4px] sm:text-[10px] lg:text-[12px] text-[#A1A1A1]'>
					<span>4.7k</span>
					<div>
						<Image
							src={"/grade.png"}
							width={20}
							height={20}
							className='w-[10px] sm:w-[20px]'
						/>
					</div>
					<span>(32.7k)</span>
				</div>
			</div>
			<h3 className='mt-[1.5rem] text-[8px] sm:text-[12px] lg:text-[1rem] font-[700]'>
				Introduction to user research in UX Design
			</h3>
			<div className='flex justify-between  mt-3 text-[#A1A1A1]'>
				<div className='flex items-center justify-between gap-x-2'>
					<div>
						<Image
							src={"/schedule.png"}
							width={20}
							height={20}
							className='w-[10px] sm:w-[20px]'
						/>
					</div>
					<span className='text-[6px] sm:text-[10px] lg:text-[1rem]'>
						23hrs 50mins
					</span>
				</div>
				<div className='flex items-center justify-between gap-x-2'>
					<div>
						<Image
							src={"/menu_book.png"}
							width={30}
							height={30}
							className='w-[10px] sm:w-[20px]'
						/>
					</div>
					<span className='text-[6px] sm:text-[10px] lg:text-[1rem]'>
						15 lessons
					</span>
				</div>
			</div>
			<div className='flex justify-between items-center mt-[1.5rem]'>
				<div className='flex gap-x-2 items-center'>
					<div>
						<Image
							src={"/Frame165.png"}
							width={30}
							height={30}
							className='w-[20px] sm:w-[30px]'
						/>
					</div>
					<span className='text-[8px] sm:text-[10px] lg:text-[1rem] font-[600]'>
						Leonard Victor
					</span>
				</div>

				<span className='text-[#004DB3] font-bold text-[12px] sm:text-[1rem]'>
					$15.00
				</span>
			</div>
		</div>
	);
};

export default CoursesCard;
