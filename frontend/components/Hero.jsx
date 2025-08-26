export default function Hero({ message }) {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center mb-6">
        Welcome to Sylva.ai
      </h1>
      <p className="text-lg text-gray-600 text-center max-w-xl mb-8">
        {message}
      </p>
      <a
        href="#get-started"
        className="px-6 py-3 bg-black text-white rounded-2xl shadow hover:bg-gray-800 transition"
      >
        Get Started
      </a>
    </section>
  );
}