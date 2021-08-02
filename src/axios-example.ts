import axios from 'axios';

export async function getStuff() {
    // info https://randomuser.me/
    const url = 'https://randomuser.me/api/';

    const axiosResponse = await axios.get(url);

    return axiosResponse.data;
}
