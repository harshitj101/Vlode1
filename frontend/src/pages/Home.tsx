import Container from "../components/Container";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lightBeige to-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        <Container />
      </main>

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Subtle geometric patterns */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-darkGray/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-gray-300/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-darkGray/3 rounded-full blur-lg"></div>
      </div>
    </div>
  );
};

export default Home;
