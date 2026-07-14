const path = require("path");

const { extractPdfText } = require("../services/pdfService");
const { extractImageText } = require("../services/ocrService");

const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const filePath = path.join(
      __dirname,
      "../uploads",
      req.file.filename
    );

    let extractedText = "";

    // PDF Parsing
    if (req.file.mimetype === "application/pdf") {
      extractedText = await extractPdfText(filePath);
    }

    // OCR for Images
    else if (
      req.file.mimetype === "image/png" ||
      req.file.mimetype === "image/jpeg" ||
      req.file.mimetype === "image/jpg"
    ) {
      extractedText = await extractImageText(filePath);
    }

    // Unsupported file
    else {
      return res.status(400).json({
        success: false,
        message: "Unsupported file type",
      });
    }

    res.json({
      success: true,
      fileName: req.file.filename,
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      size: req.file.size,
      extractedText,
    });

  } catch (error) {
    console.error("Upload Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while processing the file.",
    });
  }
};

module.exports = {
  uploadFile,
};