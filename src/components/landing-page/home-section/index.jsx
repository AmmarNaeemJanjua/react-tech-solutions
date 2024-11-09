import React from "react";
import Button from "@/components/common/Button";

const index = () => {
  return (
    <section className="flex h-full items-center justify-center px-5 text-white sm:px-12 md:px-20 lg:px-14 xl:px-44 2xl:px-[11.4%]">
      <div>
        <h1 className="mb-6 text-4xl font-bold">Empowering Businesses with Innovative Solutions</h1>
        <p className="mb-7 text-xl">Unlock Your Potential with Tech Solutions</p>
        <Button
          text={"Learn More"}
          className={
            "rounded-full bg-white px-6 py-2 text-lg font-semibold text-primary hover:bg-primary hover:text-white"
          }
        />
      </div>
    </section>
  );
};

export default index;
