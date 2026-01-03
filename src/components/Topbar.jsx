export default function Topbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="font-semibold">View Appointment</h2>

      <div className="flex items-center gap-4">
        <span className="text-sm">Ella Jones</span>
        <img
          src="https://i.pravatar.cc/40"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
