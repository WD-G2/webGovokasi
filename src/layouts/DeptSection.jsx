import DeptCard from "../components/DeptCard";
import generalImg from "../assets/general.jpg";
import businessImg from "../assets/business.jpg";
import creativeImg from "../assets/creative.jpg";
import techImg from "../assets/tech.jpg";
import fnbImg from "../assets/fnb.jpg";
import moreImg from "../assets/more.jpg";

function DeptSection() {
  const depts = [
    { title: "General", img: generalImg },
    { title: "Business", img: businessImg },
    { title: "Creative", img: creativeImg },
    { title: "Tech", img: techImg },
    { title: "F&B", img: fnbImg },
    { title: "and More...", img: moreImg },
  ];

  return (
    <>
      <h1 className="mt-4 text-center text-4xl p-3 bg-[#1a1d40] text-white w-full">
        Departments
      </h1>
      <section className="mx-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-7xl mx-auto my-10">
        {depts.map((item) => {
          return <DeptCard dept={item} />;
        })}
      </div>
      </section>
    </>
  );
}

export default DeptSection;
