import storyHeroin from "../../assets/heroins.png"

const OurStorySection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 pl-6 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-[54px] font-inter font-semibold">Our Story</h2>
        <p className="font-poppins">
          Launched in 2015, Exclusive is South Asia’s premier online shopping
          marketplace with an active presence in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,000 sellers and 300 brands and serves 3 million customers across
          the region.
        </p>
        <p className="font-poppins">
          Exclusive has more than 1 million products to offer, growing at a very
          fast. Exclusive offers a diverse assortment in categories ranging from
          consumer...
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 h-[609px] mt-6 md:mt-0">
        <img
          src={storyHeroin}
          alt="Two women shopping"
          className="rounded-sm object-cover"
        />
      </div>
    </section>
  );
};

export default OurStorySection;
