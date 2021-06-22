import { ValidationError } from 'yup';

import { ValidationFailed } from '~/errors';

const formatValidationError = (err: ValidationError): string =>
  `${err.errors.join(', ') || 'Falha na validação'}.`;

const validateSchema = async (schema: Record<string, any>, data: any) => {
  try {
    await schema.validate(data, { abortEarly: false });
  } catch (err) {
    const message = formatValidationError(err);

    throw new ValidationFailed(message);
  }
};

export default validateSchema;
