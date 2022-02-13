import express  from "express";
const router = express.Router();

import { getPosts, getUsers, getComments, getTodos, postTodos, editTodos, createTodos, deleteTodos } from '../contollers/Allrequests';

router.route('/posts').get(getPosts)
router.route('/users').get(getUsers)
router.route('/comments').get(getComments)
router.route('/todos').get(getTodos).post(postTodos).patch(editTodos).delete(deleteTodos)

export { router}