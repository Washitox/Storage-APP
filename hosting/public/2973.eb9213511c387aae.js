"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2973],{2973:(R,p,s)=>{s.r(p),s.d(p,{HomePageModule:()=>b});var m=s(177),l=s(1075),f=s(4341),d=s(8621),u=s(980),h=s(8141),e=s(4438),F=s(4878),P=s(8136);const M=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],I=["Bytes","Kilobytes","Megabytes","Gigabytes","Pettabytes","Exabytes","Zettabytes","Yottabytes"];let y=(()=>{var t;class a{transform(o,n){const r=n?I:M;let g=Math.round(Math.log(o)/Math.log(1024));g=Math.min(g,r.length-1);const c=o/Math.pow(1024,g);return`${Math.round(100*c)/100} ${r[g]}`}}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275pipe=e.EJ8({name:"formatFileSize",type:t,pure:!0}),a})();function v(t,a){if(1&t){const i=e.RV6();e.j41(0,"ion-card",3)(1,"ion-card-header")(2,"ion-card-title"),e.EFF(3,"Choose Images to Upload"),e.k0s()(),e.j41(4,"ion-card-content")(5,"ion-button",4)(6,"input",5),e.bIt("change",function(n){e.eBV(i);const r=e.XpG();return e.Njj(r.uploadImage(n.target.files))}),e.k0s()()()()}}function U(t,a){if(1&t&&(e.j41(0,"div"),e.EFF(1),e.nI1(2,"number"),e.nrm(3,"ion-progress-bar",6),e.k0s()),2&t){const i=a.ngIf;e.R7$(),e.SpI(" Progress: ",e.bMT(2,2,i),"% "),e.R7$(2),e.FS9("value",i/100)}}function S(t,a){if(1&t&&(e.j41(0,"div"),e.EFF(1),e.nI1(2,"formatFileSize"),e.nI1(3,"formatFileSize"),e.k0s()),2&t){const i=a.ngIf;e.R7$(),e.Lme(" File size: ",e.bMT(2,2,i.totalBytes)," Data transfered: ",e.bMT(3,4,i.bytesTransferred)," ")}}const C=[{path:"",component:(()=>{var t;class a{constructor(o,n){this.afs=o,this.afStorage=n,this.isFileUploading=!1,this.isFileUploaded=!1,this.filesCollection=o.collection("imagesCollection"),this.files=this.filesCollection.valueChanges()}uploadImage(o){const n=o.item(0);if("image"!==n.type.split("/")[0])return void console.log("File type is not supported!");this.isFileUploading=!0,this.isFileUploaded=!1,this.imgName=n.name;const r=`202121415/${(new Date).getTime()}_${n.name}`,g=this.afStorage.ref(r);this.fileUploadTask=this.afStorage.upload(r,n),this.percentageVal=this.fileUploadTask.percentageChanges(),this.trackSnapshot=this.fileUploadTask.snapshotChanges().pipe((0,u.j)(()=>{this.UploadedImageURL=g.getDownloadURL(),this.UploadedImageURL.subscribe(c=>{this.storeFilesFirebase({name:n.name,filepath:c,size:this.imgSize}),this.isFileUploading=!1,this.isFileUploaded=!0},c=>{console.log(c)})}),(0,h.M)(c=>{this.imgSize=c.totalBytes}))}storeFilesFirebase(o){const n=this.afs.createId();this.filesCollection.doc(n).set(o).then(r=>{console.log(r)}).catch(r=>{console.log(r)})}}return(t=a).\u0275fac=function(o){return new(o||t)(e.rXU(F.Qe),e.rXU(P.ap))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-home"]],decls:10,vars:8,consts:[[3,"translucent"],["class","ion-text-center",4,"ngIf"],[4,"ngIf"],[1,"ion-text-center"],["color","primary","size","medium"],["type","file",3,"change"],[3,"value"]],template:function(o,n){1&o&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," Ionic Firebase File Upload Demo "),e.k0s()()(),e.j41(4,"ion-content"),e.DNE(5,v,7,0,"ion-card",1)(6,U,4,4,"div",2),e.nI1(7,"async"),e.DNE(8,S,4,6,"div",2),e.nI1(9,"async"),e.k0s()),2&o&&(e.Y8G("translucent",!0),e.R7$(5),e.Y8G("ngIf",!n.isFileUploading&&!n.isFileUploaded),e.R7$(),e.Y8G("ngIf",e.bMT(7,4,n.percentageVal)),e.R7$(2),e.Y8G("ngIf",e.bMT(9,6,n.trackSnapshot)))},dependencies:[m.bT,l.Jm,l.b_,l.I9,l.ME,l.tN,l.W9,l.eU,l.FH,l.BC,l.ai,m.Jj,m.QX,y],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),a})()}];let H=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[d.iI.forChild(C),d.iI]}),a})(),b=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.MD,f.YN,l.bv,H]}),a})()}}]);