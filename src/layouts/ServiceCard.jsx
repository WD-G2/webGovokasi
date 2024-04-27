import Journey from "../components/Journey";

function ServiceCard({ service }) {
  return (
    <>
      <div className="mb-5 flex min-h-screen items-center justify-center bg-[#1a1d40]">
        <div className="relative flex w-full max-w-[48rem] flex-row bg-clip-border text-white shadow-md">
          <div className="relative m-0 w-2/5 shrink-0 overflow-hidden bg-clip-border text-white">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-gray-300 antialiased">
              {service === "Talent" ? "Talent" : "Partner"}
            </h6>
            <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {service === "Talent" ? "Talent Criteria and Journey" : "Partner Program"}
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, quidem? Cum exercitationem excepturi id quos ea voluptate impedit vero tenetur.
            </p>
            {service === "Talent" ? <Journey /> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
