const Tag=require("../models/tags");

exports.createTag=async(req,res)=>{

    try{
        const {name,description}=req.body;

        if(!name || !description){
            return res.staus(401).json({
                success:false,
                mesaage:"All the fields are required."
            })
        }

        //create the entry for tag
        const createdTag=await Tag.create({
            name:name,
            description:description,
        })

        console.log(createdTag);

        return res.status(200).json({
            success:true,
            message:"Tag created successfully.",
        })



    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.mesaage,
        })
    }

}

exports.showAllTags=async(req,res)=>{
    try{
        const findAllTags=await Tag.find({},{name:true,description:true});

        return res.status(200).json({
            success:true,
            message:"All Tags fetched successfully.",
            findAllTags
        })



    }catch(err){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}