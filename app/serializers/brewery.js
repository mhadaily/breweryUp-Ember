import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedPayload = {
      breweries: payload.data,
    };
    return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
  },
});
