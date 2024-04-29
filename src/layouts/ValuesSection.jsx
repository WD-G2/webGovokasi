import ValueCard from "../components/ValueCard";

function ValuesSection() {
  const values = [{bold: "Prime", title: " In Contribution", description: "Our interns are coached to focus on contribution before compensation."}, {bold: "Rich", title: " In Competencies", description: "Building skills and competencies, to be able to manage bigger challenges."}, {bold: "Open", title: " For Collaboration", description: "Intergenerational collaboration to handle complex tasks."}];

  return (
    <>
    <h1 className="mt-4 text-center text-4xl p-3 bg-[#1a1d40] text-white w-full">
      Our Values
    </h1>
    <section className="mx-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-7xl mx-auto my-10">
      {values.map((item) => {
        return <ValueCard value={item} />;
      })}
    </div>
    </section>
  </>
  )
}

export default ValuesSection;