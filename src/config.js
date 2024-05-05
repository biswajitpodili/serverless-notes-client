const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "biswajit-notes-app-file-uploads",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://gt8y8d48c3.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_AprziSqbJ",
      APP_CLIENT_ID: "4ruv0hmm39tkl5idrpdkhukfl",
      IDENTITY_POOL_ID: "us-east-1:b42bed9c-2689-4d7f-9107-e03e45967335",
    },
  };
  export default config;