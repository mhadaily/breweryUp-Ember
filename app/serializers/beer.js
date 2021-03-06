import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  //normalize  a single beer
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedPayload = {
      beers: payload.data,
    };
    return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
  },

  //Since I am using Query to send PAGE number so I need to Normalize my response
  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedPayload = {
      beers: payload.data,
    };
    return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
  },
  //normalizeFindAllResponse(store, type, payload) {
  //  payload.data = payload.data.map(this.addLinks);
  //  return payload;
  //},
  //
  //normalizeFindRecordResponse(store, type, payload) {
  //  payload.data = this.addLinks(payload.data);
  //  return payload;
  //},
  //
  //addLinks(beer) {
  //  beer.type = 'beer';
  //  delete beer.breweries.data;
  //  beer.breweries.links = {
  //    related: `/beers/${beer.id}/breweries`
  //  };
  //  return beer;
  //}

});
