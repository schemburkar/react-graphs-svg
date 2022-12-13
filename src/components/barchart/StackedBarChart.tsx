import { XAxis, YAxis } from "../shared";
import { getAxisParameters, getChartCoordinates } from "../../helpers";
import { StackedBarPlot } from "./StackedBarPlot";
import { Legend } from "./Legend";
import { StackedBarChartProps } from "../../types/StackedBarChartProps";


export const StackedBarChart = (props: StackedBarChartProps) => {

    const { className, children, axis, data, size, seriesNames } = props;
    const [xaxis, yaxis] = axis;
    const chart = getChartCoordinates(props);
    const axisParams = getAxisParameters(props);
    const { x1, y2, x2, y1 } = chart;

    return <>
        <svg viewBox={`0 0 ${x2} ${y1}`} className={`bar-chart stacked-bar-chart ${className || ''}`} xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={0.2}>
            <path className="fill-white dark:fill-black line-chart chart-area" d={`M ${x1} ${y2} H ${x2} V ${y1} H ${x1} Z`} stroke="none" />
            <YAxis items={yaxis} chart={chart} axis={axisParams} />
            <XAxis items={xaxis} chart={chart} axis={axisParams} />


            <StackedBarPlot data={data} axis={axisParams} chart={chart} />

            {seriesNames && <Legend seriesNames={seriesNames} chart={chart} axis={axisParams} />}
            {children}
        </svg>
    </>;

};


