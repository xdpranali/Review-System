import companyModel from "../models/company.js";

//create
export const createCompany = async(req, res) => {
    try{
        const {name, location, industry, email} = req.body;

        //object
        const companyObj = new companyModel({
            name,
            location,
            industry,
            email
        })

        const savedCompanyObj = await companyObj.save();

        res.json({
            savedCompanyObj,
            message:"Company created successfully"
        })

    }
    catch(error){
        console.log(error)
        res.json({
            error:"Error Occured"
        })
    }
}

//get
export const getCompanies = async (req, res) =>{
    try {
        const getCompanies = await companyModel.find()
        res.json({
            getCompanies
        })
    } catch (error) {
        res.json({
            error:"Cannot fetch data"
        })
    }
}