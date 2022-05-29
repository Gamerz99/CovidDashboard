
import axios from 'axios';

export async function getCovidData() {
    const response = await axios.get<{
        covidData: any;
    }>("https://www.hpb.health.gov.lk/api/get-current-statistical");

    return response.data;
}