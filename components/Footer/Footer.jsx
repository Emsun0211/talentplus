import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const Footer = () => {
	const images = [
		"fb.png",
		"twitter.png",
		"youtube.png",
		"instagram.png",
		"discord.png",
	];
	return (
		<div className='bg-[#000f24] text-white flex justify-between flex-col sm:flex-row pt-[2rem] pb-[2rem] md:pt-[5rem] h-[100%] lg:h-[60vh] px-[1.5rem] sm:px-[2rem] lg:px-[5rem] w-[100%] gap-y-[3rem] '>
			<div className='w-[100%] sm:w-[25%] lg:w-[20%] flex flex-col gap-y-5'>
				<div>
					<Image src={"/techtime.png"} width={100} height={100} className='' />
				</div>
				<p className=''>Reach out to us on any of our social media networks</p>
				<div className='flex gap-x-[1rem] md:gap-x-[2rem]'>
					{images.map((image, idx) => (
						<div key={idx}>
							<Image src={`/${image}`} width={30} height={30} className='' />
						</div>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-y-3'>
				<h3 className='text-[1.5rem] font-[600]'>Useful Links</h3>
				<li>Home</li>
				<li>About Us</li>
				<li>Our Courses</li>
				<li>Testimonial</li>
				<li>Our Community</li>
			</div>
			<div className='flex flex-col gap-y-3'>
				<h3 className='text-[1.5rem] font-[600]'>Community</h3>
				<li>Help Center</li>
				<li>Partners</li>
				<li>Suggestion</li>
				<li>Blog</li>
				<li>Newsletter</li>
			</div>
			<div className='flex sm:hidden lg:flex flex-col gap-y-3 '>
				<h3 className='text-[1.5rem] font-[600]'>Subscribe Us</h3>
				<div className='flex'>
					<input
						type='email'
						className='p-3 w-[180px] md:w-[250px] rounded-tl-[5px] rounded-bl-[5px] border-[#004DB3] border-[1px] bg-[#2A2A2B]'
						placeholder='nft123@gmail.com'
					/>
					<Button
						text={"Send Message"}
						textColor={"white"}
						borderColor={"[#004DB3]"}
						size={"120"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
