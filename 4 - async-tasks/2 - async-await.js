async function doJob() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 2000);
  });
}

(async () => {
  try {
    console.log('start...')
    let response = await doJob();
    console.log({ response });
  } catch (error) {
    console.error({ error });
  }
})();
