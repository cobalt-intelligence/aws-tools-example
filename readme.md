# AWS tools for web scraping

This is a sample bit of code that shows how to use AWS tools for web scraping. Tools such as Lambda, DynamoDB, and EventBridge. These tools all have free tiers that are incredibly generous. These free tiers allow you to do a ton of work for no cost.

## Getting started

Install all node packages with `npm i`.

You will need to install the AWS CLI. Found here - https://aws.amazon.com/cli/. Once it's installed, you'll need to set your config with your preferred region and id.

You will also need to install 7zip and add it to your PATH. This can be helpful for adding it to your PATH - https://stackoverflow.com/questions/14122732/unzip-files-7-zip-via-cmd-command
Download here - https://www.7-zip.org/download.html 

Create your Lambda function in AWS. Create your DynamoDB table in AWS. Update the `tableName` in the `dynamo-example.ts` file. Make sure to update the `sendToLambda` npm script with the same function name (where I currently have "hey-buddy"). 

## Using it

Video walkthrough here - https://youtu.be/3gYC7MvmSAo

Edit the code as you will.

Then send it there with `npm run sendToLambda`. This will transpile the typescript and then zip the `node_modules` and `dist` folder into a `function.zip` file name and update your lambda function. Run the function from AWS console or from EventBridge or anyway you'd like.

## Built With

* [axios](https://github.com/axios/axios) - axios for web requests
* [aws-sdk](https://aws.amazon.com/sdk-for-javascript/) - sdk for accessing aws from Javascript

## Authors

* **Jordan Hansen** - *Initial work* - [Jordan Hansen](https://github.com/cobalt-intelligence)


## License

This project is licensed under the ISC License