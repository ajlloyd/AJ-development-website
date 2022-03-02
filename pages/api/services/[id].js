//dynamic route:

import dbConnect from "../../../utils/dbConnect";
import ServicesPanel from "../../../models/ServicesPanel";
import Cors from 'cors'

// Run DB connection function:
dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch(method) {

        //GET method to get Service by individual ID:
        case "GET":
            try {
                const service = await ServicesPanel.findById(id);

                if (!service) {
                    return res.status(400).json({ success:false })
                }

                res.status(200).json({ success:true, data:service })
            } catch (error) {
                res.status(400).json({ success:false });
                
            }
            break;
        
        // PUT method to update Service by individual ID:
        case "PUT":
            try {
                const service = await ServicesPanel.findByIdAndUpdate(id, req.body, {
                    new:true, 
                    runValidators:true
                });

                if (!service) {
                    return res.status(400).json({ success:false })
                }

                res.status(200).json({ success:true, data:service })
                
            } catch (error) {
                res.status(400).json({ success:false });
            }
            break;
        
        // DELETE method to delete Service by individual ID:
        case "DELETE":
            try {
                const deleteService = await ServicesPanel.deleteOne({ _id:id })

                if (!deleteService) {
                    return res.status(400).json({ success:false })
                }

                res.status(200).json({ success:true, data:{} })
                
            } catch (error) {
                res.status(400).json({ success:false });
            }
            break;
            
        //Default response:
        default:
            res.status(400).json({ success:false });
            break;
    }
};