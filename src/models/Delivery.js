import mongoose from 'mongoose'
import { ELoadType } from '../enums/ELoadType'

const deliverySchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
    tracking_id: {
      type: String,
    },
    loads: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'loads',
      },
    ],
    Origin: {
      type: String,
      required: [true, 'Please enter a origin.'],
    },
    destination: {
      type: String,
      required: [true, 'Please enter a destination.'],
    },
    amount: {
      type: Number,
      required: [true, 'Code is required'],
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    toJSON: {
      virtuals: true,
    },
  },
)

deliverySchema.methods.toJSON = function () {
  var obj = this.toObject()
  delete obj.__v
  return obj
}

export const Delivery = mongoose.model('deliveries', deliverySchema)
