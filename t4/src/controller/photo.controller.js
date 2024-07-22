const PhotoModels = require ("../model/photos");

async function getPhoto(req, res)
{
    const nombreUsuario = req.params.nombreUsuario;

    if (!nombreUsuario) {
        return res.status(400).json({ message: "nombreUsuario es requerido" });
    }

    try {
        let items = await PhotoModels.find({ "nombreUsuario": nombreUsuario });
        console.log(items);
        res.json(items);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener las fotos" });
    }
}   

async  function postPhoto(req, res)
{
    const { nombreUsuario, url, titulo, comentario } = req.body;

    if (!nombreUsuario || !url || !titulo || !comentario) {
        return res.status(400).json({ message: "Todos campos son requeridos" });
    }

    let data = { nombreUsuario, url, titulo, comentario };

    try {
        let document = new PhotoModels(data);
        let response = await document.save();
        console.log("Documento guardado");
        console.log(response);
        res.json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error al guardar la foto" });
    }
}

       
async function putPhoto(req, res)
{
    const { titulo, comentario } = req.body;

    if (!titulo || !comentario) {
        return res.status(400).json({ message: "titulo y comentario requeridos" });
    }

    try {
        let item = await PhotoModels.updateOne({ "titulo": titulo }, { "comentario": comentario });
        console.log(item);
        res.json(item);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "error al actualizar" });
    }

}
 
/*
async function deletePhoto(req, res)
{
    const { nombreUsuario, titulo } = req.body;

    if (!nombreUsuario || !titulo) {
        return res.status(400).json({ message: "nombreUsuario y titulo requeridos" });
    }

    try {
        let item = await PhotoModels.deleteOne({ "$and": [{ "nombreUsuario": nombreUsuario }, { "titulo": titulo }] });
        console.log("se borró foto");
        console.log(item);
        res.json(item);
    } catch (error) {
        console.log("error de eliminacion una");
        console.log(error);
        res.status(500).json({ message: "error de eliminacion una" });
    }
}
*/

async function deletePhotos(req, res) {
    const { nombreUsuario, titulo } = req.body;

    if (!nombreUsuario) {
        return res.status(400).json({ message: "nombreUsuario es requerido" });
    }

    try {
        let result;
        if (titulo) {
            result = await PhotoModels.deleteOne({ nombreUsuario, titulo });
            console.log("Se borró la foto");
        } else {
            result = await PhotoModels.deleteMany({ nombreUsuario });
            console.log("Se borraron todas las fotos");
        }
        console.log(result);
        res.json(result);
    } catch (error) {
        console.log("Error al eliminar fotos");
        console.log(error);
        res.status(500).json({ message: "Error al eliminar fotos" });
    }
}


module.exports = {getPhoto, postPhoto, putPhoto, /*deletePhoto,*/ deletePhotos};