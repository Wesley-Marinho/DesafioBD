import { celebrate, Joi, Segments } from 'celebrate';

const create = celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        role: Joi.string().default('admin')
    }
}, { abortEarly: false });

const id = celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}, { abortEarly: false });

export {
    create,
    id
};
