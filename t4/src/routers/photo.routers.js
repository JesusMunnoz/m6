const { Router } = require('express');
const router = Router();
const photosCtrl = require("../controller/photo.controller")


router.get("/photos/:nombreUsuario", photosCtrl.getPhoto);
router.post("/photos", photosCtrl.postPhoto);
router.put("/photos", photosCtrl.putPhoto);
//router.delete("/photos", photosCtrl.deletePhoto);
router.delete("/photos", photosCtrl.deletePhotos); 

module.exports = router;