import { moduleForModel, test } from 'ember-qunit';

moduleForModel('glass', 'Unit | Serializer | glass', {
  // Specify the other units that are required for this test.
  needs: ['serializer:glass']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
