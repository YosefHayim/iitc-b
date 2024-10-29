import fs from "fs"

const  logRequest = (req,res,next) => {
  const log = `
  Activity received at: ${new Date().toLocaleString()}
  Query parameters received: ${JSON.stringify(req.query)}
  Status Code: ${res.statusCode}\n`

  fs.appendFile('./logs.txt',log,(err) => {
    if (err) {
      console.error('There was an error appending the data to logs.txt',err);
      
    }
  })

  next()
}

export { logRequest }