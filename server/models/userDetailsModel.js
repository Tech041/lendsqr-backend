import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema(
  {
    full_name: { type: String },
    phone: { type: String },
    email: { type: String, unique: true },
    bvn: { type: String },
    gender: { type: String, enum: ["Male", "Female"] },
    marital_status: { type: String, enum: ["Single", "Married"] },
    address: { type: String },
    bank: { type: String },
    level: {
      type: String,
      enum: ["HND", "B.Sc", "B.A", "PhD", "Others"],
    },
    employment_status: {
      type: String,
      enum: ["Employee", "Employer"],
    },
    sector: {
      type: String,
      enum: ["Fintech", "Academia", "Oil", "Telecoms", "Others"],
    },
    duration: {
      type: String,
      enum: ["0-1yr", "2-5yrs", "6-10yrs", "11yrs+"],
    },
    office_email: { type: String },
    monthly_income: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String },
    guarantor_full_name: { type: String },
    guarantor_phone: { type: String },
    guarantor_email: { type: String },
    guarantor_relationship: { type: String },
    date: { type: Number, require: true },
  },
  { timestamps: true, minimize: false }
);

const userDetailsModel =
  mongoose.models.UserDetails ||
  mongoose.model("UserDetails", userDetailSchema);
export default userDetailsModel;
