import React from 'react';

import DiagramBlue from '../../assets/icon/diagramblue.png'
import DiagramYellow from '../../assets/icon/diagramyellow.png'

function LeftPage(props) {
  return (
    <>
      <div className='flex flex-row w-full rounded-lg border border-gray-100 bg-white px-5'>

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
    </>
  );
}

export default LeftPage;