import dbConnect from "../../../utils/dbConnect";
import ServicesPanel from "../../../models/ServicesPanel";

// Run DB connection function:
dbConnect();

export default async (req, res) => {
    const { method } = req;

    //GET method to get all services:
    switch (method) {
        case "GET":
            try {
                const services = await ServicesPanel.find({});

                res.status(200).json({ success:true, data:services})
            } catch (error) {
                res.status(400).json({ success:false })
            }
            break;
        
        //POST method to add a new service:
        case "POST":
            try {
                const services = await ServicesPanel.create(req.body);

                res.status(201).json({ success:true, data:services})
            } catch (error) {
                res.status(400).json({ success:false })
            }
            break;

        //Default response:
        default:
            res.status(400).json({ success:false });
            break;


    }
}

