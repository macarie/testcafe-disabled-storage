import { Selector } from 'testcafe';

fixture`Just testing`
  .page('http://localhost:8080')

test('Is there an <h1> tag?', async t => {
  await t.expect(Selector('h1').exists).eql(true)
})

test('Is there an <h2> tag?', async t => {
  await t.expect(Selector('h2').exists).eql(true)
})
