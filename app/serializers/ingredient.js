import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedPayload = {
      ingredients: payload.data[0],
    };
    return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
  },
});
