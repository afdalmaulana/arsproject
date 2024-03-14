import { useEffect, useState } from "react";
import { carouselBanners } from "../constant";

export const Home = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Mengubah indeks ke banner berikutnya
      setCurrentBannerIndex((prevIndex) =>
        prevIndex === carouselBanners.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Mengganti setiap 4 detik

    // Membersihkan interval saat komponen unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
      <div>
        {carouselBanners.map((banner, index) => (
          <div
            className="bg-cover bg-no-repeat w-full h-[45rem] brightness-50"
            key={banner.id}
            style={{
              backgroundImage: `url(${banner.img})`,
              display: index === currentBannerIndex ? "block" : "none", // Menampilkan hanya gambar yang sesuai dengan indeks saat ini
            }}
          >
            <h1>{banner.title}</h1>
          </div>
        ))}
      </div>
      <div className="absolute mt-[-30rem] w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white text-5xl">
            Jangkauan Global, Sentuhan Lokal
          </div>
          <div className="text-white mt-[2rem]">
            Jaringan Luas, Pelayanan Dekat - Distribusi Oli dan Sparepart ke
            Seluruh Indonesia
          </div>
        </div>
      </div>
      <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 mt-[10rem] text-black text-4xl w-[50%]">
        <div className="flex text-white w-full">
          <div className="flex text-3xl border-2 w-[50px] h-[50px] rounded-full backdrop-blur-sm items-center justify-center">
            01
          </div>
          <div className="h-0.5 w-10 bg-gray-300 backdrop-blur-sm"></div>
          <div className="flex text-3xl border-2 w-[50px] h-[50px] rounded-full backdrop-blur-sm items-center justify-center">
            02
          </div>
          <div className="flex text-3xl border-2 w-[50px] h-[50px] rounded-full backdrop-blur-sm items-center justify-center">
            03
          </div>
        </div>
      </div>
    </div>
  );
};
