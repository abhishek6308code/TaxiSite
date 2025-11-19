import { Router } from "express";
import { z } from "zod";
import { saveInquiry, sendNotificationEmail } from "../service.js";

const router = Router();

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  propertyType: z.string().optional(),
  message: z.string().optional(),
});

router.post("/", async (req, res) => {
  try {
    const parsed = contactSchema.parse(req.body);

    const saved = await saveInquiry(parsed);
    const mailed = await sendNotificationEmail(parsed);

    return res.status(201).json({
      success: true,
      message: "Your enquiry was received successfully!",
      saved: !!saved,
      mailed: !!mailed,
    });
  } catch (err) {
    if (err.issues) {
      return res.status(400).json({ success: false, errors: err.issues });
    }
    console.error(err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

export default router;
