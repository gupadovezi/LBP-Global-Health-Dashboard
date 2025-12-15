import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Cell 
} from 'recharts';
import { KPIS, RISK_FACTORS, BURDEN_DATA, WHO_LEADING_CAUSES, BRAZIL_LEADING_CAUSES } from '../constants';
import { AlertCircle, ArrowUpRight, Activity, MapPin } from 'lucide-react';

const OverviewView: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPIS.map((kpi, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 transition-all hover:shadow-md">
            <div className="flex justify-between items-start mb-2">
              <span className="text-slate-500 text-sm font-medium">{kpi.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-bold ${kpi.color}`}>{kpi.trend}</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mt-1">{kpi.value}</h3>
            <p className="text-xs text-slate-400 mt-2">{kpi.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Global Disability Trends (1990-2015)</h3>
              <p className="text-sm text-slate-500">Disability-Adjusted Life Years (DALYs) by Age Group</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              <ArrowUpRight size={16} />
              <span className="font-semibold">Major increase in working age</span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={BURDEN_DATA} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="ageGroup" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} tickFormatter={(value) => `${(value/1000000).toFixed(1)}M`} />
                <Tooltip 
                  cursor={{fill: '#f1f5f9'}}
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Legend />
                <Bar dataKey="daly1990" name="1990 DALYs" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="daly2015" name="2015 DALYs" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Factors Radar */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Biopsychosocial Model</h3>
          <p className="text-sm text-slate-500 mb-4">Relative contribution of risk factors</p>
          <div className="h-64 flex items-center justify-center">
             <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={RISK_FACTORS}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 11 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Impact"
                    dataKey="A"
                    stroke="#2563eb"
                    strokeWidth={2}
                    fill="#3b82f6"
                    fillOpacity={0.5}
                  />
                  <Tooltip />
                </RadarChart>
             </ResponsiveContainer>
          </div>
          <div className="bg-amber-50 p-3 rounded-lg border border-amber-100 mt-4">
             <div className="flex gap-2 items-start">
               <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={16} />
               <p className="text-xs text-amber-800">
                 LBP is not just physical. Psychological and social factors are major drivers of disability persistence.
               </p>
             </div>
          </div>
        </div>
      </div>

      {/* Comparison Section: Global vs Brazil */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Global Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex flex-col mb-4">
            <div className="flex items-center gap-2 mb-1">
               <h3 className="text-lg font-bold text-slate-800">Leading Causes (Global)</h3>
               <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded font-medium">WHO Global Estimates</span>
            </div>
            <p className="text-xs text-slate-500">Comparison of LBP against major fatal conditions (Millions of DALYs).</p>
          </div>
          
          <div className="h-80">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart
                   layout="vertical"
                   data={WHO_LEADING_CAUSES}
                   margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                   <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                   <XAxis type="number" hide />
                   <YAxis 
                      dataKey="cause" 
                      type="category" 
                      width={130} 
                      tick={{fontSize: 11, fill: '#475569', fontWeight: 500}} 
                   />
                   <Tooltip 
                      cursor={{fill: '#f8fafc'}}
                      contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                      formatter={(value: number) => [`${value} Million`, 'DALYs']}
                   />
                   <Bar dataKey="dalys" barSize={20} radius={[0, 4, 4, 0]}>
                      {WHO_LEADING_CAUSES.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.highlight ? '#ec4899' : '#94a3b8'} />
                      ))}
                   </Bar>
                </BarChart>
             </ResponsiveContainer>
          </div>
        </div>

        {/* Brazil Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex flex-col mb-4">
            <div className="flex items-center gap-2 mb-1">
               <h3 className="text-lg font-bold text-slate-800">Leading Causes (Brazil)</h3>
               <div className="flex items-center gap-1 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded font-medium">
                  <MapPin size={10} />
                  <span>2021 Data</span>
               </div>
            </div>
            <p className="text-xs text-slate-500">DALYs per 100,000 population. Note high impact of Violence & Road Injury.</p>
          </div>
          
          <div className="h-80">
             <ResponsiveContainer width="100%" height="100%">
                <BarChart
                   layout="vertical"
                   data={BRAZIL_LEADING_CAUSES}
                   margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                >
                   <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                   <XAxis type="number" hide />
                   <YAxis 
                      dataKey="cause" 
                      type="category" 
                      width={130} 
                      tick={{fontSize: 11, fill: '#475569', fontWeight: 500}} 
                   />
                   <Tooltip 
                      cursor={{fill: '#f8fafc'}}
                      contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                      formatter={(value: number) => [`${value}`, 'DALYs / 100k']}
                   />
                   <Bar dataKey="dalys" barSize={20} radius={[0, 4, 4, 0]}>
                      {BRAZIL_LEADING_CAUSES.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.highlight ? '#ec4899' : '#334155'} />
                      ))}
                   </Bar>
                </BarChart>
             </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OverviewView;