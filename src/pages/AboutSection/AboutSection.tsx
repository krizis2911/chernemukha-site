import AvitoReviewGallery from "./components/AvitoReviewGallery";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#fefcf8] px-6 py-16 text-gray-800 text-lg leading-relaxed"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          className="mb-6 font-bold text-4xl text-center"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          О нас
        </h2>

        <p className="mb-4">
          Представьте: тёплый аромат дерева, потрескивание дров, густой пар, обволакивающий тело и мысли.  
          Это не просто баня — это место, где отдых начинается с души.
        </p>

        <p className="mb-4">
          <strong>Банный дом «Черёмуха»</strong> — это уголок уюта и покоя в нескольких минутах от городской суеты.
          У нас вы сможете по-настоящему расслабиться: попариться с душистым веником, выпить горячий чай из самовара и поговорить по душам.
        </p>

        <p className="mb-4">
          Всё сделано с душой: деревянная отделка, мягкий свет, чистота и тепло.
          Мы создаём атмосферу, куда хочется возвращаться снова и снова — с друзьями, с семьёй или просто наедине с собой.
        </p>

        <p>
          Заходите — топим уже!  
          А бронировать лучше заранее 😉
        </p>
               <h2
          className="mt-10 font-bold text-4xl text-center"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
      Отзывы:
        </h2>
        <AvitoReviewGallery />
      </div>
    </section>
  );
};
