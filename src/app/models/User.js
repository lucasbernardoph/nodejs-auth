import crypto from 'node:crypto';

import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 32,
      trim: true,
    },

    uuid: {
      type: String,
      required: false,
      default: () => crypto.randomUUID(), // testing only
      select: false,
    },

    gravatar: {
      type: String,
      required: false,
      default: null,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 32,
      select: false,
    },
  },
  {
    timestamps: true, // createdAt and updatedAt
  },
);

export const User = mongoose.model(schema, 'User');
