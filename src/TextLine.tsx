import React from "react";

/** An interface, used to defined the props that the below functional component can accept */
export interface ITextLineProps {
  line: string;
  color: string;
  number: number;
  isHidden: boolean;
}

/** Another React functional component. This one takes props!
 * Components can accept any numbers of props from a parent element, it is what makes React dynamic and easy.
 * Now that this component is defined with these props, it will be very strict
 * And object matching the names and types must be passed in, and nothing else, to render this component */
const TestLine: React.FC<ITextLineProps> = (props) => {
  /** Object destructuring, same as line = props.line */
  const { line, color, number, isHidden } = props;

  /**React components can only return one element. All HTML must be wrapped in a parent element
   * Common elements are <div> and <Fragment>
   */
  return (
    <div
      className="App"
      style={{
        width: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      {/* By using brackets, I can use a JS variable in HTML! look below */}
      <p style={{ color: color }}>{line}</p>

      {/* Object names can map to variable names, so the above p can also be  */}
      <p style={{ color }}>{line}</p>

      <p style={{ color }}>{number}</p>

      {/* This is an example of conditional rendering
          We will check that the value of the isHidden prop is true
          If it is true, we set a style, if it is false we hide it.
          If isHidden=true, no additonal style is applied
          If isHidden=false, the display is set to none, and the field will not show */}
      <p style={{ color, display: isHidden ? "" : "none" }}>
        {isHidden.toString()}
      </p>
    </div>
  );
};

export default TestLine;
