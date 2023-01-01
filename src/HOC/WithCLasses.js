import React from "react";
import { Component } from "react";

export function WithCLasses(Component) {
  return function Wrapper(props) {
    return (
      <div className={props.classes}>
        <Component {...props} />
      </div>
    )
  }
}