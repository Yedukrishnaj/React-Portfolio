import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section py-12" id="mySkills">
      {/* Section Break Line */}
      <div className="section-break mb-8"></div>

      <div className="portfolio--container text-center">
        <h2 className="skills--section--heading text-4xl font-semibold mb-6">My Expertise</h2>
      </div>

      <div className="skills--section--container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className="skills--section--card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all flex flex-col h-full"
          >
            <div className="skills--section--img p-4 flex-shrink-0">
              <img
                src={item.src}
                alt={item.title}
                className="w-full object-cover rounded-t-lg"
              />
            </div>
            <div className="skills--section--card--content p-4 flex-grow flex flex-col justify-between">
              <h3 className="skills--section--title text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
              <p className="skills--section--description text-gray-600 text-sm sm:text-base flex-grow">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Section Break Line */}
      <div className="section-break"></div>
    </section>
  );
}
