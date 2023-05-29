const ts = 1000;

const endpointWithApiKey = `ts=${ts}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`;

export default endpointWithApiKey;
