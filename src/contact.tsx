
export default function Contact() {
  return (
    <div className="bg-slate-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-md mx-auto bg-slate-800 p-8 rounded-2xl border border-slate-700/50 shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-white mb-2">Get In Touch</h2>
        <p className="text-slate-400 text-sm text-center mb-8">Koi sawal hai? Hamein message karein, hum foran jawab dein ge.</p>
        
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Name Input */}
          <div className="form-control">
            <label className="label"><span className="label-text text-slate-300 font-medium">Your Name</span></label>
            <input type="text" placeholder="John Doe" className="input input-bordered bg-slate-900 text-white border-slate-700 focus:border-blue-500 focus:outline-none w-full" />
          </div>

          {/* Email Input */}
          <div className="form-control">
            <label className="label"><span className="label-text text-slate-300 font-medium">Email Address</span></label>
            <input type="email" placeholder="name@example.com" className="input input-bordered bg-slate-900 text-white border-slate-700 focus:border-blue-500 focus:outline-none w-full" />
          </div>

          {/* Message Input */}
          <div className="form-control">
            <label className="label"><span className="label-text text-slate-300 font-medium">Message</span></label>
            <textarea placeholder="Type your message here..." className="textarea textarea-bordered bg-slate-900 text-white border-slate-700 focus:border-blue-500 focus:outline-none w-full h-32 resize-none"></textarea>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full bg-blue-600 border-none hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
