import Image from "next/image";
import React from "react";

const CoursesCard = () => {
	return (
		<div className='flex flex-col bg-white p-3 w-[200px] sm:w-[320px] '>
			<div>
				<Image src={"/courses1.png"} width={300} height={200} alt='courses1' />
			</div>
			<div className='flex justify-between mt-2'>
				<p className='bg-[#1E5DCE]/20 py-1 px-3 text-[12px] text-[#1E5DCE] font-[500] rounded-[50px]'>
					Design
				</p>
				<div className='flex items-center gap-x-1 text-[12px] text-[#A1A1A1]'>
					<span>4.7k</span>
					<div>
						<Image src={"/grade.png"} width={20} height={20} />
					</div>
					<span>(32.7k)</span>
				</div>
			</div>
			<h3 className='mt-[1.5rem] text-[1rem] sm:text-[1.2rem] font-[700]'>
				Introduction to user research in UX Design
			</h3>
			<div className='flex justify-between  mt-3 text-[#A1A1A1]'>
				<div className='flex items-center justify-between gap-x-2'>
					<div>
						<Image src={"/schedule.png"} width={20} height={20} />
					</div>
					<span className='text-[12px] sm:text-[1rem]'>23hrs 50mins</span>
				</div>
				<div className='flex items-center justify-between gap-x-2'>
					<div>
						<Image src={"/menu_book.png"} width={30} height={30} />
					</div>
					<span className='text-[12px] sm:text-[1rem]'>15 lessons</span>
				</div>
			</div>
			<div className='flex justify-between items-center mt-[1.5rem]'>
				<div className='flex gap-x-2 items-center'>
					<div>
						<Image src={"/Frame165.png"} width={30} height={30} />
					</div>
					<span className='text-[12px] sm:text-[14px] font-[600]'>
						Leonard Victor
					</span>
				</div>

				<span className='text-[#004DB3] font-bold text-[1rem] sm:text-[1.1rem]'>
					$15.00
				</span>
			</div>
		</div>
	);
};

export default CoursesCard;
