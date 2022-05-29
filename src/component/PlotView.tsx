import { Area, Column } from '@ant-design/plots';

interface Props {
    data: any;
    yField: string;
}

function PlotView({ data, yField }: Props) {

    const config = {
        data: data,
        xField: 'date',
        yField: yField,
        xAxis: {
            tickCount: 5,
        },
        animation: true,
        // slider: {
        //     // start: 0,
        //     // end: 1,
        //     trendCfg: {
        //         isArea: true,
        //     },
        // },
        areaStyle: () => {
            return {
              fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
            };
          },
    };

    return <Area {...config} />;
}

export default PlotView;