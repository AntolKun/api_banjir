// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

// exports.showData = async (req, res) => {
//   try {
//     const { sensorid } = req.query;

//     if (!sensorid || !Array.isArray(sensorid)) {
//       return res.status(400).json({
//         pesan: "Parameter 'sensorid' harus disertakan sebagai array dalam query",
//       });
//     }

//     const latestData = await prisma.station1.findFirst({
//       where: {
//         sensorid: {
//           in: sensorid,  // Menyaring data berdasarkan array sensorid
//         },
//       },
//       orderBy: {
//         created_at: 'desc',  // Mengurutkan berdasarkan 'created_at' dalam urutan menurun
//       },
//     });

//     res.json({
//       latestData,
//     });
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     res.status(500).json({
//       pesan: "Gagal Menampilkan data",
//       message: error.message,
//     });
//   }
// };

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.showData = async (req, res) => {
  try {
    const { sensorid } = req.query;

    if (!sensorid || !Array.isArray(sensorid)) {
      return res.status(400).json({
        pesan: "Parameter 'sensorid' harus disertakan sebagai array dalam query",
      });
    }

    const promises = sensorid.map(id => 
      prisma.station1.findFirst({
        where: { sensorid: id },
        orderBy: { created_at: 'desc' },
      })
    );

    const latestData = await Promise.all(promises);

    res.json({
      data: latestData.filter(data => data !== null), // Menghapus data yang null (jika ada sensorid yang tidak ditemukan)
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({
      pesan: "Gagal Menampilkan data",
      message: error.message,
    });
  }
};


// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// // Mengambil data dari database
// const showData = async (req, res) => {
//   try {
//     const data = await prisma.station1.findMany();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching data from the database' });
//   }
// };

// module.exports = {
//   showData,
// };
