/**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "dú",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CallmeSun",
  description: "Random Ảnh Dú Gái Cực Bổ Mắt ( Lưu Ý Đây Là Lệnh Ảnh 18+ Cân Nhắc Trước Khi Sử Dụng)",
  commandCategory: "Random-img",
  usages: "dú",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/Yjeajvg.jpg",
"https://i.imgur.com/R6IANqE.jpg",
"https://i.imgur.com/8bnuchD.jpg",
"https://i.imgur.com/YiX4yS9.jpg",
"https://i.imgur.com/8IUaxtx.jpg",
"https://i.imgur.com/71CTDot.jpg",
"https://i.imgur.com/L2emsEt.jpg",
"https://i.imgur.com/EJbGaqx.jpg",
"https://i.imgur.com/N44LhXM.jpg",
"https://i.imgur.com/yRBuo11.jpg",
 "https://i.imgur.com/NlxnQ59.jpg",
 "https://i.imgur.com/epTOxm6.jpg",
 "https://i.imgur.com/wuivKM0.jpg",
 "https://i.imgur.com/TmGWPiL.jpg",
 "https://i.imgur.com/0eCIMV0.jpg",
 "https://i.imgur.com/TfCkg8u.jpg",
 "https://i.imgur.com/Dq6wWir.jpg",
 "https://i.imgur.com/TxPiuEm.jpg",
 "https://i.imgur.com/ihMwIEt.jpg",
 "https://i.imgur.com/ZnOET7L.jpg",
 "https://i.imgur.com/FUqt1tH.jpg",
 "https://i.imgur.com/AaJgzLp.jpg",
 "https://i.imgur.com/Ye3kd1w.jpg",
 "https://i.imgur.com/mvgxkIV.jpg",
 "https://i.imgur.com/CcjNaLN.jpg",
 "https://i.imgur.com/kW5pE8q.jpg",
 "https://i.imgur.com/iZowivb.jpg",
 "https://i.imgur.com/lnxKJq3.jpg",
 "https://i.imgur.com/F2bREnY.jpg",
 "https://i.imgur.com/lHcNHpO.jpg",
 "https://i.imgur.com/11NqCpP.jpg",
 "https://i.imgur.com/tK5LfDo.jpg",
 "https://i.imgur.com/7Gwdck8.jpg",
 "https://i.imgur.com/shKHJA1.jpg",
 "https://i.imgur.com/cI3sPMX.jpg",
 "https://i.imgur.com/qdpAz9D.jpg",
 "https://i.imgur.com/pN0MQq0.jpg",
 "https://i.imgur.com/jCbIrvf.jpg",
 "https://i.imgur.com/D4da2RD.jpg",
 "https://i.imgur.com/FRx4q4F.jpg",
 "https://i.imgur.com/UZe2itb.jpg",
 "https://i.imgur.com/B1DoMjW.jpg",
 "https://i.imgur.com/vPvtHTG.jpg",
 "https://i.imgur.com/7hDj4L4.jpg",
 "https://i.imgur.com/Re9AsfE.jpg",
 "https://i.imgur.com/CpbKXNb.jpg",
 "https://i.imgur.com/X2BmpO3.jpg",
 "https://i.imgur.com/ENhF9SY.jpg",
 "https://i.imgur.com/4nB8n51.jpg",
 "https://i.imgur.com/m2wKvRA.jpg",
 "https://i.imgur.com/UaupnMB.jpg",
 "https://i.imgur.com/p4PFHFv.jpg",
 "https://i.imgur.com/MLy1hwc.jpg",
 "https://i.imgur.com/2JG2N7E.jpg",
 "https://i.imgur.com/SGReyeG.jpg",
 "https://i.imgur.com/JtTFWxM.jpg",
 "https://i.imgur.com/Ei6pnbi.jpg",
 "https://i.imgur.com/flxVpyd.jpg",
 "https://i.imgur.com/bGWUZKF.jpg",
 "https://i.imgur.com/HhG0Wjq.jpg",
 "https://i.imgur.com/kGw8EBS.jpg",
 "https://i.imgur.com/jIr8RX2.jpg",
 "https://i.imgur.com/AOFNeLA.jpg",
 "https://i.imgur.com/dGAost4.jpg",
 "https://i.imgur.com/uLknKoJ.jpg",
 "https://i.imgur.com/RXP9628.jpg",
 "https://i.imgur.com/UQHsdPU.jpg",
 "https://i.imgur.com/aJqkHbN.jpg",
 "https://i.imgur.com/n3Aqzyd.jpg",
 "https://i.imgur.com/ZUG1cGv.jpg",
 "https://i.imgur.com/pFkJoGW.jpg",
 "https://i.imgur.com/ovfmT5W.jpg",
 "https://i.imgur.com/oGSGsNf.jpg",
 "https://i.imgur.com/M71wUs6.jpg",
 "https://i.imgur.com/OMEuUtn.jpg",
 "https://i.imgur.com/NniVjSX.jpg",
 "https://i.imgur.com/DVM4p9d.png",
 "https://i.imgur.com/tpOhVKE.jpg",
 "https://i.imgur.com/uXzwwSv.jpg",
 "https://i.imgur.com/eqBVfKs.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("Bạn cần 100 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
   var callback = () => api.sendMessage({body:`Suốt ngày dú dú😼\n» Số dư: -100 đô «`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};