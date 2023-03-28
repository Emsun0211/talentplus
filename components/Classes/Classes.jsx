import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const Classes = () => {
	return (
		<div className='bg-[#F8F9FC] flex justify-between flex-col sm:flex-row items-center relative p-[1rem] w-[100%] lg:p-[5rem] sm:pb-[4rem] lg:pb-[9rem] pt-[4rem]'>
			<div className='flex flex-col w-[100%] sm:w-[50%] lg:w-[40%] text-center sm:text-left justify-center items-center sm:items-start mb-[1rem]'>
				<h2 className='text-[22px]  sm:text-[1.5rem] lg:text-[2.5rem] font-[900]  '>
					High quality video, audio & live classes
				</h2>
				<p className='text-[8px] sm:text-[12px] lg:text-[1rem] sm:mb-[1rem] lg:mb-[3rem] mt-[0.7rem] mb-[1rem] text-[#A1A1A1]'>
					High-definition Video is Video of Higher Resolution and Quality than
					Standard Definition. While there’s no Standard Meaning for High
					Definition, Generally any Standard Video Image
				</p>
				<Button text={"View Courses"} textColor={"white"} />
				<div className='grid grid-cols-2 mt-[2rem] gap-[1rem] sm:mt-[1rem] lg:mt-[4rem] place-items-center sm:gap-[10px] lg:gap-[20px]'>
					<Button
						text={"Audio Classes"}
						background={"white"}
						size={"160"}
						textColor={"black"}>
						<Image src={"/audioclass.png"} width={15} height={15} />
					</Button>
					<Button
						text={"Live Classes"}
						background={"white"}
						size={"150"}
						textColor={"black"}>
						<Image src={"/liveclass.png"} width={15} height={15} />
					</Button>
					<Button
						text={"Record Classes"}
						background={"white"}
						size={"170"}
						textColor={"black"}>
						<Image src={"/recordedclass.png"} width={15} height={15} />
					</Button>
					<Button
						text={"50+ Notes"}
						background={"white"}
						size={"150"}
						textColor={"black"}>
						<Image src={"/notes.png"} width={15} height={15} />
					</Button>
				</div>
			</div>
			<div className='relative w-[]'>
				<div>
					<Image
						src={"/classesimage1.png"}
						width={550}
						height={400}
						className='w-[250px] sm:w-[300px] lg:w-[550px]'
					/>
				</div>
				<div className='absolute bottom-[-10%] left-[-20%] sm:bottom-[-15%] sm:left-[-20%] lg:bottom-[-20%] lg:left-[-30%]'>
					<Image
						src={"/classesimage2.png"}
						width={350}
						height={300}
						className='w-[130px] sm:w-[180px] lg:w-[350px]'
					/>
				</div>
			</div>
			<div className='absolute bottom-[25%] left-[0] sm:top-[30%] sm:left-[52%]'>
				<Image
					src={"/review.png"}
					width={150}
					height={50}
					className='w-[100px] lg:w-[150px]'
				/>
			</div>
		</div>
	);
};

export default Classes;
