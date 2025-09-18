import React from "react";
import { data } from "../../utils/data";
import Feature from "./Feature";

const Features = ({ col, st, end }) => {
  const gridCols = {
    // 1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    // 4: "md:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[col]} gap-6 mb-8`}>
      {data.slice(st, end).map((oneFeature) => (
        <Feature
          key={oneFeature.id}
          title={oneFeature.title}
          description={oneFeature.description}
        />
      ))}
    </div>
  );
};


export default Features;
