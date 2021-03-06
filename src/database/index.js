import Sequelize from 'sequelize';

import mongoose from 'mongoose';
import User from '../app/models/user';
import File from '../app/models/file';
import Appointment from '../app/models/appointments';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnect = mongoose.connect('mongodb://localhost:27017/gobarber', {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
