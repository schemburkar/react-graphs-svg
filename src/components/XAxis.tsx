import { AxisProps } from "../types/AxisProps";
import { applyMargins, text } from "../helpers/helpers";

export const XAxis = ({ items, chart, axis: { size: [sx], margins } }: AxisProps) => {

    const { x1, x2, y1, y2 } = applyMargins(chart, margins);
    const interval = (sx) / (items.length - 1);

    const { margin: [mx, my], startOffset: [ox, oy] } = margins;
    return <>
        <line className="stroke-black dark:stroke-white chart-axis x-axis axis-line" y1={y1} y2={y1} x1={x1} x2={x2} />
        {items.map((i, index) => {

            const x = x1 + (index * interval) + ox;
            return <g key={index}>
                <text className="fill-black text-black dark:fill-white dark:text-white  text-[0.2rem] chart-axis x-axis axis-text " x={x - 1} y={chart.y1 - my / 2}>{text(i)}</text>
                <line className="stroke-black dark:stroke-white chart-axis x-axis axis-marker" key={index} y1={y1 - 1} y2={y1 + 1} x1={x} x2={x} />
            </g>;
        }
        )}
    </>;
};
