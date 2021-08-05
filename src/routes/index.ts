import { Router } from 'express';
import NotesRouter from './notes.routes';

const routes = Router();

routes.use('/notes', NotesRouter);

export default routes;
