module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/mountain',
        permanent: false,
      },
    ]
  },
}
