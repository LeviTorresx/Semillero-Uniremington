export default function VisionMission() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        
        <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">Visión</h3>
          <p className="text-gray-700 leading-relaxed">
            Ser un referente nacional en investigación académica y tecnológica, reconocido 
            por la calidad, impacto y pertinencia de sus proyectos.
          </p>
        </div>
        
        <div className="bg-red-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-bold text-red-800 mb-3">Misión</h3>
          <p className="text-gray-700 leading-relaxed">
            Formar investigadores integrales que desarrollen soluciones innovadoras a 
            problemáticas reales, contribuyendo al avance del conocimiento y al bienestar social.
          </p>
        </div>
      </div>
    </section>
  );
}
