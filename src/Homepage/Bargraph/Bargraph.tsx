import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
 
const data = [
  { year: '2021', revenue: 25000, growth: 10.0 },
  { year: '2022', revenue: 35000, growth: 15.0 },
  { year: '2023', revenue: 42000, growth: 20.0 },
  { year: '2024', revenue: 48000, growth: 14.3 },
  { year: '2025', revenue: 55000, growth: 14.6 },
];
 
const CustomTooltip = ({ active, payload, coordinate }: any) => {
  if (active && payload && payload.length) {
    const { growth } = payload[0].payload;
    const tooltipStyle: React.CSSProperties = {
      position: 'absolute',
      top: coordinate.y - 40,
      left: coordinate.x + 10,
      transform: 'translateX(-50%)',
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'center',
      pointerEvents: 'none',
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    };
 
    return <div style={tooltipStyle}>{growth}%</div>;
  }
  return null;
};
 
const RechartsBarGraph: React.FC = () => {
  return (
    <div className="container py-5" data-aos="fade-up" data-aos-delay="100">
      <h3 className="text-center mb-5 text-success" data-aos="fade-in">
        Company Revenue Overview (2021–2025)
      </h3>
 
      <div className="row g-5 align-items-start">
        {/* LEFT SIDE: Text Summary */}
        <div className="col-md-6 d-flex" data-aos="fade-right">
          <div className="px-md-2 w-100 d-flex flex-column justify-content-start">
            <h5 className="fw-bold mb-3" style={{ color: '#ff7f00' }}>Consistent Growth Year Over Year</h5>
            <ul className="text-secondary lh-lg" style={{ textAlign: 'justify', paddingLeft: '0' }}>
              {/* <li><strong>2021:</strong> Company crossed ₹250Cr, driven by product expansion and early client acquisition.</li> */}
              <li><strong>2022:</strong> ₹350Cr revenue with a 15% growth, marking entry into new verticals.</li>
              <li><strong>2023:</strong> Reached ₹420Cr with 20% growth—our highest to date, thanks to automation and data analytics.</li>
              <li><strong>2024:</strong> Stabilized at ₹480Cr, focusing on customer retention and global partnerships.</li>
              <li><strong>2025:</strong> Projected ₹550Cr with 14.6% growth, powered by machine learning and ESG compliance tools.</li>
            </ul>
          </div>
        </div>
 
        {/* RIGHT SIDE: Bar Chart */}
        <div className="col-md-6 d-flex flex-column justify-content-start" data-aos="fade-left">
          <ResponsiveContainer width="100%" height={380}>
            <BarChart
              data={data}
              barCategoryGap="20%"
              margin={{ top: 40, right: 30, left: 30, bottom: 40 }}
            >
              <CartesianGrid stroke="#ccc" strokeDasharray="0" horizontal vertical={false} />
              <XAxis dataKey="year" axisLine={false} tickLine={false} />
              <YAxis
                tickLine={false}
                axisLine
                allowDecimals={false}
                tickFormatter={(value: number) => `${value.toLocaleString()}`}
                label={{
                  value: 'Rupees (Crores)',
                  angle: -90,
                  position: 'left',
                  offset: 50,
                  style: {
                    textAnchor: 'middle',
                    fontSize: '14px',
                    fill: '#555',
                  },
                }}
              />
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Bar
                dataKey="revenue"
                fill="#059652"
                radius={[6, 6, 0, 0]}
                barSize={40}
                style={{ cursor: 'pointer' }}
              />
            </BarChart>
          </ResponsiveContainer>
 
          <div className="text-center mt-4">
            <span
              className="d-inline-block"
              style={{
                backgroundColor: '#059652',
                width: '16px',
                height: '16px',
                marginRight: '8px',
                borderRadius: '2px',
              }}
            ></span>
            Revenue
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default RechartsBarGraph;
//  import React from "react";
// import ReactApexChart from "react-apexcharts";

// const ApexChart = () => {
//   const revenueData = [20000, 30000, 40000, 50000, 60000];

//   const series = [
//     {
//       name: "Revenue",
//       type: "column",
//       data: revenueData,
//     },
//     {
//       name: "Growth Line",
//       type: "line",
//       data: revenueData, // Orange line tracks top of each bar
//     },
//   ];

//   const options = {
//     chart: {
//       height: 400,
//       type: "line",
//       toolbar: { show: false },
//     },
//     title: {
//       text: "Company Revenue & Growth Line (2021–2025)",
//       align: "left",
//     },
//     stroke: {
//       width: [0, 3],
//       curve: "smooth",
//     },
//     colors: ["#059652", "#ff7f00"], // Green bar, orange line
//     plotOptions: {
//       bar: {
//         columnWidth: "35%", // 👈 Thinner bars
//         borderRadius: 4,
//       },
//     },
//     xaxis: {
//       categories: ["2021", "2022", "2023", "2024", "2025"],
//       title: { text: "Year" },
//     },
//     yaxis: [
//       {
//         title: { text: "Revenue (₹ Crores)" },
//         min: 0,
//         max: 70000,
//         labels: {
//           formatter: (val: number) => `${val / 100}Cr`,
//         },
//       },
//     ],
//     dataLabels: {
//       enabled: false,
//     },
//     markers: {
//       size: [0, 6],
//       strokeWidth: 2,
//       strokeColors: "#ff7f00",
//       fillColors: "#ff7f00",
//     },
//     tooltip: {
//       shared: true,
//       intersect: false,
//       y: [
//         {
//           formatter: (val: number) => `₹${val.toLocaleString()}`,
//         },
//         {
//           formatter: (val: number) => `₹${val.toLocaleString()}`,
//         },
//       ],
//     },
//     legend: {
//       position: "top",
//       horizontalAlign: "center",
//     },
//   };

//   return (
//     <div className="container py-5">
//       <h3 className="text-center mb-4 text-success">Company Performance Overview</h3>
//       <div className="row g-4 align-items-start">
//         {/* LEFT: TEXT CONTENT */}
//         <div className="col-md-6">
//           <h5 className="fw-bold mb-3" style={{ color: "#ff7f00" }}>
//             Consistent Growth Year Over Year
//           </h5>
//           <ul className="text-secondary lh-lg" style={{ textAlign: "justify", paddingLeft: 0 }}>
//             <li><strong>2021:</strong> ₹200Cr - Early investments and pilot clients fueled foundational success.</li>
//             <li><strong>2022:</strong> ₹300Cr - Scaling operations and strategic outreach expanded our reach.</li>
//             <li><strong>2023:</strong> ₹400Cr - Automation and market expansion accelerated growth.</li>
//             <li><strong>2024:</strong> ₹500Cr - Strong retention and global partnerships drove results.</li>
//             <li><strong>2025:</strong> ₹600Cr - Leadership in innovation and ESG impact sealed the year.</li>
//           </ul>
//         </div>

//         {/* RIGHT: CHART */}
//         <div className="col-md-6">
//           <ReactApexChart options={options} series={series} type="line" height={400} />
//           <div className="text-center mt-3">
//             <span style={{
//               backgroundColor: "#059652",
//               width: "16px",
//               height: "16px",
//               display: "inline-block",
//               marginRight: "8px",
//               borderRadius: "2px",
//             }}></span>
//             Revenue &nbsp;&nbsp;
//             <span style={{
//               backgroundColor: "#ff7f00",
//               width: "16px",
//               height: "16px",
//               display: "inline-block",
//               marginRight: "8px",
//               borderRadius: "2px",
//             }}></span>
//             Growth Line (top of bar)
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApexChart;
