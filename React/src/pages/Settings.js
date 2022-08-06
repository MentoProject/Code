
import Navbar from '../Navbar';
import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import Sidebar from "react-sidebar";
import SettingSidebar from "../SettingSidebar";

const Settings = () => {
	const [index, setIndex] = useState('2');
	const [index2, setIndex2] = useState('1');
	const [sidebarOpen, setOpen]=useState(false);
	return (
		<div className='relative'>
			<Sidebar
				pullRight={true}
				sidebar={<SettingSidebar index={index} index2={index2} setIndex={setIndex} setIndex2={setIndex2}/>}
				open={sidebarOpen}
				onSetOpen={setOpen}
				styles={{ sidebar: { background: "white", zIndex:'125', display:'absolute', position:'fixed' } }}
			>
			</Sidebar>
			<FaBars className='mt-[18px] z-[130] fixed right-[20px] text-5xl md:hidden ' onClick={()=>setOpen(!sidebarOpen)}/>
			<div className='' >
				<Navbar className='md:block sm:hidden' />
			</div>
			<section className="min-w-full min-h-screen  pt-[100px] h-full">
				<div className='flex flex-row'>
					<div className='w-[280px] px-[20px] mr-[20px] sm:hidden md:block'>
						<p className=' text-5xl font-[700] mb-[20px] ml-[20px]'>Settings</p>
						<div className='rounded-[45px] bg-white px-[15px] py-[25px] border-1 border-selectColor cursor-pointer'>
							<p onClick={() => { setIndex(1) }} className={'w-full px-[20px] text-3xl font-[700] mb-[40]' + (index == 1 ? " bg-selectColor rounded-[15px]" : "")}>Account</p>
							<p onClick={() => { setIndex(2) }} className={'w-full px-[20px] text-3xl font-[700] mb-[40] ' + (index == 2 ? " bg-selectColor rounded-[15px]" : "")}>Profile</p>
							<p onClick={() => { setIndex(3) }} className={'w-full px-[20px] text-3xl font-[700] mb-[40]' + (index == 3 ? " bg-selectColor rounded-[15px]" : "")}>Language</p>
						</div>
						<div className='mt-[50px] rounded-[45px] bg-white px-[15px] py-[25px] border-1 border-selectColor'>
							<button onClick={() => { setIndex2(1) }} className={'px-[20px] text-3xl font-[700] mb-[40]' + (index2 == 1 ? " text-selecttextColor" : "")}>Workspace</button>
							<button onClick={() => { setIndex2(2) }} className={'px-[20px] text-3xl font-[700] mb-[40]' + (index2 == 2 ? " text-selecttextColor" : "")}>Donate</button>
							<button onClick={() => { setIndex2(3) }} className={'px-[20px] text-3xl font-[700] mb-[40]' + (index2 == 3 ? " text-selecttextColor" : "")}>Plans</button>
						</div>
					</div>
					<div className='w-full relative'>
						<button className='mt-[20px] py-[1px] w-[120px] bg-blackColor rounded-full text-white text-2xl font-[700] absolute right-[50px]'>Save</button>
						<div className='pt-[40px] px-[30px] border-1 border-selectColor mt-[80px] h-full rounded-[50px] mx-[30px] pb-[50px]'>
							<div className='relative h-[370px]'>
								<div className=' w-full rounded-[40px] h-[240px] bg-selectColor relative'>
									<button className='text-3xl font-[700] absolute top-[20px] right-[40px]'>Edit</button>
								</div>
								<div className='absolute rounded-full w-[150px] h-[150px] top-[150px] left-[70px] bg-selectColor border-blackColor border-1 '>
								</div>
								<button className='text-3xl font-[700] ml-[240px]'>Edit</button>
							</div>
							<div className='sm:ml-[20px] md:ml-[70px]'>
								<p className='text-2xl font-[700]'>Name</p>
								<div className='flex flex-row w-full items-center'>
									<div className='ml-[35px] w-[2px] h-[50px] bg-selectColor'> </div>
									<div className=' ml-[50px] max-w-[400px] w-full'>
										<input
											className="
												form-control
												px-3
												py-1.5
												font-normal
												text-gray-700
												bg-white bg-clip-padding
												border border-solid border-gray-300
												rounded-[14px]
												transition
												ease-in-out
												m-0
											"
											placeholder="Enter your name"
										/>
									</div>
								</div>
								<p className='ml-[20px] text-2xl font-[700]'>Bio</p>
								<div className='flex flex-row w-full items-center'>
									<div className='ml-[35px] w-[2px] h-[150px] bg-selectColor'> </div>
									<div className=' ml-[50px] max-w-[600px] w-full'>
										<textarea
										class="
											resize-none
											form-control
											block
											w-full
											px-3
											py-1.5
											text-base
											font-normal
											text-gray-700
											bg-white bg-clip-padding
											border border-solid border-gray-300
											rounded
											transition
											ease-in-out
											m-0
											focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
										"
										rows="3"
										placeholder="Enter your bio"
										></textarea>
										<label className="form-label inline-block mb-2 text-gray-700 text-sm font-[700]"
										>300 charachter</label>
									</div>
								</div>
								<p className='text-2xl font-[700]'>Password</p>
								<div className='flex flex-row w-full items-center'>
									<div className=' ml-[85px] max-w-[400px] w-full'>
										<input
											className="
												form-control
												px-3
												py-1.5
												font-normal
												text-gray-700
												bg-white bg-clip-padding
												border border-solid border-gray-300
												rounded-[14px]
												transition
												ease-in-out
												m-0
											"
											placeholder="Enter your name"
										/>
										<div className='h-[15px]'></div>
										<input
											className="
											    mt-[26px]
												form-control
												px-3
												py-1.5
												font-normal
												text-gray-700
												bg-white bg-clip-padding
												border border-solid border-gray-300
												rounded-[14px]
												transition
												ease-in-out
												m-0
											"
											placeholder="Enter your name"
										/>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>
			</section>
			
		</div>
	)
}

export default Settings