import React, {useState } from 'react'



const SettingSidebar = (props) => {
   
    return (
        <div className='h-screen sm:w-[350px] laptop:w-[0] mt-[100px]'>
            <div className='bg-white px-[15px] py-[25px] cursor-pointer'>
                <p onClick={() => { props.setIndex(1) }} className={'w-full px-[20px] text-3xl font-[700] mb-[40]' + (props.index == 1 ? " bg-selectColor rounded-[15px]" : "")}>Account</p>
                <p onClick={() => { props.setIndex(2) }} className={'w-full px-[20px] text-3xl font-[700] mb-[40] ' + (props.index == 2 ? " bg-selectColor rounded-[15px]" : "")}>Profile</p>
                <p onClick={() => { props.setIndex(3) }} className={'w-full px-[20px] text-3xl font-[700] mb-[40]' + (props.index == 3 ? " bg-selectColor rounded-[15px]" : "")}>Language</p>
            </div>
            <div className='mt-[50px] bg-white px-[15px] py-[25px]   '>
                <button onClick={() => { props.setIndex2(1) }} className={'px-[20px] text-3xl font-[700] mb-[40]' + (props.index2 == 1 ? " text-selecttextColor" : "")}>Workspace</button>
                <button onClick={() => { props.setIndex2(2) }} className={'px-[20px] text-3xl font-[700] mb-[40] block' + (props.index2 == 2 ? " text-selecttextColor" : "")}>Donate</button>
                <button onClick={() => { props.setIndex2(3) }} className={'px-[20px] text-3xl font-[700] mb-[40]' + (props.index2 == 3 ? " text-selecttextColor" : "")}>Plans</button>
            </div>
        </div>
    )
}

export default SettingSidebar