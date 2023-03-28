import React from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import CoursesCard from "./CoursesCard";

const Courses = () => {
	return (
		<div className='bg-[#F8F9FC] pt-[2rem] md:pt-[5rem] w-[100%] px-[0.5rem] mx-auto flex flex-col items-center'>
			<Heading title={"Browse Our Popular Courses"} />
			<div className=' w-[100%] md:w-[90%] mx-auto flex flex-col '>
				<ul className='flex justify-center items-center gap-x-7 mb-5 text-[#A1A1A1] text-[8px] sm:text-[14px] lg:text-[16px]'>
					<li className='p-2 bg-white text-[#004DB3] font-bold'>
						All Categories
					</li>
					<li>Design </li>
					<li>Development </li>
					<li>Marketing </li>
				</ul>
				<div className='grid grid-cols-2 sm:grid-cols-3 gap-x-[10px] gap-y-[20px] mb-[2rem]'>
					<CoursesCard />
					<CoursesCard />
					<CoursesCard />
					<CoursesCard />
					<CoursesCard />
					<CoursesCard />
				</div>
			</div>
			<Button
				text={"Explore All Courses"}
				// background={"#004DB3"}
				textColor={"white"}
				size={"200"}
			/>
		</div>
	);
};

export default Courses;
