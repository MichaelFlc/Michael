var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
// var xlsx2 = require('xlsx');
// var xlsx = require("node-xlsx");


var mockServerOptions = {
  root: __dirname + '/mock'
};

function readJson(path, callback) {
  fs.readFile(path.join(__dirname, path), {encoding: 'utf-8'}, function (err, data) {
    if (err) console.error(err);
    callback(data);
  });
}

router.get('/', function (req, res) {
  res.render('index.html');
});

router.post('/editor/sign_in', function (req, res) {
  res.json({
    data: {
      authenticity_token: '1098312341313413443'
    }
  });
});

router.delete('/editor/sign_out', function (req, res) {
  res.json({
    message: 'OK'
  });
});

router.get('/editors/me', function (req, res) {
  res.json({
    // data: {
    //   "name": '我是主编大人',
    //   role: 'chief_editor'
    // }
    
     data: {
     "name": '我是小编。。。',
     role: 'editor'
     }
     
  });
});
//解析xlsx 文件
router.get('/xlsx',  function(req,res){
  var list = xlsx.parse(__dirname + "/mock/phone.xlsx");
  // console.log(xlsx);
  // res.json({
  //   data:'deal xlsx'
  // })
  res.send(list);
})

router.get('/documents/origin_websites', function (req, res) {
  res.sendFile('origin_websites.json', mockServerOptions);
});

router.get('/news/menu_labels/count', function (req, res) {
  res.json({
    "editor": {
      "awaiting_review_count": 9999999,
      "rejecting_count": 1,
      "accepted_count": 0
    }
  });
});

// get material
router.get('/documents/:articleId', function (req, res) {
  //res.sendFile('document_' + req.params.articleId + '.json', mockServerOptions);
  res.sendFile('document_5549af02695a32571ab11400.json', mockServerOptions);
});

// library list
router.get('/searches', function (req, res) {
  switch (req.query.state) {
    case 'broadcastList':
      res.sendFile('broadcast_list.json', mockServerOptions);
      break;
    case 'broadcastInfo':
      res.sendFile('broadcast_info.json', mockServerOptions);
      break;

    case 'broadcastContentList':
      res.sendFile('broadcast_content_list.json', mockServerOptions);
      break;
    case 'broadcastQaList':
      res.sendFile('broadcast_qa_list.json', mockServerOptions);
      break;
    case 'broadcastOnline':
      res.sendFile('broadcast_online.json', mockServerOptions);
      break;
    case 'test':
      res.sendFile('broadcast__online2.json', mockServerOptions);
      break;
  }
});

//column list
router.get('/columnListSearches', function (req, res) {
  // switch (req.query.state) {
  //   case 'source':
  //     res.sendFile('source_list.json', mockServerOptions);
  //     break;
  //   case 'release':
  //     res.sendFile('release_list.json', mockServerOptions);
  // }
   res.sendFile('column_list.json', mockServerOptions);
});

router.get('/columnList', function (req, res) {
   res.sendFile('columnHeaderlist.json', mockServerOptions);
});





// draft list
router.get('/news/information', function (req, res) {
  res.sendFile('draft_list_' + req.query.state + '.json', mockServerOptions);
});

// draft workflow
router.get('/news/information/:articleId/workflow_events', function (req, res) {
  res.sendFile('draft_workflow_events.json', mockServerOptions);
});

router.get('/news/information/today', function (req, res) {
  res.sendFile('today.json', mockServerOptions);
});

router.get('/news/information/editor_choice', function (req, res) {
  res.sendFile('editor_choice.json', mockServerOptions);
});

// get draft
router.get('/news/information/:articleId', function (req, res) {
  res.sendFile('information_5549af02695a32571ab11400.json', mockServerOptions);
});

router.get('/news/channels', function (req, res) {
  res.sendFile('channel.json', mockServerOptions);
});

router.put('/news/information/:articleId', function (req, res) {
  res.json({message: 'ok'});
});

router.post('/news/information', function (req, res) {
  console.log('Receive: ' + JSON.stringify(req.body));
  res.sendFile('information_5549af02695a32571ab11400.json', mockServerOptions);
});

router.post('/news/information/:articleId/workflow_events', function (req, res) {
  console.log('Receive: ' + JSON.stringify(req.body));
  res.json({message: 'ok'});
});

router.post('/news/information/source_muti_editing', function (req, res) {
  console.log('Receive: ' + JSON.stringify(req.body));
  res.json({message: 'ok'});
});

router.post('/news/information/release_muti_editing', function (req, res) {
  console.log('Receive: ' + JSON.stringify(req.body));
  res.json({message: 'ok'});
});


router.delete('/news/information/:articleId', function (req, res) {
  res.json({message: 'ok'});
});

module.exports = router;
