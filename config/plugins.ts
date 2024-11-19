export default {
    upload: {
      provider: 'cloudinary', // Define que o provider será o Cloudinary
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME, // Variáveis de ambiente do Cloudinary
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      },
    },
  };
  