import {fromJS, List, Map} from 'immutable';

import * as Joi from 'joi';

export default function mapValidationSetFromJoi(validationResult:Joi.ValidationResult<any>):Map<string, Object> {
    let validation = Map<string, Object>();

    if (!validationResult) {
        return validation;
    }

    if (!validationResult.error) {
        return validation;
    }

    const {details} = validationResult.error;
    details.map(item => {
        var listOfIssues = validation.get(item.path) as List<string> || List<string>();
        listOfIssues = listOfIssues.push(fromJS(item));

        validation = validation.set(item.path, listOfIssues);
    });

    return validation;
}