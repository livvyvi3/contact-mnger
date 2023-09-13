import express from "express";
import {getContact, createContact, getContact, deleteContact, updateContact} from '../controllers/users.js';


const router = express.Router();

router.get("/contacts", getContact);
router.post("/contact", createContact);
router.get("/contact/:id", getContact);
router.delete("/contact/:id", deleteContact);
router.put("/contact/:id", updateContact);




export default router;
