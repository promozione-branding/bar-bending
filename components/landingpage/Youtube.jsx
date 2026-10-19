"use client";

import { FaYoutube } from "react-icons/fa";


export default function YoutubeSection() {
  const videos = [
    {
      id: "1",
      title: "Bar Bending Machine",
      videoId: "Oh8Y-LRhUr4",
    },
    {
      id: "2",
      title: "Anti Smog Gun",
      videoId: "BV_WKSBmzVM",
    },
    {
      id: "3",
      title: "Mixer Lift & Bar Cutting Machine",
      videoId: "pPYL4xDxVR0",
    },
    {
      id: "4",
      title: "Monkey Hoist Lift",
      videoId: "WutWHT9HkrI",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-5">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">
        Our YouTube Videos
      </h2>

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group overflow-hidden rounded-xl bg-white shadow-lg"
          >
            {/* 9:16 Vertical Video */}
            <div className="relative w-full aspect-[9/10] overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&loop=1&playlist=${video.videoId}&controls=0&rel=0&modestbranding=1&iv_load_policy=3`}
                title={video.title}
                className="absolute inset-0 w-full h-full pointer-events-none"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

            {/* Title */}
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-2">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}