const exp = require('express');
const path = require('path')
const repo = require('./utils/getRepoData')
const app = exp()
const port = process.env.PORT || 3002
const publicPath = path.join(__dirname, '/../public');
console.log('view->' + publicPath);
//app.use(exp.static(publicPath))
//const response=repo('express');
//console.log(response)
app.set('view engine', 'hbs')
app.use(exp.static(publicPath))
// app.set('views',viewsPath)

app.get('', (req, res) => {
    res.render('index');
})
// repo('express').then(r => {
//     console.log(r)
//     res.render('RepData', {
//         name: 'express'
//     })
// })
app.get('/getRepo', (req, res) => {
    const repName = req.query.repName;
    repo(repName).then(r => {
        console.log(r)
        res.send(
            {
                "name": r
            }
        )
    })


    // res.send('hi');

    //  res.render('',{
    //      data:'express'
    //  });

})
app.listen(port, () => {
    console.log('listening to port')
}) 