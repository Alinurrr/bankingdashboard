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

    </>
  );
}

export default RightPage;