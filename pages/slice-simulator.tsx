import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import { components } from "../slices/index";

import state from "../.slicemachine/libraries-state.json";
// import { SliceZone } from "@prismicio/react";
// import {
//   SliceSimulator,
//   SliceSimulatorProps,
// } from "@prismicio/slice-simulator-react";

const SliceSimulatorPage = () => {
  return (
    <SliceSimulator
      sliceZone={({ slices }) => (
        <SliceZone slices={slices} components={components} />
      )}
      state={state}
    />
  );
};

export default SliceSimulatorPage;
