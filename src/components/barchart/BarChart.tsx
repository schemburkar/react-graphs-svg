import { ChartProps } from "../../types";
import { BarPlot } from "./BarPlot";
import { XAxis, YAxis } from "../shared";
import { getAxisParameters, getChartCoordinates } from "../../helpers";

export const BarChart = (props: ChartProps) => {

    const { className, children, axis, data, size } = props;
    const [xaxis, yaxis] = axis;
    const chart = getChartCoordinates(props);
    const axisParams = getAxisParameters(props)
    const { x1, y2, x2, y1 } = chart;

    return <>
        <svg viewBox={`0 0 ${x2} ${y1}`} className={`bar-chart ${className || ''}`} xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={0.2}>
            <path className="fill-white dark:fill-black line-chart chart-area" d={`M ${x1} ${y2} H ${x2} V ${y1} H ${x1} Z`} stroke="none" />
            <YAxis items={yaxis} chart={chart} axis={axisParams} />
            <XAxis items={xaxis} chart={chart} axis={axisParams} />

            <BarPlot data={data} axis={axisParams} chart={chart} />
            {children}
        </svg>
    </>

}

