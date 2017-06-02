export default {
  bucket: {
    slug: process.env.COSMIC_BUCKET || 'react-native-cosmic-app',
    read_key: process.env.COSMIC_READ_KEY,
    write_key: process.env.COSMIC_WRITE_KEY
  }
}
