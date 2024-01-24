import {test} from '@jest/globals'
import  request  from 'supertest';
import { app } from '../src/app.js';

test('Encanto page shows title of movie', async () =>{
  await request(app).get('/movies/2').expect(200);
})