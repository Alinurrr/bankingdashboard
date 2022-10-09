import React from 'react';

import LogoBank from '../assets/img/logo.png'
import Logout from '../assets/icon/power.png'


function Sidebar(props) {
  return (
    <>
      <div className="w-24 flex-col justify-between border-r bg-white h-screen sticky top-0 ">
        <div >
          <div className="inline-flex w-24 pt-6 pb-24 items-center justify-center">
            {/* <span className="block h-14 w-14 rounded-lg bg-gray-200" /> */}
            <img src={LogoBank} alt="Hounter Logo" />
          </div>

          <div>
            <nav className="flex flex-col">
              <ul className="space-y-5">
                <li>
                  <a href='/' className="sidebarnav active group relative flex justify-center rounded  py-1.5 text-indigo-600 hover:bg-gray-50 hover:text-gray-700 ">

                    <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1884 9.62428C17.4853 9.33121 17.4916 8.85606 17.2023 8.563C16.9131 8.26993 16.4379 8.26993 16.1409 8.563L13.9828 10.693C13.5888 10.471 13.1328 10.3444 12.6456 10.3444C11.1258 10.3444 9.87768 11.5763 9.85779 13.096C9.83789 14.6156 11.0538 15.8476 12.5736 15.8476C14.0934 15.8476 15.3416 14.6156 15.3615 13.096C15.3678 12.6088 15.2472 12.1512 15.0303 11.7543L17.1884 9.62428ZM11.3588 13.096C11.3678 12.4052 11.9352 11.8452 12.626 11.8452C13.3168 11.8452 13.8695 12.4052 13.8605 13.096C13.8514 13.7867 13.2841 14.3467 12.5932 14.3467C11.9024 14.3467 11.3497 13.7867 11.3588 13.096Z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7175 4.84158C8.15848 4.84158 4.41426 8.53711 4.35459 13.0958C4.32471 15.3782 5.22314 17.443 6.70156 18.938C6.99107 19.2308 6.98531 19.7059 6.68868 19.9992C6.39206 20.2925 5.9169 20.293 5.62738 20.0002C3.88195 18.2352 2.81839 15.7927 2.8537 13.0958C2.92422 7.70826 7.34921 3.34082 12.7372 3.34082C18.1252 3.34082 22.4358 7.70826 22.3653 13.0958C22.33 15.7893 21.2053 18.2291 19.4176 19.9936C19.1207 20.2866 18.6455 20.2866 18.3563 19.9936C18.0671 19.7005 18.0733 19.2254 18.3702 18.9324C19.8844 17.4378 20.8345 15.3753 20.8644 13.0958C20.9241 8.53711 17.2766 4.84158 12.7175 4.84158Z" />
                    </svg>

                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Dashboard
                    </span>
                  </a>
                </li>

                <li>
                  <a href='/' className="sidebarnav  group relative flex justify-center rounded  py-1.5 text-indigo-600 hover:bg-gray-50 hover:text-gray-700 ">

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5868 6.47865L20.6045 5.12444C20.6244 3.60489 19.4086 2.37305 17.8889 2.37305L5.88176 2.37305C4.36207 2.37305 3.114 3.60489 3.09411 5.12444L2.91075 19.1316C2.89085 20.6511 4.10668 21.883 5.62636 21.883H19.6347C21.1544 21.883 22.4024 20.6511 22.4223 19.1316L22.5533 9.12648C22.5698 7.86706 21.7374 6.80528 20.5868 6.47865ZM4.595 5.12444C4.60404 4.43374 5.17135 3.87381 5.86211 3.87381L17.8692 3.87381C18.56 3.87381 19.1127 4.43374 19.1036 5.12444L19.0872 6.37508L5.82937 6.37508C5.1386 6.37508 4.58596 5.81515 4.595 5.12444ZM4.56291 7.57583C4.93566 7.76765 5.35935 7.87584 5.80972 7.87584L19.818 7.87584C20.5088 7.87584 21.0614 8.43577 21.0524 9.12648L21.0262 11.1275L17.5241 11.1275C15.8663 11.1275 14.5048 12.4713 14.4831 14.129C14.4614 15.7867 15.7877 17.1305 17.4456 17.1305L20.9476 17.1305L20.9214 19.1316C20.9124 19.8223 20.3451 20.3822 19.6543 20.3822H5.64601C4.95524 20.3822 4.4026 19.8223 4.41164 19.1316L4.56291 7.57583ZM17.5045 12.6283L21.0066 12.6283L20.9673 15.6298L17.4652 15.6298C16.6363 15.6298 15.9731 14.9579 15.984 14.129C15.9948 13.3002 16.6756 12.6283 17.5045 12.6283Z" />
                    </svg>


                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Wallet
                    </span>
                  </a>
                </li>

                <li>
                  <a href='/' className="sidebarnav  group relative flex justify-center rounded  py-1.5 text-indigo-600 hover:bg-gray-50 hover:text-gray-700 ">

                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.01858 2.40585C8.43304 2.40585 8.76462 2.74181 8.7592 3.15623L8.7461 4.15674L17.2511 4.15674L17.2642 3.15623C17.2697 2.74181 17.6101 2.40585 18.0245 2.40585C18.439 2.40585 18.7706 2.74181 18.7651 3.15623L18.752 4.15674H20.0028C21.6606 4.15674 22.987 5.50057 22.9653 7.15827L22.8081 19.1644C22.7864 20.8221 21.4249 22.1659 19.767 22.1659H5.75871C4.10088 22.1659 2.77452 20.8221 2.79623 19.1644L2.95339 7.15827C2.97509 5.50057 4.33663 4.15674 5.99447 4.15674H7.24521L7.25831 3.15623C7.26373 2.74181 7.60412 2.40585 8.01858 2.40585ZM17.2315 5.6575L17.2119 7.15827C17.2064 7.57269 17.538 7.90865 17.9525 7.90865C18.3669 7.90865 18.7073 7.57269 18.7127 7.15827L18.7324 5.6575H19.9831C20.8121 5.6575 21.4752 6.32942 21.4644 7.15827L21.4218 10.4099L4.41172 10.4099L4.45428 7.15827C4.46513 6.32942 5.1459 5.6575 5.97482 5.6575H7.22556L7.20592 7.15827C7.20049 7.57269 7.53208 7.90865 7.94654 7.90865C8.361 7.90865 8.70138 7.57269 8.70681 7.15827L8.72645 5.6575L17.2315 5.6575ZM4.39207 11.9107L4.29712 19.1644C4.28627 19.9932 4.94944 20.6651 5.77836 20.6651H19.7867C20.6156 20.6651 21.2964 19.9932 21.3072 19.1644L21.4022 11.9107L4.39207 11.9107Z" />
                    </svg>

                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Calendar
                    </span>
                  </a>
                </li>

                <li>
                  <a href='/' className="sidebarnav  group relative flex justify-center rounded  py-1.5 text-indigo-600 hover:bg-gray-50 hover:text-gray-700 ">

                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.78533 5.19L9.34312 3.97097C9.8391 2.88703 10.9233 2.18848 12.1095 2.18848H14.2115C15.3978 2.18848 16.4637 2.88703 16.9313 3.97097L17.4571 5.19H20.1254C21.7832 5.19 23.1096 6.53383 23.0879 8.19153L22.9438 19.1971C22.9221 20.8548 21.5606 22.1986 19.9027 22.1986H5.89442C4.23658 22.1986 2.91023 20.8548 2.93193 19.1971L3.076 8.19153C3.0977 6.53383 4.45924 5.19 6.11708 5.19H8.78533ZM12.0899 3.68924L14.1919 3.68924C14.785 3.68924 15.3179 4.03852 15.5518 4.58048L15.8147 5.19L10.4278 5.19L10.7067 4.58048C10.9547 4.03852 11.4967 3.68924 12.0899 3.68924ZM6.09743 6.69076C5.26851 6.69076 4.58774 7.36268 4.57689 8.19153L4.43282 19.1971C4.42197 20.026 5.08515 20.6979 5.91407 20.6979H19.9224C20.7513 20.6979 21.4321 20.026 21.4429 19.1971L21.587 8.19153C21.5978 7.36268 20.9347 6.69076 20.1057 6.69076L6.09743 6.69076Z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7374 14.1945L20.0075 14.1945C21.6654 14.1945 23.0269 12.8506 23.0486 11.1929L23.0879 8.1914C23.1096 6.53371 21.7832 5.18988 20.1254 5.18988L6.11709 5.18988C4.45926 5.18988 3.09772 6.53371 3.07602 8.1914L3.03673 11.1929C3.01503 12.8506 4.34138 14.1945 5.99922 14.1945H10.2693C10.6075 14.7926 11.249 15.195 11.9897 15.195H13.9909C14.7316 15.195 15.3836 14.7926 15.7374 14.1945ZM20.1058 6.69064L6.09745 6.69064C5.26853 6.69064 4.58776 7.36256 4.57691 8.1914L4.53762 11.1929C4.52677 12.0218 5.18994 12.6937 6.01886 12.6937H10.0843C10.3177 11.8306 11.1096 11.1929 12.0421 11.1929H14.0433C14.9757 11.1929 15.7509 11.8306 15.9618 12.6937H20.0272C20.8561 12.6937 21.5369 12.0218 21.5477 11.1929L21.587 8.1914C21.5979 7.36256 20.9347 6.69064 20.1058 6.69064ZM12.0224 12.6937H14.0236C14.2999 12.6937 14.521 12.9177 14.5174 13.1939C14.5137 13.4702 14.2868 13.6942 14.0105 13.6942H12.0093C11.733 13.6942 11.512 13.4702 11.5156 13.1939C11.5192 12.9177 11.7461 12.6937 12.0224 12.6937Z" />
                    </svg>


                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Brief
                    </span>
                  </a>
                </li>

                <li>
                  <a href='/' className="sidebarnav  group relative flex justify-center rounded  py-1.5 text-indigo-600 hover:bg-gray-50 hover:text-gray-700 ">

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.2525 5.72301C16.5488 5.72301 16.8396 5.63531 17.0883 5.47096L20.0059 3.54291C20.3412 3.32128 20.7834 3.5596 20.7782 3.95915L20.6569 13.2268C20.646 14.0557 19.9653 14.7276 19.1364 14.7276H18.1358L18.1161 16.2283H19.1167C20.7746 16.2283 22.1361 14.8845 22.1578 13.2268L22.2791 3.95915C22.3 2.36095 20.5312 1.40768 19.1897 2.2942L16.2721 4.22225L9.26795 4.22225C7.61011 4.22225 6.24857 5.56608 6.22687 7.22377L6.21378 8.22428H7.71467L7.72776 7.22377C7.73861 6.39493 8.41938 5.72301 9.2483 5.72301L16.2525 5.72301Z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.1349 19.0584C6.40382 18.8455 6.736 18.7295 7.07681 18.7295H15.0816C15.9105 18.7295 16.5912 18.0576 16.6021 17.2287L16.6807 11.2257C16.6915 10.3968 16.0284 9.72491 15.1994 9.72491H5.1935C4.36458 9.72491 3.68381 10.3968 3.67296 11.2257L3.5572 20.0689C3.55171 20.4884 4.03391 20.7216 4.36491 20.4595L6.1349 19.0584ZM7.05716 20.2302H15.0619C16.7198 20.2302 18.0813 18.8864 18.103 17.2287L18.1816 11.2257C18.2033 9.56798 16.8769 8.22415 15.2191 8.22415H5.21314C3.55531 8.22415 2.19377 9.56798 2.17207 11.2257L2.05631 20.0689C2.03434 21.7468 3.96315 22.6796 5.28717 21.6314L7.05716 20.2302Z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.38517 14.2272C6.39059 13.8127 6.731 13.4767 7.14549 13.4767H13.1495C13.564 13.4767 13.8956 13.8127 13.8902 14.2272C13.8847 14.6416 13.5443 14.9776 13.1298 14.9776H7.12584C6.71135 14.9776 6.37974 14.6416 6.38517 14.2272Z" />
                    </svg>


                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Messages
                    </span>
                  </a>
                </li>

                <li>
                  <a href='/' className="sidebarnav  group relative flex justify-center rounded  py-1.5 text-indigo-600 hover:bg-gray-50 hover:text-gray-700 ">

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.3202 15.0229C18.4041 15.1563 18.5267 15.2604 18.6687 15.329C19.7542 15.8533 20.4937 16.9697 20.4768 18.2622L20.4506 20.2634C20.4452 20.6779 20.7768 21.0138 21.1913 21.0138C21.6058 21.0138 21.9462 20.6779 21.9516 20.2634L21.9778 18.2622C22.0122 15.6374 19.912 13.5095 17.2869 13.5095V13.5095C17.1781 13.5095 17.1272 13.6498 17.2086 13.721C17.6392 14.0979 18.0142 14.5364 18.3202 15.0229Z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.26163 15.0103C5.46564 15.0103 3.99064 16.4661 3.96713 18.2619L3.94094 20.2629C3.93551 20.6773 3.59513 21.0133 3.18067 21.0133C2.76621 21.0133 2.43462 20.6773 2.44005 20.2629L2.46624 18.2619C2.5006 15.6372 4.65636 13.5095 7.28127 13.5095H13.2848C15.9097 13.5095 18.0098 15.6372 17.9754 18.2619L17.9493 20.2629C17.9438 20.6773 17.6034 21.0133 17.189 21.0133C16.7745 21.0133 16.4429 20.6773 16.4484 20.2629L16.4746 18.2619C16.4981 16.4661 15.0612 15.0103 13.2652 15.0103H7.26163Z" />
                      <path d="M15.2045 9.81575C15.2957 9.64657 15.439 9.51146 15.605 9.41455C16.3499 8.97987 16.8566 8.17626 16.8686 7.25679C16.8806 6.33731 16.395 5.5337 15.6615 5.09903C15.498 5.00212 15.3583 4.867 15.2715 4.69782C15.0289 4.22513 14.7191 3.79304 14.3543 3.41409C14.2973 3.35489 14.3366 3.25446 14.4193 3.25446V3.25446C16.63 3.25446 18.3986 5.04636 18.3696 7.25679C18.3407 9.46721 16.5252 11.2591 14.3146 11.2591V11.2591C14.2318 11.2591 14.1952 11.1587 14.2537 11.0995C14.6284 10.7205 14.9496 10.2884 15.2045 9.81575Z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3323 9.75825C11.7139 9.75825 12.8486 8.63831 12.8667 7.2568C12.8848 5.87528 11.7794 4.75534 10.3978 4.75534C9.01616 4.75534 7.88146 5.87528 7.86338 7.2568C7.84529 8.63831 8.95066 9.75825 10.3323 9.75825ZM10.3127 11.2591C12.5233 11.2591 14.3388 9.46722 14.3677 7.2568C14.3966 5.04637 12.6281 3.25447 10.4174 3.25447C8.20682 3.25447 6.39131 5.04637 6.36237 7.2568C6.33344 9.46722 8.10204 11.2591 10.3127 11.2591Z" />
                    </svg>


                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Group
                    </span>
                  </a>
                </li>

                <li>
                  <a href='/' className="sidebarnav  group relative flex justify-center rounded  py-1.5 text-indigo-600 hover:bg-gray-50 hover:text-gray-700 ">

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.40313 14.543C5.98867 14.543 5.64829 14.8789 5.64287 15.2934C5.63744 15.7078 5.96903 16.0437 6.38349 16.0437H12.3871C12.8015 16.0437 13.1419 15.7078 13.1473 15.2934C13.1527 14.8789 12.8212 14.543 12.4067 14.543H6.40313Z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.53679 4.28777C3.87895 4.28777 2.51741 5.63159 2.49571 7.28929L2.36474 17.2944C2.34304 18.9521 3.66939 20.2959 5.32723 20.2959H19.3355C20.9934 20.2959 22.3549 18.9521 22.3766 17.2944L22.5076 7.28929C22.5293 5.63159 21.2029 4.28777 19.5451 4.28777L5.53679 4.28777ZM19.5255 5.78853L5.51714 5.78853C4.68822 5.78853 4.00746 6.46044 3.99661 7.28929L3.98023 8.53992L20.9903 8.53992L21.0067 7.28929C21.0176 6.46044 20.3544 5.78853 19.5255 5.78853ZM3.86563 17.2944L3.96059 10.0407L20.9707 10.0407L20.8757 17.2944C20.8649 18.1232 20.1841 18.7951 19.3552 18.7951L5.34688 18.7951C4.51796 18.7951 3.85478 18.1232 3.86563 17.2944Z" />
                    </svg>


                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Payment
                    </span>
                  </a>
                </li>

                <li>
                  <a href='/' className="sidebarnav  group relative flex justify-center rounded  py-1.5 text-indigo-600 hover:bg-gray-50 hover:text-gray-700 ">

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1534 5.97295C9.2023 6.16656 8.29044 6.54287 7.47047 7.08596C6.22557 7.91049 5.24837 9.08243 4.66242 10.4536C4.07648 11.8247 3.90811 13.3335 4.17862 14.7891C4.44913 16.2447 5.14635 17.5817 6.18213 18.6312C7.21791 19.6806 8.54572 20.3952 9.99765 20.6848C11.4496 20.9743 12.9604 20.8257 14.3391 20.2578C15.7178 19.6898 16.9024 18.728 17.7432 17.494C18.297 16.6813 18.6852 15.7744 18.8912 14.8259L15.7919 14.8259C15.6628 15.1787 15.4898 15.5165 15.2756 15.8309C14.7703 16.5726 14.0583 17.1507 13.2296 17.492C12.4009 17.8334 11.4929 17.9227 10.6202 17.7487C9.74748 17.5747 8.9494 17.1451 8.32684 16.5143C7.70428 15.8836 7.28521 15.0799 7.12262 14.205C6.96003 13.3302 7.06123 12.4233 7.41341 11.5992C7.7656 10.7751 8.35295 10.0707 9.10119 9.57507C9.41834 9.36502 9.75837 9.19647 10.1128 9.07198L10.1534 5.97295ZM10.6766 4.3761C11.2266 4.31483 11.6701 4.76852 11.6628 5.32109L11.6105 9.31522C11.6033 9.86779 11.1377 10.3002 10.613 10.4805C10.3695 10.5642 10.1361 10.6789 9.91871 10.8229C9.41944 11.1536 9.02753 11.6236 8.79254 12.1735C8.55754 12.7234 8.49002 13.3285 8.59851 13.9123C8.70699 14.496 8.98662 15.0323 9.40202 15.4531C9.81742 15.874 10.3499 16.1606 10.9322 16.2768C11.5145 16.3929 12.1205 16.3333 12.6734 16.1055C13.2263 15.8777 13.7014 15.492 14.0386 14.9971C14.1854 14.7816 14.3032 14.5497 14.3901 14.3073C14.5773 13.785 15.0157 13.3252 15.5683 13.3252L19.5628 13.3252C20.1154 13.3252 20.5633 13.7745 20.4948 14.3236C20.3168 15.7513 19.7995 17.1253 18.9802 18.3278C17.9713 19.8086 16.5498 20.9628 14.8953 21.6443C13.2409 22.3258 11.4279 22.5042 9.68558 22.1567C7.94326 21.8093 6.34989 20.9517 5.10695 19.6924C3.86402 18.433 3.02734 16.8286 2.70274 15.0819C2.37813 13.3351 2.58017 11.5246 3.2833 9.87925C3.98643 8.23388 5.15908 6.82756 6.65295 5.83813C7.86606 5.03465 9.24674 4.53539 10.6766 4.3761Z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9582 9.82387C20.8688 9.35567 20.7345 8.89655 20.5565 8.45294C20.1913 7.54247 19.6493 6.7152 18.9615 6.01835C18.2737 5.32151 17.4536 4.76874 16.548 4.39161C16.1068 4.20787 15.6494 4.06757 15.1824 3.972L15.1419 7.07125C15.2173 7.09798 15.292 7.12676 15.366 7.15757C15.9103 7.38424 16.4032 7.71648 16.8166 8.13532C17.23 8.55416 17.5558 9.0514 17.7753 9.59864C17.8052 9.67302 17.833 9.74812 17.8587 9.82387H20.9582ZM22.5487 10.3262C22.6028 10.8754 22.1432 11.3247 21.5905 11.3247H17.5958C17.0431 11.3247 16.6167 10.8648 16.4431 10.3425C16.4242 10.2854 16.4035 10.2289 16.3811 10.173C16.2346 9.80785 16.0172 9.47607 15.7414 9.1966C15.4655 8.91713 15.1366 8.69544 14.7734 8.54419C14.7178 8.52103 14.6616 8.4996 14.6048 8.4799C14.0847 8.29954 13.6305 7.86712 13.6377 7.31451L13.69 3.32009C13.6972 2.76748 14.1525 2.31376 14.701 2.37504C15.5396 2.46873 16.361 2.68035 17.1406 3.00499C18.2273 3.45754 19.2114 4.12086 20.0368 4.95708C20.8621 5.79329 21.5125 6.78602 21.9508 7.87858C22.2652 8.66232 22.466 9.48642 22.5487 10.3262Z" />
                    </svg>

                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Chart
                    </span>
                  </a>
                </li>

                <li>
                  <a href='/' className="sidebarnav  group relative flex justify-center rounded  py-1.5 text-indigo-600 hover:bg-gray-50 hover:text-gray-700 ">

                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6747 14.859C14.0564 14.859 15.1911 13.739 15.2092 12.3575C15.2272 10.976 14.1219 9.85607 12.7402 9.85607C11.3586 9.85607 10.2239 10.976 10.2058 12.3575C10.1877 13.739 11.2931 14.859 12.6747 14.859ZM16.7102 12.3575C16.6812 14.5679 14.8657 16.3598 12.6551 16.3598C10.4445 16.3598 8.67588 14.5679 8.70482 12.3575C8.73375 10.1471 10.5493 8.35519 12.7599 8.35519C14.9705 8.35519 16.7391 10.1471 16.7102 12.3575Z" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7313 3.19464L11.3283 4.3579C10.9885 5.33875 10.2619 6.03357 9.50479 6.45204C9.44024 6.48772 9.3763 6.52442 9.313 6.56212C8.56809 7.00578 7.60261 7.28051 6.59111 7.07298L5.39184 6.82693C5.18143 6.78377 4.96524 6.88043 4.85513 7.0669L4.21969 8.14302C4.10958 8.3295 4.13025 8.56395 4.27102 8.72505L5.07449 9.64464C5.74884 10.4164 5.98128 11.3837 5.95634 12.2455C5.95418 12.3201 5.95321 12.3947 5.95341 12.4692C5.95578 13.3311 5.69802 14.2983 5.00346 15.0701L4.17592 15.9897C4.03093 16.1508 4.00412 16.3853 4.10935 16.5717L4.71661 17.6478C4.82184 17.8343 5.03551 17.931 5.24704 17.8878L6.45267 17.6418C7.46962 17.4343 8.42792 17.709 9.16122 18.1527C9.22355 18.1904 9.28654 18.2271 9.35018 18.2628C10.0963 18.6813 10.8047 19.3761 11.1189 20.3569L11.4914 21.5202C11.5568 21.7245 11.7462 21.8622 11.9616 21.8622H13.2043C13.4196 21.8622 13.6126 21.7245 13.6834 21.5202L14.0864 20.3569C14.4262 19.3761 15.1528 18.6813 15.9099 18.2628C15.9745 18.2271 16.0384 18.1904 16.1017 18.1527C16.8466 17.709 17.8121 17.4343 18.8237 17.6418L20.0228 17.8878C20.2332 17.931 20.4494 17.8343 20.5595 17.6478L21.195 16.5717C21.3051 16.3853 21.2844 16.1508 21.1436 15.9897L20.3402 15.0702C19.6659 14.2984 19.4334 13.3311 19.4584 12.4693C19.4605 12.3947 19.4615 12.3201 19.4613 12.2455C19.4589 11.3836 19.7167 10.4164 20.4112 9.64458L21.2387 8.72505C21.3837 8.56395 21.4105 8.3295 21.3053 8.14302L20.698 7.06691C20.5928 6.88043 20.3791 6.78377 20.1676 6.82694L18.9619 7.07298C17.945 7.2805 16.9867 7.00577 16.2534 6.56212C16.1911 6.52442 16.1281 6.48772 16.0645 6.45204C15.3184 6.03357 14.61 5.33875 14.2958 4.3579L13.9233 3.19464C13.8578 2.99037 13.6685 2.85258 13.4531 2.85258L12.2104 2.85258C11.9951 2.85258 11.8021 2.99037 11.7313 3.19464ZM9.91065 3.88331C9.72114 4.43032 9.29929 4.86033 8.7918 5.14083C8.71287 5.18446 8.63471 5.22933 8.55734 5.27541C8.05846 5.57254 7.47535 5.71842 6.91125 5.60269L5.71198 5.35664C4.87036 5.18397 4.00559 5.57062 3.56514 6.31652L2.9297 7.39264C2.48925 8.13855 2.57195 9.07634 3.13501 9.72076L3.93848 10.6403C4.31498 11.0713 4.47261 11.6459 4.45595 12.2218C4.45334 12.3122 4.45215 12.4026 4.4524 12.493C4.45398 13.0689 4.28131 13.6435 3.89353 14.0744L3.06598 14.994C2.48605 15.6384 2.3788 16.5762 2.79972 17.3221L3.40698 18.3982C3.8279 19.1441 4.68255 19.5308 5.52869 19.3581L6.73432 19.1121C7.30146 18.9963 7.88075 19.1422 8.37186 19.4394C8.44804 19.4855 8.52505 19.5303 8.60286 19.574C9.103 19.8545 9.5136 20.2845 9.68879 20.8315L10.0613 21.9948C10.323 22.8119 11.0806 23.363 11.9419 23.363H13.1846C14.046 23.363 14.8179 22.8119 15.101 21.9948L15.504 20.8315C15.6936 20.2845 16.1154 19.8545 16.6229 19.574C16.7018 19.5303 16.78 19.4855 16.8574 19.4394C17.3563 19.1422 17.9394 18.9964 18.5035 19.1121L19.7027 19.3581C20.5443 19.5308 21.4091 19.1441 21.8495 18.3982L22.4849 17.3221C22.9254 16.5762 22.8427 15.6384 22.2796 14.994L21.4762 14.0745C21.0997 13.6436 20.9421 13.0689 20.9587 12.4931C20.9614 12.4026 20.9625 12.3121 20.9623 12.2217C20.9607 11.6459 21.1334 11.0712 21.5212 10.6403L22.3487 9.72076C22.9286 9.07634 23.0358 8.13855 22.6149 7.39264L22.0077 6.31653C21.5867 5.57062 20.7321 5.18397 19.886 5.35664L18.6803 5.60268C18.1132 5.71842 17.5339 5.57253 17.0428 5.2754C16.9666 5.22933 16.8896 5.18446 16.8118 5.14083C16.3117 4.86033 15.9011 4.43032 15.7259 3.88331L15.3533 2.72006C15.0917 1.90296 14.3341 1.35182 13.4728 1.35182L12.2301 1.35182C11.3687 1.35182 10.5967 1.90296 10.3137 2.72006L9.91065 3.88331Z" />
                    </svg>


                    <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      Settings
                    </span>
                  </a>
                </li>

              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t mt-10 border-gray-100 bg-white p-2">
          <form action="/logout">
            <button type="submit" className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700">
              <img src={Logout} alt="Hounter Logo" />
              <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                Logout
              </span>
            </button>
          </form>
        </div>
      </div>
    </ >
  );
}

export default Sidebar;