import _ from "lodash";
import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";
import { CELSIUS } from "../utils/global_constants"

function average(data, units) {
  let roundedData =  _.round(_.sum(data) / data.length)
  return units === CELSIUS ? roundedData - 273 : roundedData;
}

export default props => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data, props.units)} {props.units}</div>
    </div>
  );
};
