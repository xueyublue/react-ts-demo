import React from "react";
import Greet from "./../basics/Greet";

// Extract props from existing component which we might not have control to export its type
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>CustomComponent</div>;
};
