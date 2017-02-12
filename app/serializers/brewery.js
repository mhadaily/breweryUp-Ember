import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedPayload = {
      breweries: payload.data[0],
    };
    return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
  },
  normalizeFindAllResponse(store, type, payload) {
    console.log(payload);
    payload.data = payload.data.map(this.addLinks);
    return payload;
  },
  normalizeFindRecordResponse(store, type, payload) {
    payload.data = this.addLinks(payload);
    return payload;
  },
  addLinks(beer) {
    console.log(beer);
    beer.type = 'brewery';
    delete beer.data;
    beer.breweries.links = {
      related: `/beers/${beer.id}/breweries`
    };
    return beer;
  }
});

