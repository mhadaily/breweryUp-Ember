import { moduleForModel, test } from 'ember-qunit';

moduleForModel('beer', 'Unit | Serializer | beer', {
  // Specify the other units that are required for this test.
  needs: ['serializer:beer']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
