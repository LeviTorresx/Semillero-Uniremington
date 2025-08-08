export default function Objectives() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
          Objetivos
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Objetivo General
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Promover la cultura investigativa mediante la formación,
              acompañamiento y desarrollo de proyectos que contribuyan a la
              generación de conocimiento y soluciones innovadoras.
            </p>
          </div>
          <div className="bg-red-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Objetivos Específicos
            </h3>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
              <li>
                Fomentar la participación de estudiantes en proyectos de
                investigación.
              </li>
              <li>Fortalecer habilidades técnicas y metodológicas.</li>
              <li>Generar redes de colaboración interinstitucional.</li>
              <li>Difundir resultados en espacios académicos y científicos.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
