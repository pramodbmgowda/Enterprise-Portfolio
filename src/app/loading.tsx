export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
        {/* UPDATED LOADING TEXT */}
        <p className="text-emerald-800 font-bold animate-pulse">Loading Kalabhairaveshvara Enterprises...</p>
      </div>
    </div>
  );
}