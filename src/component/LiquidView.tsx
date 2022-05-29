import { Liquid } from '@ant-design/plots';

interface Props {
    precent: number;
    fill: string;
}

function LiquidView({ precent, fill }: Props) {

    const config = {
        height: 250,
        percent: precent,
        outline: {
            border: 2,
            distance: 4,
        },
        wave: {
            length: 80,
        },
        liquidStyle: {
            fill: fill,
            fillOpacity: 0.5,
            stroke: fill,
            lineWidth: 1,
            strokeOpacity: 0.7,
            cursor: 'pointer'
        }
    };

    return <Liquid {...config} />;
}

export default LiquidView;
