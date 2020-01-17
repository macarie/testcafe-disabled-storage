# testcafe-disabled-storage


## Quick test

```console
$ yarn

$ yarn serve &

$ yarn with-storage

$ yarn no-storage
```


## Output

```console
$ yarn with-storage

 Running tests in:
 - Chrome 79.0.3945.130 / macOS 10.15.2

 Just testing
 ✓ Is there an <h1> tag?

----
Chrome 79.0.3945.130 / macOS 10.15.2
DEBUGGER PAUSE ON FAILED TEST:
AssertionError: expected false to deeply equal true

Browser: Chrome 79.0.3945.130 / macOS 10.15.2

   6 |test('Is there an <h1> tag?', async t => {
   7 |  await t.expect(Selector('h1').exists).eql(true)
   8 |})
   9 |
  10 |test('Is there an <h2> tag?', async t => {
> 11 |  await t.expect(Selector('h2').exists).eql(true)
  12 |})
  13 |

 1/2 failed
```

```console
$ yarn no-storage

 Running tests in:
 - Chrome 79.0.3945.130 / macOS 10.15.2

 Just testing
```
