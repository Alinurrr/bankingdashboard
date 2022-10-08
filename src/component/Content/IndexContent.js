import React from 'react';
import LeftPage from './LeftPage';
import RightPage from './RightPage';

function IndexContent(props) {
  return (
    <>
      <div class="flex flex-row w-full mb-auto">
        <div class="flex flex-col w-3/5 pl-14 py-16 pr-10">
          <LeftPage />
        </div>
        <div class="flex flex-col  w-2/5 py-16 px-10 bg-[#F9F9FF]">
          <RightPage />
        </div>
      </div>
    </>
  );
}

export default IndexContent;