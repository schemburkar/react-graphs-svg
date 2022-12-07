import { ChartComponentClassName, ChartCoordinates, ChartProps } from "../types/ChartProps";
import { LinePlot } from "./LinePlot";
import { XAxis } from "./XAxis";
import { YAxis } from "./YAxis";
import { getAxisParameters } from "../helpers/getAxisParameters";
// import { defaultClassNames } from "./defaultClassNames";

export const LineChart = (props: ChartProps) => {

    const { className, children, axis, data, size } = props;
    const [xaxis, yaxis] = axis;
    const [x1, y2, x2, y1] = [0, 0, ...size]
    const chart: ChartCoordinates = { x1, y2, x2, y1 }
    const axisParams = getAxisParameters(props)

    return <>
        <svg viewBox={`0 0 ${x2} ${y1}`} className={`line-chart ${className}`} xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={0.2}>
            <path className="fill-white dark:fill-black line-chart chart-area" d={`M ${x1} ${y2} H ${x2} V ${y1} H ${x1} Z`} stroke="none" />
            <YAxis items={yaxis} chart={chart} axis={axisParams} />
            <XAxis items={xaxis} chart={chart} axis={axisParams} />

            <LinePlot data={data} axis={axisParams} chart={chart} />
            {children}
        </svg>
    </>

}


