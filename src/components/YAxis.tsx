import { AxisProps } from "../types/AxisProps";
import { applyMargins, text } from "../helpers/helpers";

export const YAxis = ({ items, chart, axis: { size: [_, sy], margins } }: AxisProps) => {
    const { x1, x2, y1, y2 } = applyMargins(chart, margins);
    const interval = (sy) / (items.length - 1);
    const { margin: [mx, my], startOffset: [ox, oy] } = margins;

    return <>
        <line className="stroke-black dark:stroke-white chart-axis y-axis axis-line" x1={x1} x2={x1} y1={y1} y2={y2} />
        {items.map((i, index) => {
            const y = y1 - ((index) * interval) - oy;
            return <g key={index}>
                <text className="fill-black text-black dark:fill-white dark:text-white text-[0.2rem] chart-axis y-axis axis-text" x={chart.x1} y={y + 1}>{text(i)}</text>
                <line className="stroke-black dark:stroke-white chart-axis y-axis axis-marker" key={index} x1={x1 - 1} x2={x1 + 1} y1={y} y2={y} />
            </g>;
        })}
    </>;
};
