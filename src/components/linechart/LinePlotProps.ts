import { AxisParameters, ChartCoordinates } from "../shared";
import { XY, Data } from "../../types";

export type LinePlotProps = {
    axis: AxisParameters;
    data: XY<Data>[];
    chart: ChartCoordinates;
};
