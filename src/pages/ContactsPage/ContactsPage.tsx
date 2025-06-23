export const ContactsPage = () => {
  return (
    <section className="bg-[#fefcf8] px-6 py-16 text-gray-800 text-lg leading-relaxed">
      <div className="mx-auto max-w-4xl">
        {/* ── Заголовок ───────────────────────────────── */}
        <h2
          className="mb-6 font-bold text-4xl text-center"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Контакты
        </h2>

        {/* ── Основная информация ───────────────────── */}
        <div className="space-y-4 text-center">
          <p>
            📍 <strong>Адрес:</strong> СНТ «Черёмуха» д.&nbsp;70&nbsp;(15 минут
            от центра)
          </p>

          <p>
            📞 <strong>Телефон:</strong>{' '}
            <a
              href="tel:+79050487219"
              className="text-blue-700 hover:underline"
            >
              +7&nbsp;(905)&nbsp;048-72-19
            </a>
          </p>

          <p>
            💬 <strong>WhatsApp:</strong>{' '}
            <a
              href="https://wa.me/79050487219"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline"
            >
              Написать в WhatsApp
            </a>
          </p>
          <p>
            ⏰ <strong>Режим работы:</strong> баня&nbsp;—&nbsp;24/7,{' '}
            <br className="sm:hidden" />
            📞 звонки и&nbsp;WhatsApp&nbsp;— с&nbsp;09:00&nbsp;до&nbsp;22:00
          </p>

          {/* ── Карта + как добраться ────────────────── */}
          <div className="mt-8">
            <div className="relative shadow-md rounded-lg overflow-hidden">
              <iframe
                title="Карта проезда"
                src="https://yandex.ru/map-widget/v1/?ll=41.496354%2C52.759613&mode=whatshere&whatshere[point]=41.496354%2C52.759613&whatshere[zoom]=17&z=17"
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>

            <p className="mt-6">
              <p className="mt-6">
                🚗 <strong>Как добраться:</strong>
                <br />
                Всего&nbsp;8 км от центра Тамбова. Едете
                по&nbsp;Рассказовскому&nbsp;шоссе, после Кривого&nbsp;моста —
                налево, и ещё&nbsp;≈ 5 км по Старой Тулиновской дороге. Вся
                дорога асфальтирована, покрытие ровное.
                <br />
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
