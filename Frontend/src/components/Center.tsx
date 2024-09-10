const Center = () => {
  return (
    <div className="sm:w-[60%] w-full">
      {/* Main Content */}
      <h2 className="font-bold text-lg mb-4">Main Feed</h2>
      <div className="grid grid-cols-1 gap-4">
        {/* Example Post 1 */}
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="https://source.unsplash.com/random/800x600"
            alt="Post 1"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Beautiful Landscape</h3>
            <p>Amazing view from the mountains.</p>
          </div>
        </div>

        {/* Example Post 2 */}
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="https://source.unsplash.com/random/801x601"
            alt="Post 2"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">City Lights</h3>
            <p>The city at night with all its glory.</p>
          </div>
        </div>

        {/* Example Post 3 */}
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="https://source.unsplash.com/random/802x602"
            alt="Post 3"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Ocean Breeze</h3>
            <p>Relaxing day at the beach.</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="https://source.unsplash.com/random/802x602"
            alt="Post 3"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Ocean Breeze</h3>
            <p>Relaxing day at the beach.</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <img
            src="https://source.unsplash.com/random/802x602"
            alt="Post 3"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold">Ocean Breeze</h3>
            <p>Relaxing day at the beach.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
