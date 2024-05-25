import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import mongoose from "mongoose"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ConnectDB = async () => {
  try {
    if (mongoose?.connection && mongoose?.connections[0]?.readyState) return;

    const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
    console.log(`MongoDB connected !! DB host: ${connectionInstance.connection.host}`);

  } catch (error) {
    throw new Error("Error connecting to database")
  }
}