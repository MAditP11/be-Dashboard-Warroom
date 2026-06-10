import { Sales, Rekap, Rekap2, Rekap3, Rea21, Rea20, Rea19, Admin } from '../model/dataModel.js';
import { Op } from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getAdmin = async (req, res) => {
  try {
    const response = await Admin.findAll({
      attributes: ['id', 'nama', 'email'],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const Register = async (req, res) => {
  const { nama, email, pass, confPass } = req.body;
  if (pass !== confPass) return res.status(400).json({ msg: 'Password dan Confirm Password tidak cocok' });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(pass, salt);
  try {
    await Admin.create({
      nama: nama,
      email: email,
      pass: hashPassword,
    });
    res.json({ msg: 'Register berhasil' });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const response = await Admin.findAll({
      where: {
        nama: req.body.nama,
      },
    });
    const match = await bcrypt.compare(req.body.pass, response[0].pass);
    if (!match) return res.status(400).json({ msg: 'Password Salah' });
    const adminId = response[0].id;
    const nama = response[0].id;
    const email = response[0].id;
    const accessToken = jwt.sign({ adminId, nama, email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '20s',
    });
    const refreshToken = jwt.sign({ adminId, nama, email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d',
    });
    await Admin.update(
      { refresh_token: refreshToken },
      {
        where: {
          id: adminId,
        },
      },
    );
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: 'nama tidak ditemukan' });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const admin = await Admin.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!admin[0]) return res.sendStatus(204);
  const adminId = admin[0].id;
  await Admin.update(
    { refresh_token: null },
    {
      where: {
        id: adminId,
      },
    },
  );
  res.clearCookie('refreshToken');
  return res.sendStatus(200);
};

export const getSales = async (req, res) => {
  // try {
  //   const response = await Sales.findAll();
  //   res.status(200).json(response);
  // } catch (error) {
  //   console.log(error.message);
  // }
  const page = parseInt(req.query.page) || 0;
  const limit = parseInt(req.query.limit) || 5;
  const search = req.query.search_query || '';
  const offset = limit * page;
  const totalRows = await Sales.count({
    where: {
      [Op.or]: [
        {
          p: {
            [Op.like]: '%' + search + '%',
          },
        },
        {
          ns: {
            [Op.like]: '%' + search + '%',
          },
        },
        {
          tgl_etat: {
            [Op.like]: '%' + search + '%',
          },
        },
        {
          datel: {
            [Op.like]: '%' + search + '%',
          },
        },
        {
          sto: {
            [Op.like]: '%' + search + '%',
          },
        },
      ],
    },
  });
  const totalPage = Math.ceil(totalRows / limit);
  const result = await Sales.findAll({
    where: {
      [Op.or]: [
        {
          p: {
            [Op.like]: '%' + search + '%',
          },
        },
        {
          ns: {
            [Op.like]: '%' + search + '%',
          },
        },
        {
          tgl_etat: {
            [Op.like]: '%' + search + '%',
          },
        },
        {
          datel: {
            [Op.like]: '%' + search + '%',
          },
        },
        {
          sto: {
            [Op.like]: '%' + search + '%',
          },
        },
      ],
    },
    offset: offset,
    limit: limit,
    order: [['id', 'DESC']],
  });
  res.json({
    result: result,
    page: page,
    limit: limit,
    totalRows: totalRows,
    totalPage: totalPage,
  });
};

export const getRekap = async (req, res) => {
  try {
    const response = await Rekap.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRekap2 = async (req, res) => {
  try {
    const response = await Rekap2.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRekap3 = async (req, res) => {
  try {
    const response = await Rekap3.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRea21 = async (req, res) => {
  try {
    const response = await Rea21.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRea20 = async (req, res) => {
  try {
    const response = await Rea20.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getRea19 = async (req, res) => {
  try {
    const response = await Rea19.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSalesById = async (req, res) => {
  try {
    const response = await Sales.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createSales = async (req, res) => {
  try {
    await Sales.create(req.body);
    res.status(201).json({ msg: 'Data Created' });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateSales = async (req, res) => {
  try {
    await Sales.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'Data Updated' });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteSales = async (req, res) => {
  try {
    await Sales.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: 'Data Deleted' });
  } catch (error) {
    console.log(error.message);
  }
};
