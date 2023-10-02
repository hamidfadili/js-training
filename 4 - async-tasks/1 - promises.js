function doJob() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 2000);
  });
}

console.log('start...')
let fetchResult = doJob()
  .then((response) => console.log({ response }))
  .catch((error) => console.error({ error }));
