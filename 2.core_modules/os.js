import os from "os";

console.log("Operating System Information:");
console.log("OS Type:", os.type());
console.log("OS Platform:", os.platform());
console.log("OS Release:", os.release());
console.log("OS Architecture:", os.arch());
console.log("Total Memory:", Math.round(os.totalmem() / 1024 ** 3), "GB");
console.log("Free Memory:", Math.round(os.freemem() / 1024 ** 3), "GB");
console.log("CPU Information:", os.cpus());
