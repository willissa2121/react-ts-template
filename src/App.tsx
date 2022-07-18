import React, { Fragment } from "react";
import "./App.css";
import TextLine, { ITextLineProps } from "./TextLine";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { api } from "./api/api";

/**  A functional component, using beautiful es6 arrow function syntax
 * It is strictly typed as React.FC, which means a fucntional component
 * That means we can expect this to return a block of HTML
 * Beneath this and commented out is the default method, I left so you can see what es5 non strictly typed code looks like */

const arrayOfProps: ITextLineProps[] = [
  { line: "line-1", color: "green", isHidden: false, number: 50 },
  { line: "line-2", color: "red", isHidden: true, number: 60 },
  { line: "line-3", color: "blue", isHidden: false, number: 70 },
];

const singleObjectProp: ITextLineProps = {
  line: "line4",
  color: "purple",
  isHidden: true,
  number: 8000,
};

const App: React.FC = () => {
  /** Declare this in each component that you want to access state in. This creates a context here.*/
  const queryClient = useQueryClient();

  /** This is your initial state get. You will use this to initially fetch data from your API and setup a cache line named 'cache-line'*/

  const { isLoading, data, isSuccess } = useQuery(
    "cache-line",
    () => api.get("<some-route-here>"),
    {
      refetchOnWindowFocus: false,
    }
  );

  /**A sample mutation, this is using a post route. It will accept an object to pass as the body parameter (this one is an empty object) */
  const mutation = useMutation(
    (data: {}) => api.post("<some-route-here", data),
    {
      onSuccess: () => {
        /** This will invalidte the cache called 'cache line', so the origianl cache setter (the queryMethod on line 30), will run a refetch
         * This will keep your cache up to date after a succesful or failed post call. */
        queryClient.invalidateQueries("cache-line");
      },
      onError: () => {},
      onMutate: () => {},
      onSettled: () => {},
    }
  );

  const onClick = () => {
    /** Invoking the post request, which will reset cache line once completed */
    mutation.mutate({});
  };
  return (
    <div className="App">
      {/* A fully rendered component with all the props, as defined in the interface, passed in with the correct typed */}
      <TextLine
        color={"red"}
        line={"this is a line"}
        isHidden={true}
        number={250}
      />
      <br />

      {/* BUT WE CAN DO IT DYNAMICALLY TOO! Check out the power of JSX. Javascript interpolated with HTML
       * This is the equivalent to a for loop, each "item" is the current iteration
       * I would Highly recommend reading all ES6 array method helpers
       * We can only return one element, and since we want to render the texline and the br
       * We have to wrap both in a Fragment, and return the single Fragment element instead
       */}
      {arrayOfProps.map((item) => {
        return (
          <Fragment>
            <TextLine
              color={item.color}
              line={item.line}
              isHidden={item.isHidden}
              number={item.number}
            />
            <br />
          </Fragment>
        );
      })}
      {/* Looks like default elements have built in methods, I wonder what else... */}
      <button
        onClick={() => {
          onClick();
        }}
      >
        {"Click Me"}
      </button>
    </div>
  );
};

export default App;
