const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.showData = async (req, res) => {
  try {
    // Mengambil data terbaru berdasarkan kolom 'createdAt'
    let latestData = await prisma.station1.findFirst({
      orderBy: {
        created_at: 'desc'
      }
    });

    res.json({
      
      latestData,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.json({
      pesan: "Gagal Menampilkan data",
      message: error.message,
    });
  }
};
