import { Load } from '../../models/Load'
import { handleErrors } from '../../utils/errorHandler'
import { StatusCodes } from 'http-status-codes'

export const createLoad = async (req, res) => {
  const { serial_number, model, current_state, max_weight, battery_capacity, color } = req.body

  try {
    // check the state of the evtol, should be idle or being loaded by current user
     
    const load = await Load.create({
      serial_number,
      model,
      current_state,
      max_weight,
      battery_capacity,
      color
    })

    return res.status(StatusCodes.CREATED).json({ load })
  } catch (err) {
    const error = handleErrors(err)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
  }
}

export const updateLoad = async (req, res) => {
  const { serial_number, model, current_state, max_weight, battery_capacity, color } = req.body

  try {
    const load = await Load.findOneAndUpdate(
      { _id: req.params.loadId },
      { $set: { 
        serial_number,
        model,
        current_state,
        max_weight,
        battery_capacity,
        color
       }
      },
      { new: true },
    )
    
    if (!updated) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: { message: 'load not found' }})
    }

    return res.status(StatusCodes.CREATED).json({ updated })
  } catch (err) {
    const error = handleErrors(err)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
  }
}

export const fetchLoadById = async (req, res) => {
  try {
    const load = await Load.findOne({ _id: req.params.loadId })
    if (!load) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: { message: 'load not found' }})
    }

    return res.status(StatusCodes.OK).json({ load })

  } catch (err) {
    const error = handleErrors(err)
    return res.status(StatusCodes.BAD_REQUEST).json({ error })
  }
}

export const fetchAllLoads = async (req, res) => {
  try {
    const loads = await Load.find({})
    if (!loads) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'loads not found' })
    }

    return res.status(StatusCodes.OK).json({ loads })
  } catch (err) {
    const error = handleErrors(err)
    return res.status(StatusCodes.BAD_REQUEST).json({ error })
  }
}

export const deleteLoad = async (req, res) => {
  try {
    const deleteLoad = await Load.deleteOne({ _id: req.params.loadId });
    
    return res.status(StatusCodes.OK).json({ status: "success" });
  } catch (err) {
    const error = handleErrors(err)
    return res.status(StatusCodes.BAD_REQUEST).json({ error })
  }
}
