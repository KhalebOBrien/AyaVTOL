import express from 'express'
import { createLoad, fetchAllLoads, updateLoad, fetchLoadById, deleteLoad} from '../../../controllers/api/loadController'

export const loadRoutes = express.Router()

loadRoutes.post('/', createLoad)
loadRoutes.get('/', fetchAllLoads)
loadRoutes.patch('/:loadId', updateLoad)
loadRoutes.get('/:loadId', fetchLoadById)
loadRoutes.delete('/:loadId', deleteLoad)
