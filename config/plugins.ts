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
    'populate-deep': {
      enabled: true, // Habilita o plugin
      config: {
        depth: 5, // Define o nível de profundidade das relações que serão populadas
      },
    },
  };
  