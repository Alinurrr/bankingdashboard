import React from 'react';
import Graph from '../../assets/img/graph.png'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    }
  },
  scales: {
    x:
    {
      grid: {
        display: false,
      },
    },
    y:
    {
      ticks: {
        callback: function (value) {
          var ranges = [
            { divider: 1e6, suffix: "M" },
            { divider: 1e3, suffix: "k" },
          ];
          function formatNumber(n) {
            for (var i = 0; i < ranges.length; i++) {
              if (n >= ranges[i].divider) {
                return (
                  (n / ranges[i].divider).toString() +
                  ranges[i].suffix
                );
              }
            }
            return n;
          }
          return formatNumber(value) + "k";
        },
        stepSize: 10,
      },
    },
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },

};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''];
// const bgcolor = 'linear-gradient(89.98deg, rgba(76, 223, 232, 0.05) 2.33%, rgba(121, 71, 247, 0.05) 99.97%);'

export const data = {
  labels,
  datasets: [
    {
      label: 'Mountly Balance',
      data: labels.map(() => faker.datatype.number({ min: 10, max: 40 })),
      // borderColor: 'rgb(53, 162, 235)',
      // backgroundColor: "#7947F7",
      borderColor: "#7947F7",
      fill: true,
      borderWidth: 3,
      pointRadius: 0,
    },
  ],
};


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

      <div className="flex flex-col mt-14 w-[500px]">
        <div className="flex flex-row items-center justify-between">
          <p className='text-2xl font-bold text-[#1B2767]'>Monthly Balance</p>
          <div className='flex flex-row items-center'>
            <p className='text-base font-normal text-black mr-3'>2020</p>
            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.82826 0.72168L0.70752 0.72168L4.72205 4.22372L8.82826 0.72168Z" fill="#C4C4C4" />
            </svg>
          </div>
        </div>
        <div className='h-40 mt-9'>
          <Line options={options} data={data} />
        </div>
      </div>

      <div className="flex flex-col mt-14 w-[500px]">
        <p className='text-2xl font-bold text-[#1B2767]'>Account Summary</p>

        <div className='mt-5 flex flex-row text-[#110F48]'>
          <div className="flex flex-col shrink-0 bg-white/70 py-7 px-5 rounded-3xl w-36 h-60">
            <div className='bg-[#F6B7CE] rounded-xl w-12 h-12 flex shrink-0 items-center justify-center'>
              <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.65744 13.3868C4.02927 10.552 9.17971 4.38221 10.8069 2.3812L9.70149 10.3853L18.2196 9.38475L8.56337 20.8906L9.65564 13.887L1.65744 13.3868Z" stroke="white" stroke-width="1.00058" />
              </svg>
            </div>
            <p className='text-base mt-9'>This Week</p>
            <div className='flex flex-row items-center mt-4'>
              <h3 className='text-xl mr-2 font-medium'>$3.45k</h3>
              <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.27035 9.44029L4.37514 1.43564M4.37514 1.43564L0.826959 4.93767M4.37514 1.43564L8.33196 4.93767" stroke="#27AE60" stroke-width="1.00058" />
              </svg>

            </div>
            <span className='text-base mt-4'>+ 6.4%</span>
          </div>

          <div className="flex flex-col shrink-0 bg-white/70 py-7 px-5 mx-9 rounded-3xl w-36 h-60">
            <div className='bg-[#303778] rounded-xl w-12 h-12 flex shrink-0 items-center justify-center'>
              <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.65744 13.3868C4.02927 10.552 9.17971 4.38221 10.8069 2.3812L9.70149 10.3853L18.2196 9.38475L8.56337 20.8906L9.65564 13.887L1.65744 13.3868Z" stroke="white" stroke-width="1.00058" />
              </svg>
            </div>
            <p className='text-base mt-9'>This Month</p>
            <div className='flex flex-row items-center mt-4'>
              <h3 className='text-xl mr-2 font-medium'>$12.9k</h3>
              <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7829 7.38621C15.9772 7.78642 13.4061 10.5545 12.2213 11.8885L1.35229 1.38316M1.35229 1.38316L1.25406 8.88697M1.35229 1.38316L8.85675 1.38316" stroke="white" stroke-width="1.00058" />
              </svg>

            </div>
            <span className='text-base mt-4'>- 3.1%</span>
          </div>

          <div className="flex flex-col shrink-0 bg-white/70 py-7 px-5 rounded-3xl w-36 h-60">
            <div className='bg-[#fdbc64] rounded-xl w-12 h-12 flex shrink-0 items-center justify-center'>
              <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5275 0.380707C5.45863 0.380707 0.456364 5.31792 0.376925 11.3863C0.297486 17.4547 5.17049 22.3919 11.2394 22.3919C17.3083 22.3919 22.3105 17.4547 22.39 11.3863C22.4694 5.31792 17.5964 0.380707 11.5275 0.380707ZM11.2574 21.0162C5.94693 21.0162 1.68324 16.6963 1.75275 11.3863C1.82226 6.07628 6.19905 1.75641 11.5095 1.75641C16.82 1.75641 21.0837 6.07628 21.0142 11.3863C20.9447 16.6963 16.5679 21.0162 11.2574 21.0162Z" fill="white" />
                <path d="M12.1611 4.50775H10.7852L10.6914 11.6716L14.964 16.0005L15.9496 15.0278L12.0748 11.1019L12.1611 4.50775Z" fill="white" />
              </svg>
            </div>
            <p className='text-base mt-9'>Upcoming</p>
            <div className='flex flex-row items-center mt-4'>
              <h3 className='text-xl mr-2 font-medium'>$14.4k</h3>
              <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.27035 9.44029L4.37514 1.43564M4.37514 1.43564L0.826959 4.93767M4.37514 1.43564L8.33196 4.93767" stroke="#27AE60" stroke-width="1.00058" />
              </svg>

            </div>
            <span className='text-base mt-4'>+ 10.3%</span>
          </div>
        </div>

      </div>

    </>
  );
}

export default RightPage;