export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_KCrcdENJZiwIMdnnvNm9MceS00t2PjCLaK",
  s3: {
    REGION: "us-east-2",
    BUCKET: "grouper-notes-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://kzrynkxrzl.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_k0irhCryd",
    APP_CLIENT_ID: "77ngu91s9kd50of8v66ph8avup",
    IDENTITY_POOL_ID: "us-east-2:f90f3900-fa58-47f6-93bb-8b21e3071bc9"
  }
};
