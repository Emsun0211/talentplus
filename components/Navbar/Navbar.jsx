import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../Button/Button";

export const Navbar = () => {
	const [isOpen, setIsopen] = useState(false);
	const [navbar, setNavbar] = useState();

	const changeBackground = () => {
		console.log(window.scrollY);
		if (window.scrollY >= 500) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};
	useEffect(() => {
		changeBackground();
		// adding the event when scroll change Logo
		window.addEventListener("scroll", changeBackground);
	});
	const scrollBg = navbar ? "bg-[#004DB3]" : "";
	return (
		<div
			className={`z-40 fixed top-0 ${scrollBg} left-0 right-0 pt-[1.5rem] pb-[1rem]  pb-2 px-[2rem]`}>
			<div className=' flex justify-between items-center  mx-auto'>
				<div>
					<Image src={"/techtime.png"} width={120} height={120} className='' />
				</div>

				<div className='cursor-pointer'>
					<div className='hidden sm:flex justify-between gap-x-5 lg:gap-x-10'>
						<ul className='flex items-center justify-between gap-x-5 lg:gap-x-10 text-[14px] lg:text-[1.1rem] text-white'>
							<li>Home</li>
							<li>About Us</li>
							<li>Courses</li>
							<li>Testimonial</li>
							<li>Community</li>
						</ul>

						<Button text={"Enroll Now"} background={"white"} size={"140"} />
					</div>
					<AiOutlineMenu
						className='block sm:hidden text-white w-[40px] h-[40px]'
						onClick={() => setIsopen(!isOpen)}
					/>
				</div>
			</div>
			{isOpen ? (
				<div className='w-[100%] bg-[#004DB3] h-[100vh] py-[3rem]'>
					<ul className='flex items-center justify-between flex-col gap-y-[3rem] text-[14px] lg:text-[1.1rem] text-white'>
						<li>Home</li>
						<li>About Us</li>
						<li>Courses</li>
						<li>Testimonial</li>
						<li>Community</li>
					</ul>
				</div>
			) : null}
		</div>
	);
};
