import { Router } from 'express';

import NotesController from '../controllers/notesController';

const notesRouter = Router();

notesRouter.get('/', NotesController.index);
notesRouter.post('/', NotesController.store);

export default notesRouter;
