export default function AddressesSkeleton() {
  return (
    <div className="flex w-96 gap-4 bg-slate-900 p-4 rounded-md">
      <div className="skeleton h-16 w-full bg-slate-800"></div>
      <div className="flex flex-col justify-between items-end">
        <div className="space-y-1">
          <div className="skeleton h-4 w-20 bg-slate-800"></div>
          <div className="skeleton h-4 w-16 bg-slate-800 float-right"></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="skeleton h-6 w-8 bg-slate-800"></div>
          <div className="skeleton h-6 w-8 bg-slate-800"></div>
        </div>
      </div>
    </div>
  );
}
