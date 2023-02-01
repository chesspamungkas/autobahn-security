import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie } from "recharts";

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 }
// ];

const data = [
  {
    name: "issue a",
    score: 4000,
  },
  {
    name: "issue b",
    score: 3000,
  },
  {
    name: "issue c",
    score: 2000,
  },
  {
    name: "issue d",
    score: 2780,
  }
];

function Issues() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      {/* <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#8884d8" label />
        </PieChart>
      </ResponsiveContainer> */}
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} style={{ fontSize:24, fontWeight: 'bold' }} />
          <Tooltip cursor={{fill: 'transparent'}} />
          <Bar dataKey="score" stackId="a" fill="#4361ee" width={10}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Issues;
