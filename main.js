const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 创建图片
let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');//移除滤镜

// 滤镜功能
document.addEventListener('click',(e) => {
    // 判断按钮
    if(e.target.classList.contains('filter-btn')){
        // 添加滤镜
        if(e.target.classList.contains('brightness-add')){
            Caman('#canvas',img,function(){
                this.brightness(5).render();
            });
        }else if(e.target.classList.contains('brightness-remove')){
            Caman('#canvas',img,function(){
                this.brightness(-5).render();
            });
        }else if(e.target.classList.contains('contrast-add')){
            Caman('#canvas',img,function(){
                this.contrast(5).render();
            });
        }else if(e.target.classList.contains('contrast-remove')){
            Caman('#canvas',img,function(){
                this.contrast(-5).render();
            });
        }else if(e.target.classList.contains('saturation-add')){
            Caman('#canvas',img,function(){
                this.saturation(5).render();
            });
        }else if(e.target.classList.contains('saturation-remove')){
            Caman('#canvas',img,function(){
                this.saturation(-5).render();
            });
        }else if(e.target.classList.contains('vibrance-add')){
            Caman('#canvas',img,function(){
                this.vibrance(5).render();
            });
        }else if(e.target.classList.contains('vibrance-remove')){
            Caman('#canvas',img,function(){
                this.vibrance(-5).render();
            });
        }else if(e.target.classList.contains('vintage-add')){
            Caman('#canvas',img,function(){
                this.vintage().render();
            });
        }else if(e.target.classList.contains('lomo-add')){
            Caman('#canvas',img,function(){
                this.lomo().render();
            });
        }else if(e.target.classList.contains('clarity-add')){
            Caman('#canvas',img,function(){
                this.clarity().render();
            });
        }else if(e.target.classList.contains('sincity-add')){
            Caman('#canvas',img,function(){
                this.sinCity().render();
            });
        }else if(e.target.classList.contains('crossprocess-add')){
            Caman('#canvas',img,function(){
                this.crossProcess().render();
            });
        }else if(e.target.classList.contains('pinhole-add')){
            Caman('#canvas',img,function(){
                this.pinhole().render();
            });
        }else if(e.target.classList.contains('mostalgia-add')){
            Caman('#canvas',img,function(){
                this.nostalgia().render();
            });
        }else if(e.target.classList.contains('hermajest-add')){
            Caman('#canvas',img,function(){
                this.herMajesty().render();
            });
        }

    }
},false);

// 移除效果
revertBtn.addEventListener('click', () => {
    Caman('#canvas',img,function(){
        this.revert();
    });
},false);


// 上传文件
uploadFile.addEventListener('change',(e) => {
    // 获取文件
    const file = document.getElementById('upload-file').files[0];

    // 初始化图片文件
    const reader = new FileReader();

    if(file){
        // 设置文件名
        console.log(file.name);
        fileName = file.name;
        // 获取图片路径
        reader.readAsDataURL(file);
    }

    // 将图片附加到画板
    reader.addEventListener('load', () => {
        // 创建图片
        img = new Image();
        // 添加图片源
        img.src = reader.result;
        // 载入图片
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0,img.width,img.height);
            canvas.removeAttribute('data-caman-id');
        };
    },false);
});

// 下载图片
downloadBtn.addEventListener('click', (e) => {
    // 获取文件
    console.log(fileName);
    const fileExtension = fileName.slice(-4);
    // 重新设置文件名
    let newFileName;
    // 检测图片后缀
    if(fileExtension === '.jpg' || fileExtension === '.png'){
        newFileName = fileName.substring(0,fileName.length - 4) + '-wedited.jpg';
    }
    console.log(newFileName);
    // 下载
    download(canvas,newFileName);
});

// 下载方法
function download(canvas,filename){
    console.log(filename);
    // 初始化
    let e;
    // 创建下载链接
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg',0.8);
    
    // 监听事件
    e = new MouseEvent('click');
    link.dispatchEvent(e);
}