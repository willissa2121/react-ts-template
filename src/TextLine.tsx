import React from "react";

// An interface, used to defined the props that the below functional component can accept
export interface ITextLineProps {
  line: string;
  color: string;
  number: number;
  isDank: boolean;
}

// Another React functional component. This one takes props!
// Components can accept any numbers of props from a parent element, it is what makes React dynamic and easy.
// Now that this component is defined with these props, it will be very strict
// And object matching the names and types must be passed in, and nothing else, to render this component
const TestLine: React.FC<ITextLineProps> = (props) => {
  // Object destructuring
  const { line, color, number, isDank } = props;
  return (
    <div className="App">
      {/* By using brackets, I can use a JS variable in HTML! look below */}
      <p style={{ color: color }}>{line}</p>

      {/* Object names can map to variable names, so the above p can also be  */}
      <p style={{ color }}>{line}</p>

      <p style={{ color }}>{number}</p>

      <p style={{ color }}>{isDank.toString()}</p>
    </div>
  );
};

export default TestLine;
