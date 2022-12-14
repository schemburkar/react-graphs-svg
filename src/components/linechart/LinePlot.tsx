import { valueof, textof, applyMargins } from "../../helpers";
import { LinePlotProps } from "./LinePlotProps";

export const LinePlot = ({ data, axis, chart }: LinePlotProps) => {

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

    const pointsPath = points.map(p => `${p.cx},${p.cy}`).join(' ');
    return <>
        <polyline points={pointsPath} className={"fill-none stroke-black dark:stroke-white line-chart chart-plot chart-polyline"} strokeLinejoin="round" />
        {points.map(({ cx, cy }, index) => {
            return <circle key={index} className="fill-slate-400 line-chart chart-plot plot-marker dark:stroke-white" cx={cx} cy={cy} r={0.5} />
        })}

        {points.map(({ cx, cy, textx, texty }, index) => {
            return <g className="line-chart chart-plot plot-group group" key={index}>
                <circle className="fill-transparent stroke-none" cx={cx} cy={cy} r={2} />
                <g>
                    <rect className="hidden group-hover:block fill-slate-300 dark:fill-gray-800 line-chart chart-plot plot-tooltip" x={cx + 1} y={cy - 2} width={15} height={10} />
                    <text className="hidden group-hover:block text-[0.2rem] fill-black text-black dark:fill-white dark:text-white line-chart chart-plot plot-text plot-x-text" x={cx + 2} y={cy + 2}>{textx}</text>
                    <text className="hidden group-hover:block text-[0.2rem] fill-black text-black dark:fill-white dark:text-white line-chart chart-plot plot-text plot-y-text" x={cx + 2} y={cy + 6}>{texty}</text>
                </g>
            </g>

        })}

    </>;
};

