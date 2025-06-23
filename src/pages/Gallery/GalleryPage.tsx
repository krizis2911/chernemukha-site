import SeasonGallery from "./components/SeasonGallery";

export const GalleryPage = () => {
  return (
    <section className="bg-white px-6 py-16 text-gray-800">
      <div className="mx-auto max-w-6xl">
        <h2
          className="mb-10 font-bold text-4xl text-center"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Фотографии
        </h2>

        <SeasonGallery />
      </div>
    </section>
  );
};
