import Link from "next/link";
import MotivationSlider from "../../components/home/MotivationSlicer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MotivationSlider />
      <div className="w-full flex justify-center">
        <Link href="/research-lines" passHref>
          <span className="mt-8 inline-block bg-blue-900 text-white font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300 text-center">
            Conoce nuestras líneas de investigación
          </span>
        </Link>
      </div>
    </div>
  );
}
