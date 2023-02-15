import { EVehicleModel } from '../../enums/EVehicleModel'
import { Vehicle } from '../../models/Vehicle'

export const dashboardView = (req, res) => {
  res.render('dashboard', { project_name: process.env.APP_NAME })
}

export const evtolsView = async (req, res) => {
  const vehicles = await Vehicle.find({})

  res.render('vehicles', { project_name: process.env.APP_NAME, vehicles, models: EVehicleModel })
}