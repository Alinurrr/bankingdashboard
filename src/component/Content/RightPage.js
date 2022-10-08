import React from 'react';
import Graph from '../../assets/img/graph.png'

function RightPage(props) {
  return (
    <>

      <div className="flex flex-row">

        <div className="master-card shrink-0 flex flex-col justify-end pl-6 pb-5">
          <h5 className="text-xl font-semibold text-white mb-5">1242.42 USD</h5>
          <p className="text-base text-white/40">
            5495 7381 3759 2321
          </p>
          <p className="text-base text-white/40">
            04 / 24
          </p>
        </div>

        <div className="balance-card flex flex-col items-center shrink-0 text-white bg-[#FDBC64] ml-5 p-5 rounded-3xl">
          <p className='text-base mb-2'>Balance</p>
          <h3 className='text-3xl mb-4'>$12.2k</h3>
          <img src={Graph} alt="graph" />
          <div className='flex flex-row items-center mt-4'>
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.904653 5.18949L5.5443 0.610184L9.68241 5.18949" stroke="#50BC8F" stroke-width="0.763213" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0721 8.24233L5.50484 3.66302L0.817739 8.24233H3.15493L3.10498 12.0581H7.68457L7.73452 8.24233H10.0721Z" fill="#068751" />
            </svg>
            <span className='text-base ml-1'>19%</span>
          </div>
        </div>

      </div>

    </>
  );
}

export default RightPage;