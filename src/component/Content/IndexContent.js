import React from 'react';
import LeftPage from './LeftPage';

function IndexContent(props) {
  return (
    <>
      <div class="flex flex-row w-full mb-auto">
        <div class="flex flex-col w-3/5 pl-14 py-16 pr-10">
          <LeftPage />
        </div>
        <div class="w-2/5 bg-gray-300">02</div>
      </div>
    </>
  );
}

export default IndexContent;