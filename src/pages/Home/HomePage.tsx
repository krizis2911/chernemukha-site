import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      {/* Hero-секция */}
      <section
        className="relative flex justify-center items-center bg-cover bg-center w-full h-[90vh] text-white"
        style={{ backgroundImage: 'url("/camin.jpg")' }}
      >
        {/* затемнение */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* контент */}
        <div className="z-10 relative px-4 max-w-2xl text-center">
          <h1 className="mb-4 font-bold text-5xl md:text-6xl">
            Банный дом «Черёмуха»
          </h1>
          <p className="mb-6 text-2xl md:text-3xl">
            Отдохни с душой в настоящей русской парной
          </p>
          <Link
            to="/calendar"
            className="group inline-block bg-white hover:bg-gray-100 shadow hover:shadow-md px-6 py-3 rounded-xl hover:scale-105 transition-all duration-200"
          >
            <span className="relative font-semibold text-gray-900">
              <span className="z-10 relative">Посмотреть свободные даты</span>
              <span className="-bottom-1 left-0 absolute bg-gray-800 rounded-full w-0 group-hover:w-full h-0.5 transition-all duration-300"></span>
            </span>
          </Link>
        </div>
      </section>
      <section className="bg-[#fdf6ec] px-6 py-20 text-gray-800 text-center">
        <h2 className="mb-8 font-bold text-4xl md:text-5xl">
          Настоящий отдых с душой
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-xl md:text-2xl leading-relaxed">
          Забудьте про суету. В нашей бане вы найдёте тепло живого огня, аромат
          дерева и спокойствие, которое так редко встретишь в городе. Вас ждёт
          уют, чистота и атмосфера, в которую хочется возвращаться.
        </p>

        <div className="gap-10 grid md:grid-cols-3 mx-auto max-w-5xl text-left">
          <div>
            <h3 className="mb-2 font-semibold text-2xl">🔥 Пар на дровах</h3>
            <p>Настоящая русская баня с горячим паром и веничками</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-2xl">🪵 Атмосфера уюта</h3>
            <p>Интерьер из натурального дерева, мягкий свет и тишина</p>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-2xl">
              🧖‍♀️ Простор и комфорт
            </h3>
            <p>Чистая парная, душ, зона отдыха и чайная комната</p>
          </div>
        </div>

        <Link
          to="/calendar"
          className="inline-block bg-[#e6ccb2] hover:bg-[#dec0a1] mt-12 px-8 py-4 rounded-md font-semibold text-gray-900 text-lg transition"
        >
          Хочу забронировать
        </Link>
      </section>
    </>
  );
};
