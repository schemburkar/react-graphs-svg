import { AxisParameters, ChartProps } from "../types/ChartProps";
import { value } from "./helpers";

export const getAxisParameters = (chart: ChartProps): AxisParameters => {

    const { axis: [xaxis, yaxis], data, margins, size: [x2, y1] } = chart;

    const { margin: [marginx, marginy], startOffset: [ox, oy] } = margins;

    const sx = x2 - marginx - marginx - ox;
    const sy = y1 - marginy - marginy - oy;

    const minx = Math.min(...xaxis.map(x => value(x)));
    const miny = Math.min(...yaxis.map(x => value(x)));

    const maxx = Math.max(...xaxis.map(x => value(x)));
    const maxy = Math.max(...yaxis.map(x => value(x)));

    const axisParams: AxisParameters = { min: [minx, miny], max: [maxx, maxy], size: [sx, sy], margins };

    return axisParams;
};
