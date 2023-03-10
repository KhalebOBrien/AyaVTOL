import { EVehicleModel } from '../../enums/EVehicleModel'
import { ELoadType } from '../../enums/ELoadType'
import { Vehicle } from '../../models/Vehicle'

export const dashboardView = (req, res) => {
  res.render('dashboard', { project_name: process.env.APP_NAME })
}

export const evtolsView = async (req, res) => {
  const vehicles = await Vehicle.find({})

  res.render('vehicles', { project_name: process.env.APP_NAME, vehicles, models: EVehicleModel })
}

export const evtolView = async (req, res) => {
  const vehicle = await Vehicle.findOne({ _id: req.params.vehicleId })

  if (!vehicle) {
    return res.render('404', { project_name: process.env.APP_NAME, error: 'vehicle not found' })
  }
  
  return res.render('vehicle-data', { project_name: process.env.APP_NAME, vehicle, models: EVehicleModel })
}

export const loadEvtolView = async (req, res) => {
  const vehicle = await Vehicle.findOne({ _id: req.params.vehicleId })

  if (!vehicle) {
    return res.render('404', { project_name: process.env.APP_NAME, error: 'vehicle not found' })
  }
  
  return res.render('load-vehicle', { project_name: process.env.APP_NAME, vehicle, loadTypes: ELoadType })
}

export const deliveryHistoryView = async (req, res) => {
  return res.render('delivery-history', { project_name: process.env.APP_NAME })
}