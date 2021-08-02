import aws from 'aws-sdk';

const documentClient = new aws.DynamoDB.DocumentClient({
    region: 'us-west-2'
});
const tableName = 'hey-buddy';

export async function insertToDynamo(item: any) {
    item.id = uuidv4();

    const insertParams: aws.DynamoDB.DocumentClient.PutItemInput = {
        TableName: tableName,
        Item: item
    };

    console.log('Insert params', insertParams);

    await documentClient.put(insertParams).promise();
}

export async function getFromDynamo(id: string) {

    const getParams: aws.DynamoDB.DocumentClient.GetItemInput = {
        TableName: tableName,
        Key: {
            id: id
        }
    };

    console.log('Get params', getParams);

    const response = await documentClient.get(getParams).promise();

    console.log('Response', response.Item);

    return response.Item;
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}