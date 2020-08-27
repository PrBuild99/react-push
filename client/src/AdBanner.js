import React from "react";
import { Bling as GPT } from "react-gpt";

GPT.enableSingleRequest();

export default class AdBanner extends React.Component {
  render() {
    return <GPT adUnitPath="/4595/nfl.test.open" slotSize={[728, 90]} />;
  }
}
