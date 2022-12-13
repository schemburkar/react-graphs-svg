import { AxisParameters, ChartCoordinates } from ".";
import { Data } from "../../types";

export type AxisProps = {
    items: Data[];
    chart: ChartCoordinates;
    axis: AxisParameters;
};
