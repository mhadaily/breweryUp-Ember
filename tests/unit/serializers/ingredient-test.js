import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ingredient', 'Unit | Serializer | ingredient', {
  // Specify the other units that are required for this test.
  needs: ['serializer:ingredient']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
