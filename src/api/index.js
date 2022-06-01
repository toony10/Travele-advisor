import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '2893f32f25msh4422a69adbfab59p1d65dajsn6669205226c7'
    }
};

export const getPlacesData = async () =>
{
    try
    {
        const { data: { data } } = await axios.get(URL, options);

        return data;

    } catch (error)
    {
        console.log(error);
    }
};