import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

export const Sales = db.define(
  'sales',
  {
    nama: DataTypes.STRING,
    p: DataTypes.STRING,
    ns: DataTypes.STRING,
    kel: DataTypes.STRING,
    datel: DataTypes.STRING,
    sto: DataTypes.STRING,
    channel: DataTypes.STRING,
    status: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    tgl_reg: DataTypes.STRING,
    tgl_etat: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  },
);

export const Rekap = db.define(
  'tot_sales',
  {
    daily: DataTypes.STRING,
    jan: DataTypes.STRING,
    feb: DataTypes.STRING,
    mar: DataTypes.STRING,
    apr: DataTypes.STRING,
    may: DataTypes.STRING,
    jun: DataTypes.STRING,
    jul: DataTypes.STRING,
    aug: DataTypes.STRING,
    sep: DataTypes.STRING,
    oct: DataTypes.STRING,
    nov: DataTypes.STRING,
    des: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  },
);

export const Rekap2 = db.define(
  'tot_sales2',
  {
    monthly: DataTypes.STRING,
    jan: DataTypes.STRING,
    feb: DataTypes.STRING,
    mar: DataTypes.STRING,
    apr: DataTypes.STRING,
    may: DataTypes.STRING,
    jun: DataTypes.STRING,
    jul: DataTypes.STRING,
    aug: DataTypes.STRING,
    sep: DataTypes.STRING,
    oct: DataTypes.STRING,
    nov: DataTypes.STRING,
    des: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  },
);

export const Rekap3 = db.define(
  'tot_sales3',
  {
    target: DataTypes.STRING,
    jan: DataTypes.STRING,
    feb: DataTypes.STRING,
    mar: DataTypes.STRING,
    apr: DataTypes.STRING,
    may: DataTypes.STRING,
    jun: DataTypes.STRING,
    jul: DataTypes.STRING,
    aug: DataTypes.STRING,
    sep: DataTypes.STRING,
    oct: DataTypes.STRING,
    nov: DataTypes.STRING,
    des: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  },
);

export const Rea21 = db.define(
  'rea',
  {
    oi: DataTypes.STRING,
    jan: DataTypes.STRING,
    feb: DataTypes.STRING,
    mar: DataTypes.STRING,
    apr: DataTypes.STRING,
    mei: DataTypes.STRING,
    jun: DataTypes.STRING,
    jul: DataTypes.STRING,
    agus: DataTypes.STRING,
    sep: DataTypes.STRING,
    okt: DataTypes.STRING,
    nov: DataTypes.STRING,
    des: DataTypes.STRING,
    total: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  },
);

export const Rea20 = db.define(
  'rea20',
  {
    oi: DataTypes.STRING,
    jan: DataTypes.STRING,
    feb: DataTypes.STRING,
    mar: DataTypes.STRING,
    apr: DataTypes.STRING,
    mei: DataTypes.STRING,
    jun: DataTypes.STRING,
    jul: DataTypes.STRING,
    agus: DataTypes.STRING,
    sep: DataTypes.STRING,
    okt: DataTypes.STRING,
    nov: DataTypes.STRING,
    des: DataTypes.STRING,
    total: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  },
);

export const Rea19 = db.define(
  'rea19',
  {
    oi: DataTypes.STRING,
    jan: DataTypes.STRING,
    feb: DataTypes.STRING,
    mar: DataTypes.STRING,
    apr: DataTypes.STRING,
    mei: DataTypes.STRING,
    jun: DataTypes.STRING,
    jul: DataTypes.STRING,
    agus: DataTypes.STRING,
    sep: DataTypes.STRING,
    okt: DataTypes.STRING,
    nov: DataTypes.STRING,
    des: DataTypes.STRING,
    total: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  },
);

export const Admin = db.define(
  'admin',
  {
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    refresh_token: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  },
);

// (async () => {
//   await db.sync();
// })();
