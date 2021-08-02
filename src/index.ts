import { getStuff } from './axios-example';
import { getFromDynamo, insertToDynamo } from './dynamo-example';

exports.handler = async (event) => {
    if (event.action === 'report') {
        const user = await getFromDynamo('a92cdfb9-2034-4bcd-88fb-4ec68b14c50d');
        console.log('Found a user (Abigail, hopefully)', JSON.stringify(user));


        // This is where I would send an email because it makes sense.
        return JSON.stringify(user);
    }

    const response = await getStuff();

    console.log('response', JSON.stringify(response));

    const flattenedData = {
        firstName: response.results[0].name.first,
        email: response.results[0].email
    };

    await insertToDynamo(flattenedData);

    return `Item inserted. Yay.`;
};