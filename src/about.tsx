export default function About() {
  return (
    <div className="bg-slate-900 text-white min-h-screen py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-6">About DevBatch</h1>
        <p className="text-lg text-slate-300 leading-relaxed mb-12">
          DevBatch ek aesa platform hai jahan students ko modern programming skills bilkul scratch se seekhai jati hain. Hamara maqsad sirf code sikhana nahi, balki aap ko market ka in-demand developer banana hai.
        </p>

        {/* Features/Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700/50 shadow-xl">
            <h3 className="text-2xl font-bold text-white">100% Practical</h3>
            <p className="text-slate-400 text-sm mt-2">Har class ke sath real-world assignments aur live projects.</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700/50 shadow-xl">
            <h3 className="text-2xl font-bold text-white">Expert Mentors</h3>
            <p className="text-slate-400 text-sm mt-2">Industry ke professional developers se seedha seekhein.</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700/50 shadow-xl">
            <h3 className="text-2xl font-bold text-white">Fiverr/Upwork Guide</h3>
            <p className="text-slate-400 text-sm mt-2">Skills seekhne ke baad freelancing par order lene ka roadmap.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
