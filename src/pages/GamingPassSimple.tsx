export default function GamingPassSimple() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-400">
          Xbox Gaming Pass — Тестовая страница работает!
        </h1>
        <p className="text-xl mb-8">
          Часто пишут Xbox Gaming Pass — это то же самое, что Xbox Game Pass.
        </p>
        <p className="text-lg text-gray-400">
          Если вы видите эту страницу, значит роутинг работает корректно.
        </p>
        <div className="mt-8">
          <a 
            href="/" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
}