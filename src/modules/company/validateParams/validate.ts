import { celebrate, Joi, Segments } from 'celebrate';

const create = celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        cnpj: Joi.string().required(),
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
