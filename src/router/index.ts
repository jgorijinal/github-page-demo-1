import {createRouter } from 'vue-router'
import { routes } from './routes'
import { history } from './history'

const router = createRouter({ history, routes })

export default router