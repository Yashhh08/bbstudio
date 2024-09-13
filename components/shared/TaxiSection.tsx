import Image from "next/image";
import React from "react";
import taxi from "@/public/assets/images/bb-taxi.png";
import city from "@/public/assets/images/city.png";
import road from "@/public/assets/images/road.png";
import station from "@/public/assets/images/station.png";

const TaxiSection = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative w-full h-[100vh]">
        <div className="max-sm:w-[100vw] w-[50vw] absolute left-0 max-sm:top-[15%] max-xl:top-[25%] top-[5%]">
          <Image
            src={city}
            alt="city"
            className="object-cove max-sm:scale-150 max-xl:scale-[2.2] scale-[1.1]"
          />
        </div>

        <div className="max-sm:w-[100vw] w-[50vw] absolute left-[40%] max-sm:top-[15%] max-xl:top-[20%] top-[5%]">
          <Image
            src={station}
            alt="station"
            className="object-cover max-sm:scale-150 max-xl:scale-[2.2] scale-[1.1]"
          />
        </div>

        <div className="w-[120vw] absolute max-sm:top-[45%] top-[57%] -left-5">
          <Image
            src={road}
            alt="road"
            className="max-sm:scale-125 max-2xl:opacity-0 opacity-100"
          />
        </div>

        <div className="absolute bottom-[20%] lg:bottom-[15%] xl:bottom-[20%]">
        {/* max-sm:top-[58%] max-xl:top-[64%] top-[60%] */}
          <Image
            src={taxi}
            alt="taxi"
            width={400}
            height={200}
            className="max-sm:scale-[0.8] max-lg:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default TaxiSection;
