const OSS = require('ali-oss');
const env = process.env;

let client = new OSS.Wrapper({
  accessKeyId: env.ALI_SDK_AK_ID,
  accessKeySecret: env.ALI_SDK_AK_SECRET,
});

const bucketName = "luozhangxiaifuyuhuan";

// createBucket
client.putBucket(bucketName).then( (e) => {
  console.log(e);
});

// 上传buffer
client.useBucket(bucketName);
client.put('xiaoluo',new Buffer("hhhhhhh")).then( (e) => {
	console.log("upload object xiaoluo success ");
})

// 删除object

client.delete('xiaoluo').then((res)=> {
	console.log("delete obeject xiaoluo  success !");
})

//delete bucket
client.deleteBucket(bucketName).then((e)=>{
	console.log("delete bucket " + bucketName + ' success !');
}).catch ((err) => {
	console.log(err)
})