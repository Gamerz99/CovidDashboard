import { Card, Col, Empty, Row } from "antd";
import "../pages/CovidDashboard.css";
import { LineChartOutlined, HeartOutlined, FallOutlined, RiseOutlined } from '@ant-design/icons';
import StatisticCardView from "../component/StatisticCardView.tsx";
import PlotView from "../component/PlotView.tsx";
import { useEffect, useState } from "react";
import { getCovidData } from "../service.tsx/api.ts";


function CovidDashboard() {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [plotData, setPlotData] = useState([]);

    useEffect(() => {
        async function fetchCovidData() {
            const covidData = await getCovidData();
            setData(covidData.data);
            setPlotData(covidData.data.daily_pcr_testing_data.reverse());
            setLoading(false);
        }
        fetchCovidData();
    }, []);

    return (
        <>
            <Row>
                <Col xs={24} sm={12} md={6}>
                    <StatisticCardView
                        title={"New Cases"}
                        value={data.local_new_cases}
                        prefix={<RiseOutlined />}
                        loading={loading}
                        color={'#FFBF00'}
                        precent={data.local_new_cases / 100}
                    />
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <StatisticCardView
                        title={"Total Cases"}
                        value={data.local_total_cases}
                        prefix={<LineChartOutlined />}
                        loading={loading}
                        color={'#0096FF'}
                        precent={data.local_total_cases / 21582910}
                    />
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <StatisticCardView
                        title={"Total Deaths"}
                        value={data.local_deaths}
                        prefix={<FallOutlined />}
                        loading={loading}
                        color={'#FF3131'}
                        precent={data.local_deaths / data.local_total_cases}
                    />
                </Col>
                <Col xs={24} sm={12} md={6}>
                    <StatisticCardView
                        title={"Total Recovered"}
                        value={data.local_recovered}
                        prefix={<HeartOutlined />}
                        loading={loading}
                        color={'#0BDA51'}
                        precent={data.local_recovered / data.local_total_cases}
                    />
                </Col>
            </Row>
            <Row className="graphArea">
                {/* <Col span={12}>
                    {!loading && <Card className="plotCards">
                        <PlotView
                            data={plotData}
                            yField={"pcr_count"}
                        />
                    </Card>}
                    {loading && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
                </Col> */}
                {/* <Col span={12}>
                    {!loading && <Card className="plotCards">
                        <PlotView
                            data={data.daily_antigen_testing_data}
                            yField={"antigen_count"}
                        />
                    </Card>}
                    {loading && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
                </Col> */}
            </Row>
        </>
    );
}

export default CovidDashboard;