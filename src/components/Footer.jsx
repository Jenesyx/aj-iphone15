import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
    return (
        <footer className='py-f sm:px-10 px-5'>
            <div className='screen-max-width'>
                <div>
                    <p className='font-semibold text-gray text-sm'>
                        More ways to shop: {' '} 
                        <span className='underline text-blue cursor-pointer'>
                        find an Apple Store {' '}                        
                        </span>
                        or {' '}
                        <span className='underline text-blue cursor-pointer'>
                        other retailer                        
                        </span> {' '}
                        near you.
                    </p>
                    <p className='font-semibold text-gray text-sm'>
                        Or call 0000-000-0000. 
                    </p>
                </div>
                <div className='bg-neutral-700 my-5 h-[1px] w-full'/>
                <div className="flex md:flex-row flex-col md:items-center justify-between mb-10">
                    <p className="font-semibold text-gray text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
                    <div className="flex">
                        {footerLinks.map((link, i) => (
                        <p key={link} className="font-semibold text-gray text-xs cursor-pointer">
                            {link}{' '}
                            {i !== footerLinks.length - 1 && (
                            <span className="mx-2"> | </span>
                            )}
                        </p>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer