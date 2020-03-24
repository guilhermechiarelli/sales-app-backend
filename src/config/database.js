module.exports = {
  dialect: 'mysql',
  host: '192.168.99.100',
  port: '3307',
  username: 'root',
  password: 'root',
  database: 'sales-app',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
