export default function Cards() {
  // Courses ka data array jo cards mein display hoga
  const courses = [
    { 
      id: 1, 
      title: "React.js Mastery", 
      desc: "Components, Hooks, Context API aur State Management seekhein bilkul scratch se.", 
      badge: "Popular" 
    },
    { 
      id: 2, 
      title: "Tailwind CSS v4", 
      desc: "Modern styling, premium layouts aur advanced responsive classes par grip banayein.", 
      badge: "New" 
    },
    { 
      id: 3, 
      title: "JavaScript Pro", 
      desc: "Arrays, Objects, Async/Await aur Core Logic Concepts ko asani se pakka karein.", 
      badge: "Basic" 
    }
  ];

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold text-white mb-10 text-center tracking-wide uppercase text-sm text-blue-500">
        Our Featured Courses
      </h2>
      
      {/* Cards ka Flexible Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="card bg-slate-800 text-white shadow-xl border border-slate-700/50 hover:scale-105 transition-transform duration-300 rounded-2xl"
          >
            <div className="card-body p-6">
              {/* Card Title aur Badge */}
              <h2 className="card-title text-lg font-semibold flex justify-between items-center">
                {course.title}
                <div className="badge badge-secondary badge-sm text-xs font-bold px-2 py-1">
                  {course.badge}
                </div>
              </h2>
              
              {/* Card Description */}
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                {course.desc}
              </p>
              
              {/* Card Action Button */}
              <div className="card-actions justify-end mt-6">
                <button className="btn btn-sm btn-outline btn-info rounded-lg px-4 hover:bg-info hover:text-slate-900 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}