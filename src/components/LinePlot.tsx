import { AxisParameters, ChartComponentClassName, ChartCoordinates, Data, XY } from "../types/ChartProps";
import { applyMargins, valueof, textof } from "../helpers/helpers";

export const LinePlot = ({ data, axis, chart, classNames }: LinePlotProps) => {

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
        <polyline points={pointsPath} className={classNames?.polyline} strokeLinejoin="round" />
        {points.map(({ cx, cy }, index) => {
            return <circle key={index} className={classNames?.plot?.marker} cx={cx} cy={cy} r={0.5} />


        })}

        {points.map(({ cx, cy, textx, texty }, index) => {
            return <g className="group" key={index}>
                <circle className="fill-transparent stroke-none" cx={cx} cy={cy} r={2} />
                <g>
                    <rect className={classNames?.plot?.tooltip} x={cx + 1} y={cy - 2} width={15} height={10} />
                    <text className={classNames?.plot?.xtext} x={cx + 2} y={cy + 2}>{textx}</text>
                    <text className={classNames?.plot?.ytext} x={cx + 2} y={cy + 6}>{texty}</text>
                </g>
            </g>

        })}

    </>;
};
type LinePlotProps = {
    axis: AxisParameters;
    data: XY<Data>[];
    chart: ChartCoordinates;
    classNames?: ChartComponentClassName

};
