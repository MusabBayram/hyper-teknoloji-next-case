export default function Footer() {
  return (
    <footer className="bg-[#1f2937] text-white ">
      <div className="bg-[#374151] text-white py-6 px-4 w-full mb-20">
        <div className="w-full text-center pb-6">
          <div className="text-sm uppercase tracking-wider mb-1">Takip Et</div>
          <h2 className="text-xl font-bold mb-4">
            En İyi Tekliflere Şimdi Ulaş!
          </h2>
          <div className="flex justify-center space-x-8 mt-4">
            <a
              href="https://www.instagram.com/hyperteknoloji.official/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/icons/instagram.png"
                alt="Instagram"
                className="h-8 w-8"
              />
            </a>
            <a
              href="https://www.youtube.com/@hyperteknoloji"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <img src="/icons/youtube.png" alt="YouTube" className="h- w-9" />
            </a>
            <a
              href="https://discord.gg/hyperteknoloji"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <img src="/icons/discord.png" alt="Discord" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-2 items-center">
            <img src="/logo.webp" alt="Logo" className="h-8 mb-4" />
            <img src="/etbis.webp" alt="ETBIS" className="h-16 my-4" />
          </div>
          <p className="text-gray-300">
            Türkiye’nin En Büyük Oyuncu Pazarı: Sevdiğiniz oyunlar için epin,
            goldbar, ve item'ları en uygun fiyatlarla satın alın veya
            hesaplarınızı güvenle satışa çıkartın.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Kurumsal</h3>
          <ul className="text-gray-400 space-y-1">
            <li>Hakkımızda</li>
            <li>Çözüm Merkezi</li>
            <li>Bayilik Başvurusu</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Sözleşmeler</h3>
          <ul className="text-gray-400 space-y-1">
            <li>Gizlilik Politikası</li>
            <li>Kullanıcı Sözleşmesi</li>
            <li>Satış Sözleşmesi</li>
            <li>İptal & İade Koşulları</li>
            <li>KVKK</li>
            <li>Çerez Politikası</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Popüler İlanlar</h3>
          <ul className="text-gray-400 space-y-1">
            <li>PUBG Random Hesap Satın Al</li>
            <li>MLBB Hesap Satın Al</li>
            <li>Steam Random Key Satın Al</li>
            <li>Roblox Hesap Satın Al</li>
            <li>Discord Nitro Satın Al</li>
            <li>Instagram Takipçi Satın Al</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Çok Satanlar</h3>
          <ul className="text-gray-400 space-y-1">
            <li>LoL RP Satın Al</li>
            <li>PUBG UC Satın Al</li>
            <li>Valorant VP Satın Al</li>
            <li>MLBB Elmas Satın Al</li>
            <li>Roblox Robux Satın Al</li>
            <li>Brawl Stars Elmas Satın Al</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Bize Ulaşın</h3>
          <ul className="text-gray-400 space-y-1">
            <li>+90 850 304 12 27</li>
            <li>
              Serbest Liman ve Bölge Posta Kutusu No: 1449 - KKTC / Gazimağusa
            </li>
            <li>bilgi@hyperteknoloji.com</li>
            <li>Penta Game Yazılım ve Bilişim Teknolojileri LTD.</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10">
        <h4 className="text-sm text-gray-400 mb-2 mt-10 mb-6">
          Ödeme Yöntemleri
        </h4>
        <div className="overflow-hidden mt-4 flex justify-center">
          <div className="min-w-[50%] inline-block animate-scroll space-x-8">
            <img
              src="/payment/visa.svg"
              alt="Visa"
              className="h-6 inline-block"
            />
            <img
              src="/payment/mastercard.svg"
              alt="Mastercard"
              className="h-6 inline-block"
            />
            <img
              src="/payment/troy.png"
              alt="Troy"
              className="h-6 inline-block"
            />
            <img
              src="/payment/papara.jpg"
              alt="Papara"
              className="h-6 inline-block"
            />
            <img
              src="/payment/ininal.png"
              alt="Ininal"
              className="h-6 inline-block"
            />
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-10">
        &copy; {new Date().getFullYear()} Hyper Teknoloji. Tüm hakları saklıdır.
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(50%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </footer>
  );
}
