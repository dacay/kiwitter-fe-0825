import { Link } from "react-router-dom";

export default function PageLayout({ children }) {
  return (
    <div className="relative">
      <div className="sticky top-0 bg-white shadow-md">
        <header className="container mx-auto p-6 text-primary flex flex-row justify-between items-center">
          <Link to="/"><h1 className="text-2xl font-bold">kiwitter</h1></Link>
          <nav className="font-bold text-sm flex flex-row gap-4">
            <Link to="/login">Giriş Yap</Link>
            <Link to="/signup">Kayıt Ol</Link>
          </nav>
        </header>
      </div>
      <div className="pt-6 pb-12">
        <main className="container mx-auto bg-white min-h-96 rounded-xl shadow-xl p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
