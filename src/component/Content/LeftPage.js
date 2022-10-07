import React from 'react';

import DiagramBlue from '../../assets/icon/diagramblue.png'
import DiagramYellow from '../../assets/icon/diagramyellow.png'

function LeftPage(props) {
  return (
    <>
      <div className='flex flex-row w-full rounded-xl border border-gray-200 bg-white px-5'>

        <article className="flex w-1/2 border-r sm:justify-between pr-7 my-8">
          <span className="sm:order-last">
            <img src={DiagramBlue} alt="diagramblue" />
          </span>
          <div>
            <p className="text-2xl font-semibold text-black">$15,980</p>
            <p className="text-sm font-bold text-gray-400">Credits</p>
          </div>
        </article>
        <article className="flex w-1/2 sm:justify-between pl-7 py-8">
          <span className="sm:order-last">
            <img src={DiagramYellow} alt="diagramyellow" />
          </span>
          <div>
            <p className="text-2xl font-semibold text-black">$4,324</p>
            <p className="text-sm font-bold text-gray-400">Debits</p>
          </div>
        </article>

      </div>

      <div className='flex flex-col w-full rounded-xl border border-gray-200 bg-white/70 mt-10'>

        {/* latest Transactions */}
        <div className='pt-8 pb-24 border-b'>
          <div className="flex w-full justify-between items-center px-14">
            <div>
              <p className="text-base font-medium text-black">Latest Transactions</p>
            </div>
            <div>
              <button className='>
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2736 10.8332L7.26875 7.78874C7.91035 7.08664 8.31115 6.16092 8.32446 5.14387C8.35303 2.96 6.5994 1.18324 4.41533 1.18324C2.23125 1.18324 0.431087 2.96 0.402498 5.14389C0.373909 7.32777 2.12756 9.10453 4.31163 9.10453C5.32878 9.10453 6.25964 8.71588 6.9701 8.08352L9.97497 11.128C10.0151 11.1687 10.0682 11.1891 10.1216 11.1891C10.1749 11.1891 10.2285 11.1687 10.2698 11.128C10.3523 11.0466 10.354 10.9146 10.2736 10.8332ZM4.31709 8.6876C2.36307 8.6876 0.793876 7.09793 0.819456 5.14389C0.845036 3.18984 2.45585 1.60015 4.40987 1.60015C6.36389 1.60015 7.93308 3.18982 7.9075 5.14389C7.88192 7.09795 6.27111 8.6876 4.31709 8.6876Z" fill="#304858" stroke="#304858" stroke-width="0.500288" />
                </svg>
              </button>
              <button className='>
                <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="-0.500288" x2="12.008" y2="-0.500288" transform="matrix(1 0 -0.0130896 0.999914 0.451172 1.1842)" stroke="#304858" stroke-width="1.00058" />
                  <line y1="-0.500288" x2="12.008" y2="-0.500288" transform="matrix(1 0 -0.0130896 0.999914 0.411865 4.18573)" stroke="#304858" stroke-width="1.00058" />
                  <line y1="-0.500288" x2="12.008" y2="-0.500288" transform="matrix(1 0 -0.0130896 0.999914 0.372681 7.18713)" stroke="#304858" stroke-width="1.00058" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full justify-between px-14 mt-9">

            <div>
              <p className="text-base text-[#A2ABA3] mb-6">Mon, Mar 1</p>
            </div>
            <div className='flex flex-row justify-between items-center mb-4'>
              <div className='flex flex-row items-center'>
                <button className='p-3.5 bg-[#FFF0F0] rounded-xl mr-4'>
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.636364 8.24141C0.658066 6.58359 2.0197 5.23966 3.67766 5.23966L11.683 5.23966L11.6044 11.2432H3.59907C1.94111 11.2432 0.614662 9.89922 0.636364 8.24141V8.24141Z" fill="#DA9696" />
                    <path d="M16.7237 9.00707C17.2051 8.60724 17.2147 7.87457 16.7438 7.47475L11.108 2.6897C10.4641 2.14305 9.46503 2.60583 9.4539 3.45586L9.32862 13.026C9.31749 13.876 10.3045 14.3388 10.9626 13.7921L16.7237 9.00707Z" fill="#C46B6B" />
                  </svg>
                </button>
                <p className="text-base font-medium text-[#304858]">Payment to Mikey</p>
              </div>
              <p className="text-base font-medium text-[#994943]">$560.00</p>
            </div>
            <div className='flex flex-row justify-between items-center mb-4'>
              <div className='flex flex-row items-center'>
                <button className='p-3.5 bg-[#E7F8F3] rounded-xl mr-4'>
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.86682 5.26994L14.8722 5.26994C16.5301 5.26994 17.8566 6.61387 17.8349 8.27168V8.27168C17.8132 9.9295 16.4515 11.2734 14.7936 11.2734H6.78823L6.86682 5.26994Z" fill="#96DAC6" />
                    <path d="M1.72652 9.03743C1.25561 8.6376 1.2652 7.90493 1.74658 7.5051L7.50767 2.72006C8.16582 2.17341 9.15281 2.63619 9.14168 3.48622L9.0164 13.0563C9.00527 13.9063 8.00617 14.3691 7.36233 13.8225L1.72652 9.03743Z" fill="#78B7A4" />
                  </svg>
                </button>
                <p className="text-base font-medium text-[#304858]">Salary from GND</p>
              </div>
              <p className="text-base font-medium text-[#304858]">$12,200.00</p>
            </div>
            <div className='flex flex-row justify-between items-center mb-7'>
              <div className='flex flex-row items-center'>
                <button className='p-3.5 bg-[#FFF9EF] rounded-xl mr-4'>
                  <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9336 4.26802L2.62747 0.385773C2.23542 0.222203 1.78914 0.294158 1.46282 0.573464C1.1365 0.852815 0.995915 1.28323 1.09596 1.69673L1.88606 4.96252H5.96379C6.15143 4.96252 6.30159 5.11463 6.29913 5.30228C6.29668 5.4899 6.14256 5.64203 5.9549 5.64203H1.87716L1.00157 8.9078C0.89069 9.32132 1.01999 9.75174 1.33901 10.0311C1.65867 10.3109 2.10312 10.382 2.49877 10.2188L11.9065 6.33654C12.3348 6.15979 12.6047 5.76348 12.6107 5.30228C12.6167 4.84108 12.3573 4.44475 11.9336 4.26802Z" fill="#D2973F" />
                  </svg>
                </button>
                <p className="text-base font-medium text-[#304858]">Transfer to Home via TransferWise</p>
              </div>
              <p className="text-base font-medium text-[#994943]">$3,000.00</p>
            </div>
            <div>
              <p className="text-base text-[#A2ABA3] mb-6">Mon, Mar 1</p>
            </div>
            <div className='flex flex-row justify-between items-center py-3 px-3.5 -mx-3.5 bg-white/40 rounded-xl shadow-md'>
              <div className='flex flex-row items-center'>
                <button className='p-3.5 bg-[#E7F8F3] rounded-xl mr-4'>
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.86682 5.26994L14.8722 5.26994C16.5301 5.26994 17.8566 6.61387 17.8349 8.27168V8.27168C17.8132 9.9295 16.4515 11.2734 14.7936 11.2734H6.78823L6.86682 5.26994Z" fill="#96DAC6" />
                    <path d="M1.72652 9.03743C1.25561 8.6376 1.2652 7.90493 1.74658 7.5051L7.50767 2.72006C8.16582 2.17341 9.15281 2.63619 9.14168 3.48622L9.0164 13.0563C9.00527 13.9063 8.00617 14.3691 7.36233 13.8225L1.72652 9.03743Z" fill="#78B7A4" />
                  </svg>
                </button>
                <p className="text-base font-medium text-[#304858]">Receive Refund</p>
              </div>
              <p className="text-base font-medium text-[#304858]">$1,550.00</p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default LeftPage;