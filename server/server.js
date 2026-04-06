const express = require('express')
const cors = require('cors')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
require('dotenv').config()
const fs = require('fs')

const app = express()

app.use(cors())
app.use(express.json())

// 🔥 ASEGURAR carpeta uploads
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads')
}

// 🔥 CONFIGURAR MULTER (MEJORADO)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage })

// 🔥 CONFIG CLOUDINARY
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

// 🔥 ENDPOINT
app.post('/upload', upload.single('file'), async (req, res) => {

  try {

    // ✅ VALIDACIÓN CLAVE
    if (!req.file) {
      return res.status(400).json({
        error: 'No se recibió ninguna imagen'
      })
    }

    console.log('Archivo recibido:', req.file.path)

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'chinaloense'
    })

    console.log('Subida exitosa:', result.secure_url)

    // 🔥 RESPUESTA CORRECTA
    res.json({
      url: result.secure_url
    })

  } catch (error) {

    // 🔥 VER ERROR REAL
    console.error('🔥 ERROR REAL:', error)

    res.status(500).json({
      error: error.message
    })
  }

})

// 🔥 SERVER
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000')
})