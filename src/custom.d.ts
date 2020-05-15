declare module '*.svg' {
  const content: string;
  export default content;
}

declare const process: {
  env: {
    NODE_ENV: string;
    API_URL: string;
  };
};
