import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Notes } from '../models/Notes';

class NotesController {
  async index(req: Request, res: Response) {
    const response = await getRepository(Notes).find();

    return res.json(response);
  }

  async store(req: Request, res: Response) {
    try {
      const saveNotes = getRepository(Notes);

      const savedNotes = await saveNotes.save(req.body);

      return res.status(200).send(savedNotes);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const response = await getRepository(Notes).findOne({ id });

    return res.json(response);
  }
}

export default new NotesController();
