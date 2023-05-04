module.exports = {
    "dataset": {
        "current": null,
        "loadjson": function(jsondataset){
            var os = require("os");
            var parsed;
            try{
                parsed = JSON.parse(jsondataset);

                var index = 0;
                while (index < parsed.length){
                    var item = parsed[index]
                    if (!(typeof item === "object")){
                        var report = {
                            "module-trace": {
                                "error": "An error has occured while parsing the JSON dataset",
                                "error-type": ("The item at index " + index + " is not an object"),
                                "error-code-str": ("ITEM_" + index + "_NOT_OBJECT"),
                                "jsondataset": jsondataset
                            },
                            "system-trace": {
                                "platform": os.platform(),
                                "arch": os.arch(),
                                "release": os.release(),
                                "uptime": os.uptime(),
                                //Cpu load as percentage string, exemple: "10.00%"
                                "cpuload": os.loadavg()[0].toFixed(2) + "%",
                                //Used ram out of total ram as GigaByte string, exemple: "1.00GB/2.00GB"
                                "ramused": (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024 + "GB/" + os.totalmem() / 1024 / 1024 / 1024 + "GB",
                                //time string as "mm/dd/yyyy hh:mm:ss:ms" (use local 24h clock)
                                "time": new Date().toLocaleString(),
                                "timezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
                                "username": os.userInfo().username,
                                "hostname": os.hostname(),
                                "network": os.networkInterfaces()
                            }
                        }
        
                        return JSON.stringify(report, null, 2);
                    }
                    else{
                        var subitem = parsed[index].input;

                        //If subitem is not a string and the keyname of that not string is not input or output
                        if (!((typeof subitem === "string") && (!(subitem == null)))){
                            var report = {
                                "module-trace": {
                                    "error": "An error has occured while parsing the JSON dataset",
                                    "error-type": ("The item at index " + index + " is not valid"),
                                    "error-code-str": ("ITEM_" + index + "_INVALID"),
                                    "jsondataset": jsondataset
                                },
                                "system-trace": {
                                    "platform": os.platform(),
                                    "arch": os.arch(),
                                    "release": os.release(),
                                    "uptime": os.uptime(),
                                    //Cpu load as percentage string, exemple: "10.00%"
                                    "cpuload": os.loadavg()[0].toFixed(2) + "%",
                                    //Used ram out of total ram as GigaByte string, exemple: "1.00GB/2.00GB"
                                    "ramused": (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024 + "GB/" + os.totalmem() / 1024 / 1024 / 1024 + "GB",
                                    //time string as "mm/dd/yyyy hh:mm:ss:ms" (use local 24h clock)
                                    "time": new Date().toLocaleString(),
                                    "timezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
                                    "username": os.userInfo().username,
                                    "hostname": os.hostname(),
                                    "network": os.networkInterfaces()
                                }
                            }
            
                            return JSON.stringify(report, null, 2);
                        }

                        var subitem2 = parsed[index].output;

                        //If subitem is not a string and the keyname of that not string is not input or output

                        if (!((typeof subitem2 === "string") && (!(subitem2 == null)))){
                            var report = {
                                "module-trace": {
                                    "error": "An error has occured while parsing the JSON dataset",
                                    "error-type": ("The item at index " + index + " is not valid"),
                                    "error-code-str": ("ITEM_" + index + "_INVALID"),
                                    "jsondataset": jsondataset
                                },
                                "system-trace": {
                                    "platform": os.platform(),
                                    "arch": os.arch(),
                                    "release": os.release(),
                                    "uptime": os.uptime(),
                                    //Cpu load as percentage string, exemple: "10.00%"
                                    "cpuload": os.loadavg()[0].toFixed(2) + "%",
                                    //Used ram out of total ram as GigaByte string, exemple: "1.00GB/2.00GB"
                                    "ramused": (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024 + "GB/" + os.totalmem() / 1024 / 1024 / 1024 + "GB",
                                    //time string as "mm/dd/yyyy hh:mm:ss:ms" (use local 24h clock)
                                    "time": new Date().toLocaleString(),
                                    "timezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
                                    "username": os.userInfo().username,
                                    "hostname": os.hostname(),
                                    "network": os.networkInterfaces()
                                }
                            }
            
                            return JSON.stringify(report, null, 2);
                        }
                    }

                    index += 1;
                }

                this.current = jsondataset;

                return "Parsed and saved -- OK";
            }
            catch(error){
                jsondataset = this.current;
                var report = {
                    "module-trace": {
                        "error": "An error has occured while parsing the JSON dataset",
                        "error-type": "JSON Parse Error",
                        "error-code-str": "JSON_PARSE_ERROR",
                        "jsondataset": jsondataset
                    },
                    "node-trace": {
                        "error": error,
                        "error-code": error.code,
                        "error-message": error.message,
                        "error-stack": error.stack,
                        "error-name": error.name,
                        "error-type": error.type,
                        "error-errno": error.errno,
                        "error-syscall": error.syscall,
                        "error-path": error.path,
                        "error-dest": error.dest,
                    },
                    "system-trace": {
                        "platform": os.platform(),
                        "arch": os.arch(),
                        "release": os.release(),
                        "uptime": os.uptime(),
                        //Cpu load as percentage string, exemple: "10.00%"
                        "cpuload": os.loadavg()[0].toFixed(2) + "%",
                        //Used ram out of total ram as GigaByte string, exemple: "1.00GB/2.00GB"
                        "ramused": (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024 + "GB/" + os.totalmem() / 1024 / 1024 / 1024 + "GB",
                        //time string as "mm/dd/yyyy hh:mm:ss:ms" (use local 24h clock)
                        "time": new Date().toLocaleString(),
                        "timezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
                        "username": os.userInfo().username,
                        "hostname": os.hostname(),
                        "network": os.networkInterfaces()
                    }
                }

                return JSON.stringify(report, null, 2);
            }
        }
    },
    "predict": function(input){
        var process_time = Date.now();
        var os = require("os")
        var dataset = this.dataset.current;

        if (dataset == null){
            var report = {
                "module-trace": {
                    "error": "An error has occured while predicting the output",
                    "error-type": "No dataset",
                    "error-code-str": "NO_DATASET",
                    "input": input
                },
                "system-trace": {
                    "platform": os.platform(),
                    "arch": os.arch(),
                    "release": os.release(),
                    "uptime": os.uptime(),
                    //Cpu load as percentage string, exemple: "10.00%"
                    "cpuload": os.loadavg()[0].toFixed(2) + "%",
                    //Used ram out of total ram as GigaByte string, exemple: "1.00GB/2.00GB"
                    "ramused": (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024 + "GB/" + os.totalmem() / 1024 / 1024 / 1024 + "GB",
                    //time string as "mm/dd/yyyy hh:mm:ss:ms" (use local 24h clock)
                    "time": new Date().toLocaleString(),
                    "timezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
                    "username": os.userInfo().username,
                    "hostname": os.hostname(),
                    "network": os.networkInterfaces()
                }
            }

            return JSON.stringify(report, null, 2);
        }


        var index = 0;
        var dataset = JSON.parse(dataset);
        var average = [];
        while (index < dataset.length){
            var index2 = 0;
            var onepercent = (100/input.length)
            average[index] = [index, 0]
            while (index2 < input.length){
                if (input[index2] == dataset[index].input[index2]){
                    average[index][1] += onepercent
                }
                else{
                    var index3 = index2;
                    while (index3 < input.length){
                        if (input[index3] == dataset[index].input[index2]){
                            average[index][1] += onepercent
                            break;
                        }
                        else{
                            index3 += 1;
                        }
                    }
                }
                index2 += 1;
            }
            index += 1;
        }
        var best = 0;
        var bestindex = null;
        var index = 0;

        while (index < average.length){
            if (average[index][1] > best){
                best = average[index][1]
                bestindex = average[index][0]
            }
            index += 1;
        }

        if (bestindex == null){
            //No match found in the dataset
            //Gen report

            var report = {
                "module-trace": {
                    "error": "An error has occured while predicting the output",
                    "error-type": "No match found from the dataset",
                    "error-code-str": "NO_MATCH_FOUND",
                    "input": input
                },
                "system-trace": {
                    "platform": os.platform(),
                    "arch": os.arch(),
                    "release": os.release(),
                    "uptime": os.uptime(),
                    "cpuload": os.loadavg()[0].toFixed(2) + "%",
                    "ramused": (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024 + "GB/" + os.totalmem() / 1024 / 1024 / 1024 + "GB",
                    "time": new Date().toLocaleString(),
                    "timezone": Intl.DateTimeFormat().resolvedOptions().timeZone,
                    "username": os.userInfo().username,
                    "hostname": os.hostname(),
                    "network": os.networkInterfaces()
                }
            }

            return JSON.stringify(report, null, 2);
        }
        else{
            var report = {
                "output": dataset[bestindex].output,
                "details": {
                    "match": (best + "%"),
                    "input": input,
                    "dataset_item": JSON.stringify(dataset[bestindex], null, 2),
                    "dataset": JSON.stringify(dataset, null, 2),
                    "process_time": (Date.now() - process_time) + "ms"
                }
            }

            if (report.details.process_time === "0ms"){
                report.details.process_time = "<0ms";
            }
            
            return JSON.stringify(report, null, 2);
        }
    }
}