import inquirer from "inquirer";
import * as fs from "node:fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
      message: "Enter URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    //generate QR
    const urlName = answers.URL;
    var qr_png = qr.image(urlName, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr_code.png"));

    //write a url to URL.txt
    fs.writeFile("URL.txt", urlName, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })

  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
