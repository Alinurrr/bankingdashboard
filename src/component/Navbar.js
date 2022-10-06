import React from 'react';
import Profile from '../assets/img/profile.png'

function Navbar(props) {
  return (
    <div className="mx-auto flex h-28 w-full items-center justify-between px-4 border-b">
      <div className="flex items-center gap-4">
        <img src={Profile} alt="ProfilPhoto" />
        <h3 className='text-2xl font-normal'>Welcome To GND Bank</h3>
      </div>

      <div className="hidden items-center gap-4 lg:flex">
        <form className="mb-0 hidden lg:flex">
          <div className="relative">
            <input className="h-10 rounded-lg border-gray-200 pr-10 text-sm placeholder-gray-300 focus:z-10" placeholder="Choose Account" type="text" />
            <button className="absolute inset-y-0 right-0 mr-px rounded-r-lg p-2 text-gray-600" type="submit">
              <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.73064 9.18246C9.58218 9.32899 9.34458 9.32899 9.19996 9.18246L6.33952 6.28433C6.29131 6.23548 6.21211 6.23548 6.16262 6.28433L3.2263 9.18246C3.07784 9.32899 2.84025 9.32899 2.69562 9.18246C2.55099 9.03593 2.5541 8.79835 2.70257 8.65182L5.63888 5.75369C5.9853 5.41178 6.53969 5.41178 6.87715 5.75369L9.73759 8.65182C9.88221 8.79835 9.8791 9.03593 9.73064 9.18246Z" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.70921 10.8068C9.56458 10.6603 9.32699 10.6603 9.17853 10.8068L6.24221 13.7049C6.19272 13.7538 6.11352 13.7538 6.06531 13.7049L3.20487 10.8068C3.06025 10.6603 2.82265 10.6603 2.67419 10.8068C2.52572 10.9533 2.52261 11.1909 2.66724 11.3374L5.52768 14.2356C5.86514 14.5775 6.41953 14.5775 6.76594 14.2356L9.70226 11.3374C9.85073 11.1909 9.85384 10.9533 9.70921 10.8068Z" fill="black" />
              </svg>

            </button>
          </div>
        </form>
        <button className="rounded-lg bg-[#303778] p-2 text-sm font-medium" href>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2525 5.72301C16.5488 5.72301 16.8396 5.63531 17.0883 5.47096L20.0059 3.54291C20.3412 3.32128 20.7834 3.5596 20.7782 3.95915L20.6569 13.2268C20.646 14.0557 19.9653 14.7276 19.1364 14.7276H18.1358L18.1161 16.2283H19.1167C20.7746 16.2283 22.1361 14.8845 22.1578 13.2268L22.2791 3.95915C22.3 2.36095 20.5312 1.40768 19.1897 2.2942L16.2721 4.22225L9.26795 4.22225C7.61011 4.22225 6.24857 5.56608 6.22687 7.22377L6.21378 8.22428H7.71467L7.72776 7.22377C7.73861 6.39493 8.41938 5.72301 9.2483 5.72301L16.2525 5.72301Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.1349 19.0584C6.40382 18.8455 6.736 18.7295 7.07681 18.7295H15.0816C15.9105 18.7295 16.5912 18.0576 16.6021 17.2287L16.6807 11.2257C16.6915 10.3968 16.0284 9.72491 15.1994 9.72491H5.1935C4.36458 9.72491 3.68381 10.3968 3.67296 11.2257L3.5572 20.0689C3.55171 20.4884 4.03391 20.7216 4.36491 20.4595L6.1349 19.0584ZM7.05716 20.2302H15.0619C16.7198 20.2302 18.0813 18.8864 18.103 17.2287L18.1816 11.2257C18.2033 9.56798 16.8769 8.22415 15.2191 8.22415H5.21314C3.55531 8.22415 2.19377 9.56798 2.17207 11.2257L2.05631 20.0689C2.03434 21.7468 3.96315 22.6796 5.28717 21.6314L7.05716 20.2302Z" fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.38517 14.2272C6.39059 13.8127 6.731 13.4767 7.14549 13.4767H13.1495C13.564 13.4767 13.8956 13.8127 13.8902 14.2272C13.8847 14.6416 13.5443 14.9776 13.1298 14.9776H7.12584C6.71135 14.9776 6.37974 14.6416 6.38517 14.2272Z" fill="white" />
          </svg>

        </button>
        <button className="rounded-lg bg-white p-2 text-sm font-medium" href>
          <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1183 18.9055H20.7068C21.4884 18.9055 22.1302 18.272 22.1404 17.4905C22.1453 17.1153 22.001 16.7554 21.7391 16.49L20.7516 15.4895C20.3812 15.1143 20.177 14.6053 20.1839 14.0746L20.2259 10.8721C20.2835 6.46774 16.7595 2.89734 12.3549 2.89734C7.9408 2.89734 4.3193 6.48235 4.27477 10.896L4.24294 14.0506C4.23745 14.5955 4.00999 15.1174 3.61311 15.4959L2.57053 16.4902C2.29297 16.755 2.1334 17.1196 2.12841 17.5007C2.11826 18.2765 2.73902 18.9055 3.51493 18.9055H8.11359C8.08465 21.1157 9.85312 22.9075 12.0636 22.9075C14.274 22.9075 16.0894 21.1157 16.1183 18.9055ZM19.6764 16.5507L20.5193 17.4047H3.77211L4.64168 16.5754C5.33622 15.913 5.73427 14.9996 5.74389 14.0461L5.77571 10.8915C5.81186 7.30845 8.75184 4.3981 12.3352 4.3981C15.911 4.3981 18.7718 7.29659 18.725 10.8721L18.6831 14.0746C18.6709 15.0033 19.0282 15.894 19.6764 16.5507ZM14.6174 18.9055H9.61448C9.59639 20.2869 10.7017 21.4067 12.0832 21.4067C13.4648 21.4067 14.5994 20.2869 14.6174 18.9055Z" fill="black" />
          </svg>
        </button>
        <button className="rounded-lg bg-white p-2 text-sm font-medium " href>
          <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2148 11.4023C14.149 11.4023 15.7376 9.83443 15.7629 7.90031C15.7883 5.96619 14.2407 4.39827 12.3064 4.39827C10.3722 4.39827 8.78358 5.96619 8.75826 7.90031C8.73294 9.83443 10.2805 11.4023 12.2148 11.4023ZM12.1951 12.9032C14.9584 12.9032 17.2278 10.6633 17.2639 7.90031C17.3001 5.13728 15.0894 2.8974 12.3261 2.8974C9.56282 2.8974 7.29343 5.13728 7.25726 7.90031C7.22109 10.6633 9.43184 12.9032 12.1951 12.9032Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.14392 16.6541C6.79532 16.6541 4.86648 18.5578 4.83574 20.9062L4.82264 21.9067C4.81721 22.3212 4.47683 22.6571 4.06237 22.6571C3.64791 22.6571 3.31632 22.3212 3.32175 21.9067L3.33485 20.9062C3.37644 17.729 5.98605 15.1533 9.16357 15.1533H15.1671C18.3447 15.1533 20.8868 17.729 20.8452 20.9062L20.8321 21.9067C20.8267 22.3212 20.4863 22.6571 20.0719 22.6571C19.6574 22.6571 19.3258 22.3212 19.3312 21.9067L19.3443 20.9062C19.3751 18.5578 17.4961 16.6541 15.1475 16.6541H9.14392Z" fill="black" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;