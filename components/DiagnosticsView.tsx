import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ComposedChart, Line
} from 'recharts';
import { IMAGING_DATA } from '../constants';
import { AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react';

const DiagnosticsView: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Warning */}
      <div className="bg-gradient-to-r from-rose-50 to-white border-l-4 border-rose-500 p-6 rounded-r-xl shadow-sm">
        <h2 className="text-xl font-bold text-rose-800 mb-2">The Imaging Paradox: Unnecessary Diagnostics</h2>
        <p className="text-rose-700 max-w-4xl">
          Clinical guidelines consistently recommend <strong>against</strong> routine imaging (X-ray, MRI) for low back pain. 
          Specific pathological causes (fracture, infection, cancer) account for less than 1% of cases. 
          Imaging often reveals incidental findings that do not correlate with pain, leading to "over-diagnosis" and unnecessary treatments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Imaging Prevalance Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Prevalence in Asymptomatic Individuals</h3>
          <p className="text-sm text-slate-500 mb-6">Percentage of <strong>pain-free 50-year-olds</strong> with MRI findings</p>
          
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={IMAGING_DATA}
                margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                <XAxis type="number" unit="%" domain={[0, 100]} tick={{fontSize: 12, fill: '#64748b'}} />
                <YAxis type="category" dataKey="finding" width={110} tick={{fontSize: 12, fill: '#1e293b', fontWeight: 500}} />
                <Tooltip 
                   cursor={{fill: '#f8fafc'}}
                   contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Legend />
                <Bar dataKey="asymptomatic" name="Asymptomatic (No Pain)" fill="#22c55e" radius={[0, 4, 4, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex gap-2 items-start text-xs text-slate-400 bg-slate-50 p-3 rounded">
            <Info size={14} className="mt-0.5 shrink-0" />
            <p>
              <strong>Data Source:</strong> <em>Brinjikji et al. (2015)</em>. Systematic Literature Review of Imaging Features of Spinal Degeneration in Asymptomatic Populations. 
              These findings are part of normal aging, like grey hair or wrinkles.
            </p>
          </div>
        </div>

        {/* Odds Ratio Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <h3 className="text-lg font-bold text-slate-800 mb-2">Association Strength (Odds Ratio)</h3>
           <p className="text-sm text-slate-500 mb-6">Likelihood of finding being associated with pain (OR > 1 indicates association)</p>
           <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                layout="vertical"
                data={IMAGING_DATA}
                margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} stroke="#e2e8f0" />
                <XAxis type="number" domain={[0, 5]} tick={{fontSize: 12, fill: '#64748b'}} label={{ value: 'Odds Ratio', position: 'insideBottom', offset: -5 }} />
                <YAxis type="category" dataKey="finding" width={110} tick={{fontSize: 12, fill: '#1e293b', fontWeight: 500}} />
                <Tooltip 
                   cursor={{fill: '#f8fafc'}}
                   contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                />
                <Bar dataKey="oddsRatio" name="Odds Ratio" fill="#3b82f6" barSize={15} radius={[0, 4, 4, 0]}>
                </Bar>
                <Line dataKey="oddsRatio" type="monotone" stroke="#2563eb" strokeWidth={2} dot={{r: 4, fill: '#1e40af'}} />
              </ComposedChart>
            </ResponsiveContainer>
           </div>
           <div className="bg-blue-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-blue-900 text-sm mb-2">Interpretation</h4>
              <ul className="text-xs text-blue-800 space-y-1 list-disc pl-4">
                <li><strong>Disc Bulge (OR 1.8):</strong> Extremely common in healthy individuals (60%).</li>
                <li><strong>Disc Degeneration (OR 1.2):</strong> Nearly ubiquitous at age 50 (80%). The association with pain is negligible.</li>
                <li><strong>Key Takeaway:</strong> The presence of these findings on MRI does not reliably identify the cause of pain.</li>
              </ul>
           </div>
        </div>
      </div>

      {/* Red Flags Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4">The "Red Flag" Problem</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="text-center p-4 bg-slate-50 rounded-lg">
             <div className="mx-auto w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-rose-600 mb-3">
               <AlertTriangle size={24} />
             </div>
             <h4 className="font-bold text-2xl text-slate-800">80%</h4>
             <p className="text-sm text-slate-500 mt-1">Patients with at least one "Red Flag"</p>
           </div>
           <div className="text-center p-4 bg-slate-50 rounded-lg">
             <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-3">
               <CheckCircle size={24} />
             </div>
             <h4 className="font-bold text-2xl text-slate-800">&lt; 1%</h4>
             <p className="text-sm text-slate-500 mt-1">Patients with serious pathology</p>
           </div>
           <div className="text-center p-4 bg-slate-50 rounded-lg">
             <div className="mx-auto w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 mb-3">
               <XCircle size={24} />
             </div>
             <h4 className="font-bold text-2xl text-slate-800">Low Specificity</h4>
             <p className="text-sm text-slate-500 mt-1">Leads to high rates of false positives and anxiety</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticsView;