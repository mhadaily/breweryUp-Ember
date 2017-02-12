import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let normalizedPayload = {
      beers: payload.data
      /*
      Disable hasMany for now since the response doesn't have that, I was wrong before. keep it here as reference
      */
      //styles: payload.data.style,
      //glasses: payload.data.glass,
    };

    return this._super(store, primaryModelClass, normalizedPayload, id, requestType);
  },

});
