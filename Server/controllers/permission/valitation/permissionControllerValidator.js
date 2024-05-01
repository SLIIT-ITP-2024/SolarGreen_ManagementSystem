const Joi = require('joi');

class Validator {
  static createUserRole(req, res) {
    const schema = Joi.object({
      email: Joi.string().email().required().messages({
        'any.required': 'Email is required',
        'string.email': 'Invalid email format'
      }),
      username: Joi.string().min(3).max(30).required().messages({
        'any.required': 'Username is required',
        'string.min': 'Username must be at least 3 characters long',
        'string.max': 'Username must not exceed 30 characters'
      }),
      password: Joi.string().required().messages({
        'any.required': 'Password is required'
      }),
      role: Joi.string().required().messages({
        'any.required': 'Role is required'
      }),
      validTime: Joi.string().required().messages({
        'any.required': 'Valid time is required',
      })
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
  
  }
  


  static updateUserRole(req, res) {
    const schema = Joi.object({
      email: Joi.string().email().required().messages({
        'any.required': 'Email is required',
        'string.email': 'Invalid email format'
      }),
      username: Joi.string().min(3).max(30).required().messages({
        'any.required': 'Username is required',
        'string.min': 'Username must be at least 3 characters long',
        'string.max': 'Username must not exceed 30 characters'
      }),
      role: Joi.string().required().messages({
        'any.required': 'Role is required'
      }),
      validTime: Joi.string().required().messages({
        'any.required': 'Valid time is required',
      })
    });

    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
  }

  static searchByUsername(req, res) {
    const schema = Joi.object({
      username: Joi.string().min(3).max(30).required().messages({
        'any.required': 'Username is required',
        'string.min': 'Username must be at least 3 characters long',
        'string.max': 'Username must not exceed 30 characters'
      })
    });

    const { error } = schema.validate(req.params);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
  }
}

module.exports = Validator;
