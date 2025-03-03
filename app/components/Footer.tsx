
export default function Footer (){
    return <footer className="bg-white text-gray-600 py-6 border-t">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Baran Çiçek. Tüm hakları saklıdır.</p>
      <nav className="mt-3 flex justify-center space-x-6">
        <a href="https://barancicek.space" className="hover:text-gray-900">Portfolio</a>
      </nav>
    </div>
  </footer>
}
