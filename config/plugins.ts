module.exports = {
    // Configuração para o plugin de upload usando Cloudinary
    upload: {
      provider: 'cloudinary', // Define que o provider será o Cloudinary
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME, // Variáveis de ambiente do Cloudinary
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      },
    },
    
    // Configuração para o plugin de populate-deep
    'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 3, // Default is 5
    }
  },
  };
  