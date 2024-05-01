function DeptCard({ dept }) {
  return (
    <div class="max-h-[200px] relative group overflow-hidden hover:border-brand duration-200 hover:animat e-pulse peer">
      <div class="">
        <img
          alt="Test Porject in database"
          loading="lazy"
          width="500"
          height="500"
          decoding="async"
          data-nimg="1"
          class="w-full duration-200"
          srcset=""
          src={dept.img}
        />
      </div>
      <div class="absolute bg-gradient-to-b from-transparent to-black/100 w-full h-full px-1 py-2 top-0 left-0 flex  items-start justify-end flex-col group-hover:opacity-100 group-hover:visible opacity-0 invisible duration-200 overflow-y-hidden scrollbar-none text-white">
        <h5 class="translate-y-28 group-hover:translate-y-0 duration-200 tracking-wide text-xl px-2 text-gray-200">
          {dept.title}
        </h5>
      </div>
    </div>
  );
}

export default DeptCard;
