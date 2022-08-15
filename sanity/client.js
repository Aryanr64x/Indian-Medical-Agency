const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'lymboce8',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'skilfLFrWs8luPj22P9n7R7cx6ObatMEvLnHO0sfLVuVz9pemgbOA4sw6zEq93OlJH9qwvA7VqDm13lvCG41V1u3lZf9TXgbJwhCl2nsHflG7kTsfcFmTbQNAR2h5w8g48hu7bw95nnbx2jKLLaIvFgmT9wiiHhbEjQPBwD2ceLjcxYVL1AF', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;