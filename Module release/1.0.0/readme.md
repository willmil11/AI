# Model

## What is model?
Model is a node.js module that uses a new AI technology that finds the best output for a given input in a IO JSON dataset. It is very fast and efficient, and can be used for many things, such as: Text matching, image matching, object detection, sound detection, speech to text, text to speech, make a LLM (Large language model), and much more.

## Installation:
If you got npm and node.js installed on your device, you can install model by running this command in the terminal in the root directory of your project:
```bash
npm install model
```
## Docs:
http://89.159.202.47/Model/docs.html

## Usage:
Require Model in your node.js project
```js
var model = require("model");
```
Create a dataset:
```js
var dataset = [
    {
        "input": "Hello",
        "output": "Hi"
    },
    {
        "input": "How are you?",
        "output": "I'm fine, thanks."
    }
]
```
Parse the dataset:
```js
model.dataset.loadjson(JSON.stringify(dataset));
```
Predict the output:
```js
var output = model.predict("Hello");
```
Print out the output in the console
```js
console.log(output);
```
The output should be:
```bash
{
  "output": "Hi",
  "details": {
    "match": "100%",
    "input": "Hello",
    "dataset_item": "{\n  \"input\": \"Hello\",\n  \"output\": \"Hi\"\n}",
    "dataset": "[\n  {\n    \"input\": \"Hello\",\n    \"output\": \"Hi\"\n  },\n  {\n    \"input\": \"How are you?\",\n    \"output\": \"I'm fine, thanks.\"\n  }\n]",
    "process_time": "<0ms"
  }
}
```
If you want only the actual output of the AI (not the details), print the output in the console as so:
```js
output = JSON.parse(output);
console.log(output.output);
```
The output should be:
```bash
Hi
```
It would the same if you gave as an input "How are you?" to Model, the output would be:
```bash
I'm fine, thanks.
```
Even if the given output is not exactly the one in the dataset it would still still give the best output for the given input. For example, if you gave as an input ".... How r uuuu ??", the output would still be:
```bash
I'm fine, thanks.
```

## How does it work?
For the given input Model calculates the percentage of similarity (match in the output json block of the details) between the given input and each input in the dataset. The output with the highest percentage of similarity is the best output for the given input.

## Info:
You're forbidden to edit or sell the code of Model.

## Dev contacts:
Email: willmil1110@gmail.com
<br>
Discord: willmil11#8988