declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.jpg';
declare module '*.png';
declare const process: {
  env: {
    NODE_ENV: string;
    REACT_APP_API_URL: string;
  };
};
