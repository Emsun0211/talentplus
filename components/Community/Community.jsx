import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const Community = () => {
	return (
		<div className='bg-[#004DB3] flex flex-col items-center px-2 py-[2rem] lg:py-[4rem]'>
			<div className='flex items-center flex-col text-[#fff] w-[80%] mx-auto'>
				<p className='text-[10px] sm:text-[1rem]'>JOIN OUR COMMUNITY</p>
				<h2 className='text-[1.2rem] sm:text-[2rem] lg:text-[3rem] font-bold text-center leading-normal'>
					Are You Ready To Connect With The Future Talent of The Tech World
				</h2>
				<p className='text-[10px] sm:text-[1rem]'>
					Meet up with other techstars and grow together
				</p>
			</div>
			<div>
				<Image src={"/community.png"} width={800} height={800} />
			</div>
			<div className='mt-[2rem]'>
				<Button
					text={"Join Our Community"}
					background={"white"}
					textColor={"[#004DB3]"}
					size={"190"}
				/>
			</div>
		</div>
	);
};

export default Community;
