const config = require('./dbConfig');
const sql = require('mssql');

const getAoQuan = async () => {
  try {
    let pool = await sql.connect(config);
    let data = await pool.request().query('SELECT * FROM AoQuan');
    return data;
  } catch (e) {
    return e;
  }
};

const createData = async (values) => {
  try {
    let pool = await sql.connect(config);
    let data = await pool.request().query(
      `INSERT INTO Product VALUES (${values.id},'${values.imgUrl}','${values.alt}','${values.title}', '${values.price}',
'${values.content}',' ${values.star}', '${values.review}')`
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAoQuan,
  createData,
};
