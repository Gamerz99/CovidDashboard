import { Card, Statistic } from "antd";
import LiquidView from "./LiquidView.tsx";

interface Props {
    value: number;
    prefix: React.ReactNode;
    loading: boolean;
    precent: number;
    color: string;
    title: string;
}

function StatisticCardView({ value, prefix, loading, precent, color, title }: Props) {
    return (
        <Card className="statisticCards">
            <Statistic
                title={title}
                value={value}
                valueStyle={{ color }}
                prefix={prefix}
                loading={loading}
            />
            {!loading && <LiquidView
                precent={precent}
                fill={color}
            />}
        </Card>
    );
}

export default StatisticCardView;