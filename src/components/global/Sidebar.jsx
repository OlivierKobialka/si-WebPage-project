import React, { useState } from "react";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex h-screen'>
			<div
				className={`mt-5 ml-5 mb-5 flex flex-col items-center rounded-xl w-32 p-6 bg-black text-white ${
					isOpen ? "" : "hidden md:block"
				}`}>
				{/* LOGO */}
				<button>Sidebar</button>
				{/* OPTIONS */}
				<div className='bg-gray-500 w-32 flex my-56 flex-col items-center'>
					<button className='bg-black items-center h-12 justify-center rounded-b-2xl w-full'>
						A
					</button>
					<button className='w-full items-center h-12 justify-center '>A</button>
					<button className='w-full bg-black items-center h-12 justify-center rounded-t-2xl'>
						A
					</button>
					<button className='items-center h-12 justify-center w-full bg-black'>
						A
					</button>
				</div>
				<button className="mt-16">Settings</button>
			</div>
			<div className='flex-1 p-6 md:hidden'>
				<button className='toggle-button rounded-full bg-black text-white items-center justify-center p' onClick={() => setIsOpen(!isOpen)}>
					X
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
