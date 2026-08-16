export default function ProfileCard() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      
      <h2 className="text-xl font-bold text-gray-900">
        Ahmad Khan
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Frontend Developer
      </p>

      <p className="mt-4 text-gray-600">
        Building modern web applications using Next.js and Tailwind CSS.
      </p>

      <button className="mt-6 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
        View Profile
      </button>

    </div>
  );
}