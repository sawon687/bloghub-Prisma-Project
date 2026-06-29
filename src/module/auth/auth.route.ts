import { Router } from 'express';
import authController from './auth.controller';
import { auth } from '../../midileware/auth';

const router=Router()

router.post('/signin',auth('USER') ,authController.signin)

export const authRoutes=router