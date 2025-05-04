const Sequelize = require('sequelize')

// Conexão com o banco de dados 
    const sequelize = new Sequelize('postApp', 'postgres', '123', {
        host: "localhost",
        dialect: 'postgres'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}