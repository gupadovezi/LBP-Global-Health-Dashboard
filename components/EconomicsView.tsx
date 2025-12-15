import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { COST_DATA } from '../constants';
import { Wallet, TrendingUp, Building2 } from 'lucide-react';

const EconomicsView: React.FC = () => {
  
  // Prepare data for Pie Chart (Average proportions)
  const averageDirect = COST_DATA.reduce((acc, curr) => acc + curr.directCost, 0) / COST_DATA.length;
  const averageIndirect = COST_DATA.reduce((acc, curr) => acc + curr.indirectCost, 0) / COST_DATA.length;
  
  const PIE_DATA = [
    { name: 'Indirect Costs (Productivity/Wages)', value: averageIndirect, color: '#f59e0b' },
    { name: 'Direct Medical Costs', value: averageDirect, color: '#3b82f6' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex justify-between items-start">
             <div>
               <p className="text-blue-100 font-medium text-sm">Economic Impact</p>
               <h3 className="text-2xl font-bold mt-1">High Cost</h3>
             </div>
             <Wallet className="opacity-80" />
          </div>
          <p className="text-sm text-blue-100 mt-4 opacity-90">
            Comparable to Cancer, Cardiovascular Disease, and Mental Health.
          </p>
        </div>

        <div className="bg-emerald-600 p-6 rounded-xl shadow-lg text-white">
          <div className="flex justify-between items-start">
             <div>
               <p className="text-emerald-100 font-medium text-sm">Work Disability</p>
               <h3 className="text-2xl font-bold mt-1">#1 Cause</h3>
             </div>
             <Building2 className="opacity-80" />
          </div>
          <p className="text-sm text-emerald-100 mt-4 opacity-90">
            Leading cause of occupational disability and absenteeism globally.
          </p>
        </div>

        <div className="bg-indigo-600 p-6 rounded-xl shadow-lg text-white">
           <div className="flex justify-between items-start">
             <div>
               <p className="text-indigo-100 font-medium text-sm">Cost Driver</p>
               <h3 className="text-2xl font-bold mt-1">Chronic Cases</h3>
             </div>
             <TrendingUp className="opacity-80" />
           </div>
          <p className="text-sm text-indigo-100 mt-4 opacity-90">
            Small % of severe chronic cases account for majority of costs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cost per person by country */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Cost Per Person (2015 USD)</h3>
          <p className="text-sm text-slate-500 mb-6">Comparison of Direct vs. Indirect costs by country</p>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={COST_DATA}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="country" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#64748b', fontSize: 11}} 
                  dy={10} 
                  interval={0}
                />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} prefix="$" />
                <Tooltip 
                   cursor={{fill: '#f1f5f9'}}
                   formatter={(value: number) => [`$${value}`, '']}
                   contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Legend />
                <Bar dataKey="directCost" name="Direct Medical" stackId="a" fill="#3b82f6" />
                <Bar dataKey="indirectCost" name="Indirect (Productivity)" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Breakdown Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center">
           <h3 className="text-lg font-bold text-slate-800 mb-2 self-start">Cost Structure Analysis</h3>
           <p className="text-sm text-slate-500 mb-4 self-start">The hidden burden of productivity loss</p>
           
           <div className="h-64 w-full relative">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={PIE_DATA}
                   cx="50%"
                   cy="50%"
                   innerRadius={60}
                   outerRadius={80}
                   paddingAngle={5}
                   dataKey="value"
                 >
                   {PIE_DATA.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                 </Pie>
                 <Tooltip />
                 <Legend verticalAlign="bottom" height={36} />
               </PieChart>
             </ResponsiveContainer>
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-3xl font-bold text-slate-700">80%</span>
                <p className="text-xs text-slate-500">Indirect</p>
             </div>
           </div>
           
           <div className="bg-slate-50 p-4 rounded-lg w-full mt-4 border border-slate-100">
             <h4 className="font-semibold text-slate-700 text-sm">Key Takeaway</h4>
             <p className="text-xs text-slate-500 mt-1">
               In most countries, the cost of work absenteeism and productivity loss dwarfs the cost of medical treatment. 
               However, in the USA, medical costs are significantly higher due to more intensive interventions (surgery/injections).
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default EconomicsView;