import mongoose from 'mongoose'

const loadSchema = new mongoose.Schema(
  {
    serial_number: {
      type: String,
      required: [true, 'Please enter serial number.'],
      unique: [true, 'Vehicle with this serial number already exists.'],
    },
    model: {
      type: String,
      enum: EVehicleModel,
      required: [true, 'Please enter vehicle model.'],
    },
    current_state: {
      type: String,
      enum: EVehicleState,
      default: EVehicleState.IDLE,
    },
    weight: {
      type: Number,
      required: [true, 'Password is required.'],
    },
    battery_capacity: {
      type: Number,
      required: [true, 'Password is required.'],
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

loadSchema.methods.toJSON = function () {
  var obj = this.toObject()
  delete obj.__v
  return obj
}

export const Load = mongoose.model('loads', loadSchema)
