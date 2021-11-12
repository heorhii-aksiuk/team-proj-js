export function toGetShortYear(data) {
    data.results.map(item => {
        if (item.release_date) {
            item.release_year = item.release_date.slice(0, 4);
        }
        if (item.first_air_date) {
            item.release_year = item.first_air_date.slice(0, 4);
        }
    });

    return data;
}
