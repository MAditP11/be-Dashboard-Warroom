import { Admin } from '../model/dataModel.js';
import jwt from 'jsonwebtoken';

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    const admin = await Admin.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!admin[0]) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);
      const adminId = admin[0].id;
      const nama = admin[0].nama;
      const email = admin[0].email;
      const accessToken = jwt.sign({ adminId, nama, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15s',
      });
      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
  }
};
