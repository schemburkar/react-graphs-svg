import { valueof, textof,applyMargins } from "../../helpers";
import { BarPlotProps } from "./BarPlotProps";

export const BarPlot = ({ data, axis, chart }: BarPlotProps) => {

    const { min: [minx, miny], max: [maxx, maxy], size: [sx, sy], margins: { margin: [mx, my], startOffset: [ox, oy] } } = axis;

    const { x1, x2, y1, y2 } = applyMargins(chart, axis.margins);

    const points = data.map((i, index) => {

        const [x, y] = valueof(i);
        const [textx, texty] = textof(i);

        const _cx = (x - minx) * (sx) / (maxx - minx) + ox;
        const _cy = (y - miny) * (sy) / (maxy - miny) + oy;

        const cx = _cx + mx;
        const cy = y1 - _cy;
        return { cx, cy, textx, texty };
    });

    return <>


        {points.map(({ cx, cy }, index) => {
            return <rect key={index} className={`fill-slate-400 stroke-none bar-chart chart-plot bar-column`} x={cx - 1} y={cy} width={2} height={y1 - cy - oy} />

        })}
        {points.map(({ cx, cy }, index) => {
            return <rect key={index} className={`fill-slate-400 stroke-none bar-chart chart-plot plot-marker`} x={cx - 1} y={cy} height={0.5} width={2} />
        })}

        {points.map(({ cx, cy, textx, texty }, index) => {
            return <g className={`bar-chart chart-plot plot-group group`} key={index}>
                <circle className="fill-transparent stroke-none" cx={cx} cy={cy} r={2} />
                <g>
                    <rect className="hidden group-hover:block fill-slate-300 dark:fill-gray-800 bar-chart chart-plot plot-tooltip" x={cx + 1} y={cy - 2} width={15} height={10} />
                    <text className="hidden group-hover:block text-[0.2rem] fill-black text-black dark:fill-white dark:text-white bar-chart chart-plot  plot-text plot-x-text" x={cx + 2} y={cy + 2}>{textx}</text>
                    <text className="hidden group-hover:block text-[0.2rem] fill-black text-black dark:fill-white dark:text-white bar-chart chart-plot  plot-text plot-y-text" x={cx + 2} y={cy + 6}>{texty}</text>
                </g>
            </g>

        })}

    </>;
};

