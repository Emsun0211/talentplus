import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
	const images = [
		"Frame95.png",
		"Frame96.png",
		"Frame97.png",
		"Frame98.png",
		"Frame99.png",
	];

	return (
		<div className='bg-[#004DB3] h-[100%] pt-[7rem] px-[2rem] flex flex-col sm:flex-row justify-between'>
			<div className='text-center sm:text-left flex justify-center flex-col w-[100%] sm:w-[50%]'>
				<h2 className='text-[2.8rem] sm:text-[5rem] font-bold text-white leading-1 sm:leading-tight'>
					Grow your skills to advance your career path{" "}
				</h2>
				<p className='text-white mt-[1rem]'>
					Build your future with our quality education. the best and largest
					all-in-one online tutoring platform in the world
				</p>
				<div className='mt-[1rem] flex gap-x-5 justify-center sm:justify-start mb-[1rem]'>
					<Button
						text={"Get Started Now"}
						background={"transparent"}
						size={"180"}
						textColor={"white"}>
						<BsArrowUpRight />
					</Button>
					<Button text={"Enroll Now"} background={"white"} size={"140"} />
				</div>
				<div className='flex items-center sm:justify-start justify-center mt-[1rem]'>
					{images.map((image) => (
						<Image src={`/${image}`} width={40} height={40} />
					))}
				</div>
			</div>
			<div className='flex justify-center w-[100%] sm:w-[50%]'>
				<Image src={"/herowithimg.png"} width={600} height={400} />
			</div>
		</div>
	);
};

export default Hero;
