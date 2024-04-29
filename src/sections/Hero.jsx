import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constant.index";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10"
    >
      <div className="flex xl:w-2/5 flex-col relative justify-center items-start w-full max-xl:padding-x pt-18">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[72px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoe
        </h1>
        <p className="text-lg font-montserrat mt-8 mb-14 text-slate-gray leading-8 sm:max-w-sm">
          Discover stylish Nike Arrival, quality comforts, and innovation for
          your active Life
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start flex-wrap w-full items-start mt-20 gap-16 ">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-6">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
