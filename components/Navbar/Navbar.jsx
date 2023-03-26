import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../Button/Button";

export const Navbar = () => {
	return (
		<div className='fixed top-0 left-0 right-0 pt-[3rem] pb-2 px-[2rem]'>
			<div className=' flex justify-between items-center  mx-auto'>
				<div>
					<Image src={"/techtime.png"} width={120} height={120} className='' />
				</div>

				<div className=''>
					<div className='hidden sm:flex justify-between gap-x-10'>
						<ul className='flex items-center justify-between gap-x-10 text-[1.1rem] text-white'>
							<li>Home</li>
							<li>About Us</li>
							<li>Courses</li>
							<li>Testimonial</li>
							<li>Community</li>
						</ul>
						{/* <button className='p-3 bg-white text-[#004DB3] rounded-[5px] w-[140px]'>
							Enroll Now
						</button> */}
						<Button text={"Enroll Now"} background={"white"} size={"140"} />
					</div>
					<AiOutlineMenu className='block sm:hidden text-white w-[40px] h-[40px]' />
				</div>
			</div>
		</div>
	);
};
