import { value, text, applyMargins, getStackClass } from "../../helpers";
import { StackedBarPlotProps } from "./StackedBarPlotProps";

export const StackedBarPlot = ({ data, axis, chart }: StackedBarPlotProps) => {

    const { min: [minx, miny], max: [maxx, maxy], size: [sx, sy], margins: { margin: [mx, my], startOffset: [ox, oy] } } = axis;

    const { x1, x2, y1, y2 } = applyMargins(chart, axis.margins);

    const points = data.map((i, index) => {
        const [_x, _y] = i;
        const x = value(_x);
        const textx = text(_x);

        const _cx = (x - minx) * (sx) / (maxx - minx) + ox;
        const cx = _cx + mx;

        const yPoints = _y.map((py, yi) => {

            const y = value(py);
            const texty = text(py);

            const _cy = (y - miny) * (sy) / (maxy - miny) + oy;
            const cy = y1 - _cy;
            return { cy, texty, index: yi };
        }).sort((a, b) => a.cy - b.cy);
        return { cx, textx, yPoints };
    });

    return <>
        {points.map(({ cx, yPoints }, pi) => {
            return yPoints.map(({ cy, index }) => <rect key={`${pi}-${index}`} className={`${getStackClass(index)} stroke-none bar-chart chart-plot bar-column bar-column-${index + 1}`} x={cx - 1} y={cy} width={2} height={y1 - cy - oy} />
            );
        })}
        {points.map(({ cx, yPoints }, pi) => {
            return yPoints.map(({ cy, index }) => <rect key={`${pi}-${index}`} className={`${getStackClass(index)} stroke-none bar-chart chart-plot plot-marker plot-marker-${index + 1}`} x={cx - 1} y={cy} height={0.5} width={2} />);
        })}

        {points.map(({ cx, yPoints, textx }, pi) => {
            return yPoints.map(({ cy, texty, index }) => <g className={`bar-chart chart-plot plot-group group`} key={`${pi}-${index}`}>
                <circle className="fill-transparent stroke-none" cx={cx} cy={cy} r={2} />
                <g>
                    <rect className={`hidden group-hover:block fill-slate-300 dark:fill-gray-800 bar-chart chart-plot plot-tooltip plot-tooltip-${index + 1}`} x={cx + 1} y={cy - 2} width={15} height={10} />
                    <text className="hidden group-hover:block text-[0.2rem] fill-black text-black dark:fill-white dark:text-white bar-chart chart-plot  plot-text plot-x-text" x={cx + 2} y={cy + 2}>{textx}</text>
                    <text className="hidden group-hover:block text-[0.2rem] fill-black text-black dark:fill-white dark:text-white bar-chart chart-plot  plot-text plot-y-text" x={cx + 2} y={cy + 6}>{texty}</text>
                </g>
            </g>);
        })}

    </>;
};

