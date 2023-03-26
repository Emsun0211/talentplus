import React from "react";
import Button from "../Button/Button";
import CoursesCard from "./CoursesCard";

const Courses = () => {
	return (
		<div className='bg-[#F8F9FC] pt-[5rem] w-[100%] flex flex-col items-center'>
			<div className='w-[100%] mx-auto flex flex-col items-center'>
				<h2 className='text-[2rem] sm:text-[3.5rem] font-[900]'>
					Browse Our Popular Courses
				</h2>
				<p className='text-center text-[10px] sm:text-[1rem] mb-[4rem] mt-[0.7rem] text-[#A1A1A1]'>
					High-definition Video is Video of Higher Resolution and Quality than
					Standard Definition. While <br /> there’s no Standard Meaning for High
					Definition, Generally any Standard Video Image
				</p>
			</div>
			<ul className='flex justify-between gap-x-7 mb-5 text-[#A1A1A1]'>
				<li>All Categories </li>
				<li>Design </li>
				<li>Development </li>
				<li>Marketing </li>
			</ul>
			<div className='grid grid-cols-2 sm:grid-cols-3 gap-[2rem] mb-[2rem]'>
				<CoursesCard />
				<CoursesCard />
				<CoursesCard />
				<CoursesCard />
				<CoursesCard />
				<CoursesCard />
			</div>
			<Button
				text={"Explore All Courses"}
				background={"#004DB3"}
				textColor={"white"}
				size={"200px"}
			/>
		</div>
	);
};

export default Courses;
