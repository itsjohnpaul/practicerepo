import React from "react";
import Loading from "./Loading";

function withLoading(Component) {
  return function LoadingComponent(props) {
    if (props.isLoading) {
      return <Loading/>;
    }
    return <Component {...props} />;
  };
}

export default withLoading;
