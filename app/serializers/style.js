import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  /*
   I was thinking that Styles hasMany relationship to Beer but Apparently it's not and I was wrong
   However, I keep this Serializer here.
   */

  //normalizeResponse(store, primaryModelClass, payload, id, requestType) {
  //  let beers = this._collectBeers(payload.data);
  //  let styles = this._normalizeStyles(payload.data);
  //  let normalizedPayload = {
  //    beers,
  //    styles
  //  };
  //
  //  return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
  //},
  //
  //_collectBeers(styles) {
  //  return styles.map(style => style.beer);
  //},
  //
  //_normalizeStyles(styles) {
  //  return styles.map(style => style.beer.id);
  //}
});
