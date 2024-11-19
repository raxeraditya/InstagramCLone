import multer from "multer";

export const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "./public");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now());
    },
  }),
}).single("file");
