import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  /*
   I was thinking that Glass hasMany relationship to Beer but Apparently it's not and I was wrong.
   However, I keep this Serializer here.
   */

  //normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //  let beers = this._collectBeers(payload.data);
  //  let glasses = this._normalizeGlasses(payload.data);
  //  let normalizedPayload = {
  //    beers,
  //    glasses
  //  };
  //
  //  return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
  //},
  //
  //_collectBeers(glasses) {
  //  return glasses.map(glass => glass.beer);
  //},
  //
  //_normalizeGlasses(glasses) {
  //  return glasses.map(glass => glass.beer.id);
  //}

});
