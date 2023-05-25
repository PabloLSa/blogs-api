// Arquivo: src/models/BlogPost.js

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id' // Renomeando a coluna para snake_case
    },
    published: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    underscored: true, // Definindo para que as colunas no banco de dados estejam em snake_case
    tableName: 'blog_posts' // Definindo o nome da tabela para 'blog_posts'
  });

  // Definindo a associação com o modelo BlogPost (N:1)
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
  }
return BlogPost;
}


