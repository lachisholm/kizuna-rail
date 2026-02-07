import {
    getAllRoutes,
    getListOfRegions,
    getListOfSeasons
} from '../../models/model.js';

export default async (req, res) => {
    const { region = '', season = '' } = req.query;

    let routes = await getAllRoutes();

    if (region) {
        routes = routes.filter(r => r.region === region);
    }

    if (season) {
        routes = routes.filter(r => r.bestSeason === season);
    }

    const regions = await getListOfRegions();
    const seasons = await getListOfSeasons();

    res.render('routes/list', {
        title: 'Scenic Train Routes',
        routes,
        regions,
        seasons,
        selectedRegion: region,
        selectedSeason: season
    });
};
