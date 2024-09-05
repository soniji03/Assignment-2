import React from 'react'

function HomePage() {
    const font = {
        fontFamily: {
            'Inter': ['Inter', 'sans-serif']
        },
        fontWeight: {
            400: 400
        },
        style: {
            normal: 'normal'
        }
    };

    return (
        <div style={font} className='bg-white'>
            <div className='bg-[#FC6565] text-center text-xs sm:text-sm md:text-base font-semibold text-white p-2'>
                <h1>TRY RENTING WITH 50% OFF YOUR FIRST 2 MONTHS 💚 EASILY SAVE MONEY WHILST CREATING A SUSTAINABLE WARDROBE 🌍</h1>
            </div>

            <header className='flex flex-col md:flex-row justify-between p-4 md:p-6 items-center md:px-8 lg:px-[7rem]'>
                <div className='items-center flex flex-col mb-4 md:mb-0'>
                    <img src='/t1.png' alt="TinyClo Logo" className='w-16 md:w-16' />
                    <span className='font-bold text-[#147AA9] text-lg md:text-xl'>TinyClo</span>
                </div>

                <nav className='mb-4 md:mb-0'>
                    <ul className='flex flex-wrap justify-center gap-3 md:gap-5'>
                        <li className='font-semibold bg-[#fceba3] px-3 py-1 text-center rounded-full'>Home</li>
                        <li className='px-2'>Why Rent?</li>
                        <li className='px-2'>Clean Out Closet</li>
                        <li className='px-2'>About Us</li>
                        <li className='px-2'>Store</li>
                        <li className='px-2'>Contact Us</li>
                    </ul>
                </nav>

                <div>
                    <button className='font-semibold bg-[#fceba3] w-full md:w-40 p-2 rounded-lg'>Login/Sign Up</button>
                </div>
            </header>

            <main className='flex flex-col md:flex-row  px-4 md:px-8 lg:px-16'>
                <div className='w-full md:w-1/2 flex flex-col items-center py-6 md:py-10 gap-8 md:gap-16'>
                    <div className='text-center'>
                        <h1 className='font-bold mb-4 text-2xl md:text-4xl lg:text-5xl'><span className='text-[#FC6565]'>BABIES</span> GROW FAST</h1>
                        <p className='text-lg md:text-2xl mb-4'>Simplify Your Life with Our</p>
                        <button className='bg-[#FC6565] text-white font-bold text-base md:text-lg w-full md:w-56 p-2 rounded-lg'>TinyClo Subscription</button>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <button className='bg-[#fceba3] font-bold p-3 w-full sm:w-52 rounded-lg'>How it works?</button>
                        <button className='bg-[#147AA9] font-bold text-white p-3 w-full sm:w-52 rounded-lg'>Start Membership</button>
                    </div>
                </div>

                <div className='w-full md:w-1/2 mt-8 md:mt-0'>
                    <img src='/t2.png' alt="Baby" className='w-full h-auto max-h-[27rem] object-cover' />
                </div>
            </main>

            <div className='flex justify-end px-4 md:px-8 lg:px-16 -my-2'>
                <img src='/t3.png' alt="Decoration" className='w-16 md:w-20' />
            </div>

            <section className='flex flex-col md:flex-row px-4 md:px-8 lg:px-16 gap-5 py-2'>
                <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                    <h2 className='text-right font-semibold mb-2 lg:md:px-12'>Starting from 100 INR</h2>
                    <div className='bg-blue-100 rounded-3xl flex flex-col sm:flex-row items-center p-4 h-auto md:h-36'>
                        <img src='/t4.png' alt="Kids Clothing" className='h-32 lg:h-[13rem] sm:h-48 mb-4 sm:mb-0 sm:-mt-16' />
                        <div className='text-center lg:flex lg:flex-col lg:justify-center lg:right-0 sm:text-left sm:ml-4'>
                            <h3 className='font-semibold text-xl mb-2'>Kids Clothing</h3>
                            <h6 className='font-semibold mb-2'>Age (0-6)</h6>
                            <button className='bg-[#fceba3] p-1 w-24 rounded-lg'>Explore {'>'}</button>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                    <h2 className='font-semibold mb-2 lg:md:px-12'>Starting from 500 INR</h2>
                    <div className='bg-pink-100 rounded-3xl flex flex-col sm:flex-row items-center p-4 h-auto md:h-36'>
                        <div className='text-center sm:text-left mb-4 sm:mb-0'>
                            <h3 className='font-semibold text-xl mb-2'>Equipments</h3>
                            <h6 className='font-semibold mb-2'>Age (0-6)</h6>
                            <button className='bg-[#fceba3] p-1 w-24 rounded-lg'>Explore {'>'}</button>
                        </div>
                        <img src='/t5.png' alt="Equipments" className='lg:h-[15rem] lg:-my-28  sm:h-48 sm:-mb-16' />
                    </div>
                </div>

                <div className='w-full md:w-1/3'>
                    <h2 className='font-semibold mb-2'>Starting from 100 INR</h2>
                    <div className='bg-green-100 rounded-3xl flex flex-col sm:flex-row items-center p-4 h-auto md:h-36'>
                        <div className='text-center sm:text-left mb-4 sm:mb-0'>
                            <h3 className='font-semibold text-xl mb-2'>Toys</h3>
                            <h6 className='font-semibold mb-2'>Age (0-6)</h6>
                            <button className='bg-[#fceba3] p-1 w-24 rounded-lg'>Explore {'>'}</button>
                        </div>
                        <img src='/t6.png' alt="Toys" className='h-32 lg:h-[15rem] lg:-my-24 sm:h-48 sm:-mb-16' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
