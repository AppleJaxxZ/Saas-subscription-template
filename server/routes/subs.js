import express from 'express'

const router = express.Router();
import { prices, createSubscription, subscriptionStatus, subscriptions } from '../controllers/subs';
import { requireSignin } from "../middlewares/index"


router.get("/prices", prices);
router.post("/create-subscription", requireSignin, createSubscription)
router.get('/subscription-status', requireSignin, subscriptionStatus)
router.get('/subscriptions', requireSignin, subscriptions)
module.exports = router